/* eslint-disable */
import React from 'react'

import "./InforExportSlip.css";
import Header from '@/components/header/Header';
import NavBar from '@/components/navBar/NavBar';
const InforExportSlip = () => {
  return (
    <div class="exportForm-container">
      <Header className="header"/>
      <NavBar/>
      <div className="exportForm-nav">
        <a href="">Xuất - nhập với NCC {">"} </a>
        <a href="">Xem phiếu xuất kho</a>
      </div>
      <div className="exportForm-main">
        <div class="exportForm-title">
            PHIẾU XUẤT KHO
        </div>
        <div class="exportForm">
            <p>Thông tin chung</p>
            <div class="exportForm-infor">
                <div class="col">
                    <div class="col-item">
                        <label for="ef-agencyName">Nguồn nhận</label>
                        <div class="ef-inforBox" name="ef-agencyName">Nhà cung cấp A</div>
                    </div>
    
                    <div class="col-item">
                        <label for="ef-agencyID">Mã nguồn</label>
                        <div class="ef-inforBox" name="ef-agencyID">AGENCY0001</div>
                    </div>
    
                    <div class="col-item">
                        <label for="ef-agencyPhone">Điện thoại</label>
                        <div class="ef-inforBox" name="ef-agencyPhone">0987654321</div>
                    </div>
    
                    <div class="col-item">
                        <label for="ef-agencyAddress">Địa chỉ</label>
                        <div class="ef-inforBox" name="ef-agencyID">37 Phố Nhổn, Nam Từ Liêm, Hà Nội</div>
                    </div>
                </div>
    
                <div class="col">
                    <div class="col-item">
                        <label for="ef-formID">Mã phiếu</label>
                        <div class="ef-inforBox" name="ef-formID">FORM0001</div>
                    </div>
    
                    <div class="col-item">
                        <label for="ef-formDescribe">Lý do xuất</label>
                        <div class="ef-inforBox ef-formDescribe" name="ef-formDescribe">Lý do là...</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="exportForm-listProduct">
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
                <tr>
                  <td>1</td>
                  <td>DT Samsung Galaxy Z</td>
                  <td>XXXXX</td>
                  <td>Cái</td>
                  <td>30.000.000</td>
                  <td>10</td>
                  <td>5%</td>
                  <td>285.000.000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>DT Xiaomi Redmi 10</td>
                  <td>XXXXX</td>
                  <td>Cái</td>
                  <td>3.998.000</td>
                  <td>10</td>
                  <td></td>
                  <td>39.980.000</td>
                </tr>
                
                <tr>
                    <td>3</td>
                    <td>iphone 13 Promax</td>
                    <td>XXXXX</td>
                    <td>Cái</td>
                    <td>40.000.000</td>
                    <td>5</td>
                    <td>5%</td>
                    <td>78.154.168</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Tai nghe Xiaomi</td>
                    <td>XXXXX</td>
                    <td>Cái</td>
                    <td>200.000</td>
                    <td>4</td>
                    <td></td>
                    <td>800.000</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Tai nghe oppo Reno</td>
                    <td>XXXXX</td>
                    <td>Cái</td>
                    <td>790.000</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                  <td colspan="7">Tổng</td>
                  <td>315.154.168</td>
                </tr>
              </table>
        </div>

        <div className="ef-contract">
          <div className="ef-contact-title">Hợp đồng</div>
          <div className="ef-contract-img">
            <div className="ef-contract-img-item">
              Đây là hợp đồng
            </div>
            <div className="ef-contract-img-item">
              Đây là hợp đồng
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default InforExportSlip;