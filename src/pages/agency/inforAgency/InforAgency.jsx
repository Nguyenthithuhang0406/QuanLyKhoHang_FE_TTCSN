/* eslint-disable */
import React from 'react'

import './InforAgency.css';
import Header from '@/components/header/Header';
import NavBar from '@/components/navBar/NavBar';
const InforAgency = () => {
  return (
    <div className="inforAgency-container">
      <Header className="header-IA"/>
      <NavBar/>
      <div className="inforAgency">
        <div className="inforAgency-nav">
          <a href="">Quản lý nhà cung cấp > </a>
          <a href="">Xem hàng hóa</a>
        </div>
        <div className="updateAgency-btn">
          <div className="btn">Cập nhật thông tin</div>
        </div>
        <div className="inforAgency-form">
          <div className="inforAgency-form-title">
            <div>Thông tin nguồn</div>
            <div className="close-btn">X</div>
          </div>
          <div className="inforAgency-form-main">

            <div className="inforAgency-form-row">
              <label htmlFor="agencyID" className="inforAgency-lbl">Mã nguồn</label>
              <div id="agencyID" name="agencyID" className="inforBox">A0001</div>
            </div>

            <div className="inforAgency-form-row">
              <label htmlFor="agencyName" className="inforAgency-lbl">Tên nguồn</label>
              <div id="agencyName" name="agencyName" className="inforBox">Nhà cung cấp A</div>
            </div>

            <div className="inforAgency-form-row">
              <label htmlFor="agencyType" className="inforAgency-lbl">Loại nguồn</label>
              <div id="agencyType" name="agencyType" className="inforBox">Nhà cung cấp</div>
            </div>

            <div className="inforAgency-form-row">
              <label htmlFor="agencyManager" className="inforAgency-lbl">Người phụ trách</label>
              <div id="agencyManager" name="agencyManager" className="inforBox">Phạm Duy Đức</div>
            </div>

            <div className="inforAgency-form-row">
              <label htmlFor="agencyAddress" className="inforAgency-lbl">Địa chỉ</label>
              <div id="agencyAddress" name="agencyAddress" className="inforBox">37 Nhổn, Nam Từ liêm, Hà Nội</div>
            </div>

            <div className="inforAgency-form-row">
              <label htmlFor="agencyPhone" className="inforAgency-lbl">Số điện thoại</label>
              <div id="agencyPhone" name="agencyPhone" className="inforBox">0987654321</div>
            </div>

            <div className="inforAgency-form-row">
              <label htmlFor="agencyEmail" className="inforAgency-lbl">Email</label>
              <div id="agencyEmail" name="agencyEmail" className="inforBox">ncc@gmail.com</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default InforAgency;