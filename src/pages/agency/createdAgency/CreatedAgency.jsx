/* eslint-disable */
import React from "react";

import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
import "./CreatedAgency.css";
const CreatedAgency = () => {
  return (
    <div>
      <Header className="header-createdAgency" />
      <NavBar />

      <div className="main-CreatedAgency">
        <div className="body-CreatedAgency">
          <div className="breadcrumb">
            <p className="title-createdAgency">Quản lý nguồn hàng xuất/nhập</p>
            <span className="title-createdAgency">&gt;</span>
            <p className="title-createdAgency">Thêm loại nguồn</p>
          </div>
          <div className="content-container">
            <div className="title-bar">Thêm loại nguồn</div>

            <div className="form-container">
              <div className="form-group-created-agency">
                <label className="form-label">Mã nguồn</label>
                <input type="text" value="" className="form-input" readOnly />
              </div>

              <div className="form-group-created-agency">
                <label className="form-label">Loại nguồn</label>
                <select name="" id="" className="form-input" required>
                  <option value="">-Loại nguồn-</option>
                  <option value="">Nhà cung cấp</option>
                  <option value="">Đại lý</option>
                </select>
              </div>

              <div className="form-group-created-agency">
                <label className="form-label">Địa chỉ</label>
                <input type="text" value="" className="form-input" />
              </div>

              <div className="form-group-created-agency">
                <label className="form-label">Số điện thoại</label>
                <input type="text" value="" className="form-input" />
              </div>

              <div className="form-group-created-agency">
                <label className="form-label">Email</label>
                <input type="text" value="" className="form-input" />
              </div>

              <div className="form-group-created-agency">
                <label className="form-label">Người đại diện</label>
                <input type="text" value="" className="form-input" />
              </div>

              <div className="form-group-created-agency">
                <label className="form-label">Thêm thông tin (Nếu có)</label>
                <textarea
                  type="text"
                  name=""
                  className="form-input"
                  rows={5}
                ></textarea>
              </div>

              <div className="button-group">
                <button className="save-btn">Lưu</button>
                <button className="cancel-btn">Hủy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatedAgency;
