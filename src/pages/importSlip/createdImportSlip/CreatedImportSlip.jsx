/* eslint-disable */
import React, { useState } from "react";

import "./CreatedImportSlip.css";
import NavBar from "@/components/navbar/NavBar";
import Header from "@/components/header/Header";
import recycle from "../../../assets/images/bin.png";
import upload from "../../../assets/images/upload.png";
const CreatedImportSlip = () => {
  const [formData, setFormData] = useState({
    nguonNhan: "",
    maPhieu: "",
    maNguon: "",
    soDienThoai: "",
    diaChi: "",
    lyDoXuat: "",
  });

  const [items] = useState([
    {
      id: 1,
      name: "ĐT Samsung Galaxy Z",
      code: "XXXXX",
      unit: "Cái",
      price: "30,000,000",
      quantity: "10",
      discount: "5%",
      total: "285,000,000",
    },
    {
      id: 2,
      name: "ĐT Xiaomi Redmi 10",
      code: "XXXXX",
      unit: "Cái",
      price: "3,998,000",
      quantity: "10",
      discount: "",
      total: "39,980,000",
    },
  ]);
  return (
    <div className="main-container">
      <Header className="header-createdImportSlip" />
      <div className="content-container-createdImportSlip">
        <NavBar />
        <div className="right-content">
          <div className="navigation-path">
            Xuất - nhập với NCC &gt; Tạo mới phiếu nhập kho
          </div>

          <div className="action-buttons">
            <button className="add-button external">
              + Thêm hàng từ file ngoài
            </button>
            <button className="add-button system">
              + Thêm hàng từ hệ thống
            </button>
          </div>

          <div className="form-container">
            <h2 className="form-title">PHIẾU NHẬP KHO</h2>

            <div className="form-section">
              <div className="info-section">
                <h3>Thông tin chung</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Nguồn xuất</label>
                    <select
                      value={formData.nguonXuat}
                      onChange={(e) =>
                        setFormData({ ...formData, nguonXuat: e.target.value })
                      }
                    >
                      <option value="">Chọn nguồn xuất</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Mã phiếu</label>
                    <select
                      className="ma-phieu"
                      value={formData.maPhieu}
                      onChange={(e) =>
                        setFormData({ ...formData, maPhieu: e.target.value })
                      }
                    >
                      <option value="">Chọn mã phiếu</option>
                    </select>
                  </div>
                  <div className="form-group short-input">
                    <label>Mã nguồn</label>
                    <select
                      value={formData.maNguon}
                      onChange={(e) =>
                        setFormData({ ...formData, maNguon: e.target.value })
                      }
                    >
                      <option value="">Chọn mã nguồn</option>
                    </select>
                  </div>
                  <div className="form-group short-input">
                    <label>Số điện thoại</label>
                    <input
                      type="text"
                      value={formData.soDienThoai}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          soDienThoai: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Địa chỉ</label>
                    <textarea
                      rows="5"
                      value={formData.diaChi}
                      onChange={(e) =>
                        setFormData({ ...formData, diaChi: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Lý do nhập</label>
                    <textarea
                      rows="5"
                      value={formData.lyDoNhap}
                      onChange={(e) =>
                        setFormData({ ...formData, lyDoNhap: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="table-section">
                <table>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên hàng hóa</th>
                      <th>Mã hàng</th>
                      <th>Đơn vị tính</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Chiết khấu</th>
                      <th>Thành tiền</th>
                      <th>Xóa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.code}</td>
                        <td>{item.unit}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.discount}</td>
                        <td>{item.total}</td>
                        <td>
                          <button className="delete-button">
                            <img src={recycle} alt="" className="bin" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    <tr className="total-row">
                      <td colSpan="7">Tổng</td>
                      <td>315,154,168</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="attachment-section">
                <div className="contract-section">
                  <h3>Hợp đồng</h3>
                  <div className="upload-group">
                    <div className="form-group">
                      <label>Nội dung</label>
                      <input type="text" />
                    </div>
                    <br />
                    <div className="form-group">
                      <label>Hình ảnh</label>
                      <div className="file-input-wrapper">
                        <input type="file" className="hidden-file-input" />
                        <div className="input-img">
                          <input type="text" />
                          <div className="custom-file-input">
                            <div className="custom-file-input">Ảnh</div>
                            {/* <img src={upload} alt="" className="upload" /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="document-section">
                  <h3>Sở cứ</h3>
                  <div className="upload-group">
                    <div className="form-group">
                      <label>Nội dung</label>
                      <input type="text" />
                    </div>
                    <br />
                    <div className="form-group">
                      <label>Hình ảnh</label>
                      <div className="file-input-wrapper">
                        <input type="file" className="hidden-file-input" />
                        <div className="input-img">
                          <input type="text" />
                          <div className="custom-file-input">
                            <img src={upload} alt="" className="upload" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>

              <div className="button-section">
                <button className="cancel-button">Hủy</button>
                <button className="save-button">Lưu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatedImportSlip;
