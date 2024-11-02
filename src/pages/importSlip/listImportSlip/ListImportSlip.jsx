/* eslint-disable */
import React from "react";

import "./ListImportSlip.css";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
const ListImportSlip = () => {
  return (
    <>
      <Header className="ListImportSlip" />
      <NavBar />
      <div className="container_ListImportSlip">
        <div className="sub_ListImportSlip">
          <div className="sub_1_ListImportSlip">
            <div>
              <span>Mã phiếu</span>
              <input type="text" className="input_ListImportSlip" />
              <span>Nguồn nhập</span>
              <select name="" id="" className="input1_ListImportSlip">
                <option value=""></option>
                <option value="">Nhà cung cấp A</option>
                <option value="">Nhà cung cấp B</option>
                <option value="">Nhà cung cấp C</option>
                <option value="">Nhà cung cấp D</option>
                <option value="">Nhà cung cấp E</option>
                <option value="">Nhà cung cấp F</option>
              </select>
            </div>
            <div>
              <span>Tình trạng</span>
              <select name="" id="" className="input2_ListImportSlip">
                <option value=""></option>
                <option value="">Chờ duyệt</option>
                <option value="">Đã nhập</option>
                <option value="">Từ chối</option>
                <option value="">Đã duyệt</option>
                <option value="">Hoàn hàng</option>
              </select>
              <span className="date_ListImportSlip1">Từ ngày</span>
              <input type="date" className="date_ListImportSlip" />
              <span className="date_ListImportSlip2">Đến ngày</span>
              <input type="date" className="date_ListImportSlip3" />
            </div>
          </div>
          <div className="sub_2_ListImportSlip">
            <span>
              Tìm kiếm <i class="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div className="sub_3_ListImportSlip">
          <p>+ Tạo phiếu nhập kho</p>
        </div>
        <div className="table_ListImportSlip">
          <table className="table2_ListImportSlip">
            <tr className="ListImportSlip_tr">
              <th className="ListImportSlip_th_1">STT</th>
              <th className="ListImportSlip_th">Mã phiếu</th>
              <th className="ListImportSlip_th">Nguồn nhập</th>
              <th className="ListImportSlip_th">Giá trị</th>
              <th className="ListImportSlip_th">Thời gian</th>
              <th className="ListImportSlip_th">Tình trạng</th>
              <th className="ListImportSlip_th">Thao tác</th>
            </tr>
            <tr className="listImportSlip_tr_2">
              <td className="ListImportSlip_td">1</td>
              <td className="ListImportSlip_td">XXXXX </td>
              <td className="ListImportSlip_td">Nhà cung cấp A</td>
              <td className="ListImportSlip_td">50.000.000</td>
              <td className="ListImportSlip_td">13/11/2022 15:30</td>
              <td className="ListImportSlip_td">
                <span className="button1_ListImportSlip">Chờ duyệt</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen penListImportSlip"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash binListImportSlip"></i>
                </span>
              </td>
            </tr>
            <tr className="listImportSliptr">
              <td className="ListImportSlip_td">2</td>
              <td className="ListImportSlip_td">XXXXX </td>
              <td className="ListImportSlip_td">Nhà cung cấp B</td>
              <td className="ListImportSlip_td">50.000.000</td>
              <td className="ListImportSlip_td">13/11/2022 11:09</td>
              <td className="ListImportSlip_td">
                <span className="button2_ListImportSlip">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i className="fa-solid fa-pen penListImportSlip"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash binListImportSlip"></i>
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListImportSlip;
