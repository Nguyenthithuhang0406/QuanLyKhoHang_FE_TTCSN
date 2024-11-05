/* eslint-disable */
import React, { useEffect, useState } from "react";

import "./InforImportSlip.css";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { getImportSlipById } from "@/api/importSlipApi/importSlip";
import { formatCurrency, formatDate } from "@/utils/function/slipFuntion";

const InforImportSlip = () => {
  const [importSlip, setImportSlip] = useState({});
  const [type, setType] = useState("");

  const { importSlipId } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    const getImportSlip = async () => {
      const res = await getImportSlipById(importSlipId);
      if (res.importSlip.agencyId?._id) {
        setType("Agency");
      } else {
        if (res.importSlip.providerId?._id) {
          setType("Provider");
        }
      }
      // console.log(res.importSlip);
      setImportSlip(res.importSlip);
    };

    getImportSlip();
  }, [importSlipId]);

  const calculateLineTotal = (product) => {
    return (
      product.productId?.productPrice *
      product.quantity *
      (1 - product.discount / 100)
    );
  };
  return (
    <div class="importForm-container">
      <Header className="header" />
      <NavBar />
      <div
        className="importForm-nav"
        onClick={() => navigate(`/listImportSlip/${type}`)}
        style={{ display: "flex", cursor: "pointer" }}
      >
        <p>
          Xuất - nhập với{" "}
          {(type === "Provider" && "NCC") || (type === "Agency" && "Nội bộ")}{" "}
          {">"}{" "}
        </p>
        <p>Xem phiếu nhập kho</p>
      </div>
      <div className="importForm-main">
        <div className="importForm-title">PHIẾU NHẬP KHO</div>
        <div className="importForm">
          <p>Thông tin chung</p>
          <div className="importForm-infor">
            <div className="col">
              <div className="col-item">
                <label for="if-agencyName">Nguồn xuất</label>
                <input
                  className="if-inforBox"
                  name="if-agencyName"
                  value={
                    (type === "Provider" &&
                      importSlip.providerId?.providerName) ||
                    (type === "Agency" && importSlip.agencyId?.agencyName)
                  }
                  readOnly
                  style={{ backgroundColor: "transparent" }}
                />
              </div>

              <div className="col-item">
                <label for="if-agencyID">Mã nguồn</label>
                <div className="if-inforBox" name="if-agencyID">
                  {(type === "Provider" &&
                    importSlip.providerId?.providerCode) ||
                    (type === "Agency" && importSlip.agencyId?.agencyCode)}
                </div>
              </div>

              <div className="col-item">
                <label for="if-agencyPhone">Điện thoại</label>
                <div classNameName="if-inforBox" name="if-agencyPhone">
                  {(type === "Provider" &&
                    importSlip.providerId?.providerPhone) ||
                    (type === "Agency" && importSlip.agencyId?.agencyPhone)}
                </div>
              </div>

              <div className="col-item">
                <label for="if-agencyAddress">Địa chỉ</label>
                <div className="if-inforBox if-formDescribe" name="if-agencyID">
                  {(type === "Provider" &&
                    importSlip.providerId?.providerAddress) ||
                    (type === "Agency" && importSlip.agencyId?.agencyAddress)}
                </div>
              </div>
            </div>

            <div clasNames="col">
              <div className="col-item">
                <label for="if-formID">Mã phiếu</label>
                <div className="if-inforBox" name="if-formID">
                  {importSlip.importSlipCode}
                </div>
              </div>

              {/* <div class="col-item">
                <label for="if-Kho">Nhập tại kho</label>
                <div class="if-inforBox" name="if-Kho">
                  Kho tổng
                </div>
              </div>

              <div className="col-item">
                <label for="if-KhoID">Mã kho</label>
                <div className="if-inforBox" name="if-KhoID">
                  KHO123
                </div>
              </div> */}

              <div className="col-item">
                <label for="if-formDescribe">Lý do</label>
                <div
                  className="if-inforBox if-formDescribe"
                  name="if-formDescribe"
                >
                  {importSlip.reason}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="importForm-listProduct">
          <table>
            <tr>
              <th>STT</th>
              <th>Tên hàng hóa</th>
              <th>Mã hàng</th>
              <th>Đơn vị tính</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Chiết khấu</th>
              <th>Thành tiền</th>
            </tr>
            {importSlip.products?.length > 0 &&
              importSlip.products?.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>{product.productId?.productName}</td>
                  <td>{product.productId?.productCode}</td>
                  <td>{product.productId?.productDVT}</td>
                  <td>
                    {formatCurrency(product.productId?.productPrice || 0)}
                  </td>
                  <td>{product.quantity}</td>
                  <td>{product.discount} %</td>
                  <td>{formatCurrency(calculateLineTotal(product))}</td>
                </tr>
              ))}
            <tr>
              <td colspan="7">Tổng</td>
              <td>{formatCurrency(importSlip.importPrice)}</td>
            </tr>
          </table>
        </div>

        <div className="if-contract">
          <div className="if-contact-title">Hợp đồng</div>
          <div className="if-contract-img">
            {importSlip.contracts?.contractMedia.length > 0 &&
              importSlip.contracts?.contractMedia.map(
                (contractMedia, index) => (
                  <img
                    className="img_contract"
                    src={contractMedia}
                    alt=""
                    key={index}
                  />
                )
              )}
          </div>
        </div>
      </div>
      <div className="status-panel">
        <div className="status-header">
          <h4>Tình trạng</h4>
        </div>
        <div className="status-group">
          <div className="status-label">
            Tạo bởi <button className="status-btn delete">Xóa</button>
          </div>

          <div className="status-info">
            <input type="text" value={importSlip.userId?.fullName} readOnly />
          </div>
          <div className="status-info">
            <input type="text" value={formatDate(importSlip.createdAt)} />
          </div>
        </div>

        <div className="status-group">
          <div className="status-label">
            Duyệt bởi <button className="status-btn approve">Duyệt</button>{" "}
          </div>

          <div className="status-info">
            <input
              type="text"
              value={
                (importSlip.status === "CONFIRMED" &&
                  importSlip.userEditStatus?.fullName) ||
                ""
              }
              readOnly
            />
          </div>
          <div className="status-info">
            <input
              type="text"
              value={
                (importSlip.status === "CONFIRMED" &&
                  formatDate(importSlip.updatedAt)) ||
                ""
              }
              readOnly
            />
          </div>
        </div>

        <div className="status-group">
          <div className="status-label">
            Từ chối bởi <button className="status-btn reject">Từ chối</button>
          </div>

          <div className="status-info">
            <input
              type="text"
              value={
                (importSlip.status === "REJECTED" &&
                  importSlip.userEditStatus?.fullName) ||
                ""
              }
              readOnly
            />
          </div>
          <div className="status-info">
            <input
              type="text"
              value={
                (importSlip.status === "REJECTED" &&
                  formatDate(importSlip.updatedAt)) ||
                ""
              }
              readOnly
            />
          </div>
        </div>

        <div className="status-group">
          <div className="status-label">
            Đã nhập bởi{" "}
            <button className="status-btn exported" disabled>
              Đã xuất
            </button>
          </div>

          <div className="status-info">
            <input
              type="text"
              value={
                (importSlip.status === "DONE" &&
                  importSlip.userEditStatus?.fullName) ||
                ""
              }
              readOnly
            />
          </div>
          <div className="status-info">
            <input
              type="text"
              value={
                (importSlip.status === "DONE" &&
                  formatDate(importSlip.updatedAt)) ||
                ""
              }
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InforImportSlip;
