import React from "react";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
import "./CreatedInventory.css";

const CreatedInventory = () => {
  return (
    <div className="created-inventory-container">
      <Header className="header-createdInventory" />
      <div className="content-inventory">
        <NavBar />
        <div className="right-content-inventory">
          <div className="breadcrumb">
            Danh sách biên bản kiểm kê hàng hóa &gt; Tạo mới biên bản kiểm kê
          </div>
          <div className="action-buttons">
            <button className="add-product-button">
              + Thêm hàng từ hệ thống
            </button>
          </div>

          <div className="inventory-form">
            <h2 className="inventory-title">BIÊN BẢN KIỂM KÊ HÀNG HÓA</h2>

            <div className="form-section-inventory">
              <div className="general-info">
                <h3>Thông tin chung</h3>
                <div className="form-infor">
                  <div className="input-inventory">
                    <div className="info-item">
                      <label>Kiểm kê tại kho</label>
                      <select
                        style={{
                          height: "35px !important",
                        }}
                        className="input-ive kiem-ke"
                      ></select>
                    </div>
                    <div className="info-item">
                      <label>Ngày kiểm</label>
                      <input className="input-ive" type="date" />
                    </div>
                  </div>
                  <div className="info-item purpose">
                    <label>Mục đích</label>
                    <textarea className="p1" rows="5" />
                  </div>
                </div>
              </div>

              <table className="inventory-table">
                <thead>
                  <tr>
                    <th rowSpan="2">STT</th>
                    <th rowSpan="2">Tên hàng hóa</th>
                    <th rowSpan="2">Mã hàng</th>
                    <th rowSpan="2">Đơn vị tính</th>
                    <th rowSpan="2">Đơn giá</th>
                    <th colSpan="3">Số lượng</th>
                    <th rowSpan="2">Xử lý</th>
                  </tr>
                  <tr>
                    <th>Theo hệ thống</th>
                    <th>Theo kiểm kê</th>
                    <th>Chênh lệch</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="8">
                      <div className="sum-inventory">
                        <span className="sum">Tổng</span>
                        <span className="value-inventory"> 0</span>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>

              <div className="footer-buttons">
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

export default CreatedInventory;
