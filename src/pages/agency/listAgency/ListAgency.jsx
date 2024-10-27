/* eslint-disable */
import React from "react";

import "./ListAgency.css";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
const ListAgency = () => {
  return (
    <>
      <Header className="ListAgency" />
      <NavBar />
      <div className="container_ListAgency">
        <div className="sub_ListAgency">
          <div className="sub_1_ListAgency">
            <div>
              <span>Mã nguồn</span>
              <input type="text" className="input_ListAgency" />
              <span>Tên nguồn</span>
              <input type="text" className="input_ListAgency" />
            </div>
            <div>
              <span>Loại nguồn</span>
              <select name="" id="" className="input2_ListAgency">
                <option value=""></option>
                <option value="">Đại lý</option>
                <option value="">Nhà cung cấp</option>
              </select>
              <span>Số điện thoại</span>
              <input type="text" className="input_ListAgency" />
            </div>
          </div>
          <div className="sub_2_ListAgency">
            <span>
              Tìm kiếm <i class="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div className="sub_3_ListAgency">
          <p>+ Thêm mới nguồn</p>
        </div>
        <div className="table_ListAgency">
          <table className="table2_ListAgency">
            <tr className="ListAgency_tr">
              <th className="ListAgency_th_1">STT</th>
              <th className="ListAgency_th1">Tên nguồn</th>
              <th className="ListAgency_th">Loại nguồn</th>
              <th className="ListAgency_th">Mã nguồn</th>
              <th className="ListAgency_th">Số điện thoại</th>
              <th className="ListAgency_th1">Địa chỉ</th>
              <th className="ListAgency_th">Thao tác</th>
            </tr>
            <tr className="listAgency_tr_2">
              <td className="listAgency_td_2">1</td>
              <td className="listAgency_td">Nhà cung cấp A</td>
              <td className="listAgency_td">Nhà cung cấp</td>
              <td className="listAgency_td">XXXXX </td>
              <td className="listAgency_td">12345678</td>
              <td className="listAgency_td">37 Cộng Hoà, Tân Bình, TPHCM</td>
              <td className="purple">
                {/* <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span> */}
                <span className="bin_ListAgency">
                  <i className="fa-solid fa-trash" style={{color: 'red'}}></i>
                </span>
              </td>
            </tr>
            
          </table>
        </div>
      </div>
    </>
  );
};

export default ListAgency;
