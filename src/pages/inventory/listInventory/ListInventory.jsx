/* eslint-disable */
import React from 'react'

import "./ListInventory.css";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Header from '@/components/header/Header';
import NavBar from '@/components/navBar/NavBar';
const ListInventory = () => {
  return (
      <div class="listInventoryRecord-container">
        <Header className="header"/>
        <NavBar/>
        <div className="listInventory">
          <div class="listInventoryRecord-search-panel">
              <div class="search-row">
                <div class="search-group">
                  <label>Mã biên bản</label>
                  <Formik type="text" placeholder="Nhập mã biên bản" />
                </div>
                <div class="search-group">
                  <label>Tình trạng</label>
                  <select>
                    <option>Tất cả</option>
                    <option>Chờ duyệt</option>
                    <option>Đã duyệt</option>
                    <option>Từ chối</option>
                  </select>
                </div>
              </div>
              <div class="search-row">
                <div class="search-group">
                  <label>Từ ngày</label>
                  <Formik type="date"/>
                </div>
                <div class="search-group">
                  <label>Đến ngày</label>
                  <Formik type="date"/>
                </div>
            </div>
            <button class="btn-search">Tìm kiếm <i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        
          <button class="btn btn-create">
            <i class="fa-solid fa-plus"></i>Tạo biên bản kiểm kê
          </button>
        
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã biên bản</th>
                <th>Mục đích</th>
                <th>Thời gian</th>
                <th>Tình trạng</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>BB78922SH</td>
                <td>Kiểm tra định kỳ tháng 10/2022</td>
                <td>30/10/2022 15:30</td>
                <td><div class="status status-pending">Chờ duyệt</div></td>
                <td class="actions">
                  <button class="btn-edit">✏️</button>
                  <button class="btn-delete">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>BB15485DF</td>
                <td>Kiểm tra định kỳ tháng 10/2022</td>
                <td>30/10/2022 09:52</td>
                <td><div class="status status-rejected">Từ chối</div></td>
                <td class="actions">
                  <button class="btn-edit">✏️</button>
                  <button class="btn-delete">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>BB18568GH</td>
                <td>Kiểm tra đột xuất tháng 9/2022</td>
                <td>15/09/2022 12:02</td>
                <td><div class="status status-approved">Đã duyệt</div></td>
                <td class="actions">
                  <button class="btn-edit">✏️</button>
                  <button class="btn-delete">🗑️</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default ListInventory;