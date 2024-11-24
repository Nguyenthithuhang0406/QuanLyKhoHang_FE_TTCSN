/* eslint-disable */
import React from 'react'
import Header from '@/components/header/Header';
import NavBar from '@/components/navBar/NavBar';
import "./InforInventory.css";
const InforInventory = () => {
  return (
    <>
    <Header className="inforinventoryheader" />
    <NavBar />
    <div className="inforinventory_kien">
      <div className="btt_kien">
        <div className="bbkkhh">BIÊN BẢN KIỂM KÊ HÀNG HÓA</div>
        <div className="info-section_kien">
            <div className="info_chung">Thông tin chung</div>

            <div className="fr">
                <label>Mã biên bản:</label>
                <input type="text" placeholder="Nhập mã biên bản"/>
            </div>

            <div className="fr">
                <label>Kiểm kê tại kho:</label>
                <input type="text" placeholder="Nhập mã kho"/>
                <label>Ngày kiểm:</label>
                <input type="date"/>
            </div>

            <div className="fr">
                <label>Mục đích:</label>
                <input type="text" placeholder="Nhập mục đích"/>
            </div>
        </div>
        

        <table className="tableKien">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên hàng hóa</th>
                    <th>Mã hàng</th>
                    <th>Đơn vị tính</th>
                    <th>Đơn giá</th>
                    {/* <th>Số lượng</th> */}
                    <th>Số lượng hệ thống</th>
                    <th>Số lượng kiểm kê</th>
                    <th>Chênh lệch</th>
                    <th>Xử lý</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>ĐT Samsung Galaxy S8</td>
                    <td>XXXX1234</td>
                    <td>Cái</td>
                    <td>20.000.000</td>
                    {/* <td>20</td> */}
                    <td>20</td>
                    <td>20</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>ĐT Samsung Galaxy S7</td>
                    <td>XXXX1544</td>
                    <td>Cái</td>
                    <td>16.000.000</td>
                    {/* <td>18</td> */}
                    <td>18</td>
                    <td>18</td>
                    <td>0</td>
                    <td></td>
                </tr>
               
                <tr>
                    <td>4</td>
                    <td>ĐT Sony Xperia XZ5</td>
                    <td>XXXX7678</td>
                    <td>Cái</td>
                    <td>8.200.000</td>
                    {/* <td>12</td> */}
                    <td>12</td>
                    <td>10</td>
                    <td>(2)</td>
                    <td>Xuất kho</td>
                </tr>
                <tr>
                    <td colspan="8">Tổng</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>


    <div className="bangtinhtrang">
        <b>Tình trạng</b>
        <button className="delete-btt">Xóa<i class="fa-solid fa-key"></i></button>
        <label>Người tạo:</label>
        <input type="text" placeholder="Nhập tên người tạo" />
        <input type="text" placeholder="Ngày tạo" />

        <button className="duyet-btt">Duyệt<i class="fa-solid fa-key"></i></button>
        <label>Người duyệt:</label>
        <input type="text" placeholder="Nhập tên người duyệt" />
        <input type="text" placeholder="Ngày duyệt" />

        <button className="tuchoi-btt">Từ chối<i class="fa-solid fa-key"></i></button>
        <label>Người từ chối:</label>
        <input type="text" placeholder="Nhập tên người từ chối"/>
        <input type="text" placeholder="Ngày từ chối" />
    </div>
</div>
</>
  )
}
export default InforInventory;