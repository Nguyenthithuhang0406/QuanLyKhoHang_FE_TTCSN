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

              {/* <select name="" id="" className="input1_ListAgency">
                <option value=""></option>
                <option value="">Nhà cung cấp A</option>
                <option value="">Nhà cung cấp B</option>
                <option value="">Nhà cung cấp C</option>
                <option value="">Nhà cung cấp D</option>
                <option value="">Nhà cung cấp E</option>
                <option value="">Nhà cung cấp F</option>
              </select> */}
            </div>
            <div>
              <span>Loại nguồn</span>
              <select name="" id="" className="input2_ListAgency">
                <option value=""></option>
                <option value="">Đại lý</option>
                <option value="">Nhà cung cấp</option>
                {/* <option value="">Từ chối</option>
                <option value="">Đã duyệt</option>
                <option value="">Hoàn hàng</option> */}
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
              <th className="ListAgency_th">Tên nguồn</th>
              <th className="ListAgency_th">Loại nguồn</th>
              <th className="ListAgency_th">Mã nguồn</th>
              <th className="ListAgency_th">Số điện thoại</th>
              <th className="ListAgency_th">Địa chỉ</th>
              <th className="ListAgency_th">Thao tác</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Nhà cung cấp A</td>
              <td>Nhà cung cấp</td>
              <td>XXXXX </td>
              <td>12345678</td>
              <td>37 Cộng Hoà, Tân Bình, TPHCM</td>
              <td className="purple">
                {/* <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span> */}
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Nhà cung cấp C</td>
              <td>Nhà cung cấp</td>
              <td>XXXXX </td>
              <td>98765843</td>
              <td>1 Tân Hương, Tân Phú, TPHCM</td>
              <td className="purple">
                {/* <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span> */}
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Kho tổng</td>
              <td>Kho tổng</td>
              <td>XXXXX </td>
              <td>213149812</td>
              <td>37 Nghĩa Đô, Cầu Giấy, Hà Nội</td>
              <td className="purple">
                {/* <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span> */}
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Đại lý MM</td>
              <td>Đại lý cấp 2</td>
              <td>XXXXX </td>
              <td>132132597</td>
              <td>37 Nghĩa Đô, Cầu Giấy, Hà Nội</td>
              <td className="purple">
                {/* <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span> */}
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Nhà cung cấp A</td>
              <td>Nhà cung cấp</td>
              <td>XXXXX </td>
              <td>879789879</td>
              <td>1 Tân Hương, Tân Phú, TPHCM</td>
              <td className="purple">
                {/* <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span> */}
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Đại lý G</td>
              <td>Đại lý cấp 2</td>
              <td>XXXXX </td>
              <td>875875855</td>
              <td>1 Tân Hương, Tân Phú, TPHCM</td>
              <td className="purple">
                {/* <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span> */}
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Nhà cung cấp E</td>
              <td>Nhà cung cấp</td>
              <td>XXXXX </td>
              <td>879897789</td>
              <td>37 Quan Hoà, Cầu Giấy, Hà Nội</td>
              <td className="purple">
                {/* <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span> */}
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            {/* <tr>
              <td>8</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp E</td>
              <td>50.000.000</td>
              <td>10/11/2022 15:05</td>
              <td>
                <span className="button2_ListAgency">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp E</td>
              <td>50.000.000</td>
              <td>10/11/2022 09:55</td>
              <td>
                <span className="button3_ListAgency">Từ chối</span>
              </td>
              <td className="purple">
                <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp A</td>
              <td>50.000.000</td>
              <td>10/11/2022 08:30</td>
              <td>
                <span className="button2_ListAgency">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp A</td>
              <td>50.000.000</td>
              <td>09/11/2022 17:27</td>
              <td>
                <span className="button2_ListAgency">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp C</td>
              <td>50.000.000</td>
              <td>09/11/2022 07:30</td>
              <td>
                <span className="button4_ListAgency">Hoàn hàng</span>
              </td>
              <td className="purple">
                <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp F</td>
              <td>50.000.000</td>
              <td>08/11/2022 15:30</td>
              <td>
                <span className="button2_ListAgency">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp B</td>
              <td>50.000.000</td>
              <td>08/11/2022 12:06</td>
              <td>
                <span className="button2_ListAgency">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp A</td>
              <td>50.000.000</td>
              <td>07/11/2022 09:30</td>
              <td>
                <span className="button2_ListAgency">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp E</td>
              <td>50.000.000</td>
              <td>07/11/2022 09:30</td>
              <td>
                <span className="button2_ListAgency">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp D</td>
              <td>50.000.000</td>
              <td>06/11/2022 14:30</td>
              <td>
                <span className="button2_ListAgency">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>18</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp C</td>
              <td>50.000.000</td>
              <td>02/11/2022 18:30</td>
              <td>
                <span className="button2_ListAgency">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>19</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp B</td>
              <td>50.000.000</td>
              <td>02/11/2022 12:30</td>
              <td>
                <span className="button2_ListAgency">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>20</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp A</td>
              <td>50.000.000</td>
              <td>02/11/2022 07:30</td>
              <td>
                <span className="button2_ListAgency">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListAgency">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListAgency">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr> */}
          </table>
        </div>
      </div>
    </>
  );
};

export default ListAgency;
