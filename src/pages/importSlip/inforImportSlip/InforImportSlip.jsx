/* eslint-disable */
import React from 'react'

import "./InforImportSlip.css";
import Header from '@/components/header/Header';
import NavBar from '@/components/navBar/NavBar';

const InforImportSlip = () => {
  return (
    <div class="importForm-container">
      <Header className="header"/>
      <NavBar/>
      <div className="importForm-nav">
        <a href="">Xuất - nhập với NCC > </a>
        <a href="">Xem phiếu nhập kho</a>
      </div>
      <div className="importForm-main">
        <div className="importForm-title">
            PHIẾU NHẬP KHO
        </div>
        <div className="importForm">
            <p>Thông tin chung</p>
            <div className="importForm-infor">
                <div className="col">
                    <div className="col-item">
                        <label for="if-agencyName">Nguồn nhận</label>
                        <div className="if-inforBox" name="if-agencyName">Nhà cung cấp A</div>
                    </div>
    
                    <div className="col-item">
                        <label for="if-agencyID">Mã nguồn</label>
                        <div className="if-inforBox" name="if-agencyID">AGENCY0001</div>
                    </div>
    
                    <div className="col-item">
                        <label for="if-agencyPhone">Điện thoại</label>
                        <div classNameName="if-inforBox" name="if-agencyPhone">0987654321</div>
                    </div>
    
                    <div className="col-item">
                        <label for="if-agencyAddress">Địa chỉ</label>
                        <div className="if-inforBox" name="if-agencyID">37 Phố Nhổn, Nam Từ Liêm, Hà Nội</div>
                    </div>
                </div>
    
                <div clasNames="col">
                    <div className="col-item">
                        <label for="if-formID">Mã phiếu</label>
                        <div className="if-inforBox" name="if-formID">FORM0001</div>
                    </div>

                    <div class="col-item">
                        <label for="if-Kho">Nhập tại kho</label>
                        <div class="if-inforBox" name="if-Kho">Kho tổng</div>
                    </div>

                    <div className="col-item">
                        <label for="if-KhoID">Mã kho</label>
                        <div className="if-inforBox" name="if-KhoID">KHO123</div>
                    </div>
    
                    <div className="col-item">
                        <label for="if-formDescribe">Lý do</label>
                        <div className="if-inforBox if-formDescribe" name="if-formDescribe">Lý do là...</div>
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

        <div className="if-contract">
          <div className="if-contact-title">Hợp đồng</div>
          <div className="if-contract-img">
            <div className="if-contract-img-item">
              Đây là hợp đồng
            </div>
            <div className="if-contract-img-item">
              Đây là hợp đồng
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default InforImportSlip;