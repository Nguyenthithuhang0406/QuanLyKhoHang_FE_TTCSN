/* eslint-disable */
import React from "react";

import "./ListExportSlip.css";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
const ListExportSlip = () => {
  return (
    <>
      <Header className="ListExportSlip" />
      <NavBar />
      <div className="container_ListExportSlip">
        <div className="sub_ListExportSlip">
          <div className="sub_1_ListExportSlip">
            <div>
              <span>Mã phiếu</span>
              <input type="text" className="input_ListExportSlip" />
              <span>Nguồn xuất</span>
              <select name="" id="" className="input1_ListExportSlip">
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
              <select name="" id="" className="input2_ListExportSlip">
                <option value=""></option>
                <option value="">Chờ duyệt</option>
                <option value="">Đã xuất</option>
                <option value="">Từ chối</option>
                <option value="">Đã duyệt</option>
                <option value="">Hoàn hàng</option>
              </select>
              <span className="date_ListExportSlip1">Từ ngày</span>
              <input type="date" className="date_ListExportSlip" />
              <span className="date_ListExportSlip2">Đến ngày</span>
              <input type="date" className="date_ListExportSlip3" />
            </div>
          </div>
          <div className="sub_2_ListExportSlip">
            <span>
              Tìm kiếm <i class="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div className="sub_3_ListExportSlip">
          <p>+ Tạo phiếu xuất kho</p>
        </div>
        <div className="table_ListExportSlip">
          <table className="table2_ListExportSlip">
            <tr className="ListExportSlip_tr">
              <th className="ListExportSlip_th_1">STT</th>
              <th className="ListExportSlip_th">Mã phiếu</th>
              <th className="ListExportSlip_th">Nguồn xuất</th>
              <th className="ListExportSlip_th">Giá trị</th>
              <th className="ListExportSlip_th">Thời gian</th>
              <th className="ListExportSlip_th">Tình trạng</th>
              <th className="ListExportSlip_th">Thao tác</th>
            </tr>
            <tr className="listExportSlip_tr_2">
              <td className="ListExportSlip_td">1</td>
              <td className="ListExportSlip_td">XXXXX </td>
              <td className="ListExportSlip_td">Nhà cung cấp A</td>
              <td className="ListExportSlip_td">50.000.000</td>
              <td className="ListExportSlip_td">13/11/2022 15:30</td>
              <td className="ListExportSlip_td">
                <span className="button1_ListExportSlip">Chờ duyệt</span>
              </td>
              <td className="purple">
                <span className="pen_ListExportSlip">
                  <i class="fa-solid fa-pen penListExportSlip"></i>
                </span>
                <span className="bin_ListExportSlip">
                  <i class="fa-solid fa-trash binListExportSlip"></i>
                </span>
              </td>
            </tr>
            <tr className="listExportSliptr">
              <td className="ListExportSlip_td">2</td>
              <td className="ListExportSlip_td">XXXXX </td>
              <td className="ListExportSlip_td">Nhà cung cấp B</td>
              <td className="ListExportSlip_td">50.000.000</td>
              <td className="ListExportSlip_td">13/11/2022 11:09</td>
              <td className="ListExportSlip_td">
                <span className="button2_ListExportSlip">Đã xuất</span>
              </td>
              <td className="purple">
                <span className="pen_ListExportSlip">
                  <i className="fa-solid fa-pen penListExportSlip"></i>
                </span>
                <span className="bin_ListExportSlip">
                  <i class="fa-solid fa-trash binListExportSlip"></i>
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListExportSlip;
