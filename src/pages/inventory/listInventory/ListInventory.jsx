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
          <Formik>
            <Form className="listInventoryRecord-search-panel">
                <div className="search-row">
                  <div className="search-group">
                    <label htmlFor="MaBienBan">Mã biên bản</label>
                    <input type="text" placeholder="Nhập mã biên bản" name="MaBienBan"/>
                  </div>
                  <div className="search-group">
                    <label>Tình trạng</label>
                    <select>
                      <option>Tất cả</option>
                      <option>Chờ duyệt</option>
                      <option>Đã duyệt</option>
                      <option>Từ chối</option>
                    </select>
                  </div>
                </div>
                <div className="search-row">
                  <div className="search-group">
                    <label htmlFor="dateStart">Từ ngày</label>
                    <input type="date" name="dateStart"/>
                  </div>
                  <div className="search-group">
                    <label htmlFor="dateEnd">Đến ngày</label>
                    <input type="date" name="dateEnd"/>
                  </div>
              </div>
              <button className="btn-search">Tìm kiếm <i className="fa-solid fa-magnifying-glass"></i></button>
            </Form>
          </Formik>
        
          <button className="btn btn-create">
            <i className="fa-solid fa-plus"></i>Tạo biên bản kiểm kê
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
                <td><div className="status status-pending">Chờ duyệt</div></td>
                <td className="actions">
                  <button className="btn-edit">✏️</button>
                  <button className="btn-delete">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>BB15485DF</td>
                <td>Kiểm tra định kỳ tháng 10/2022</td>
                <td>30/10/2022 09:52</td>
                <td><div className="status status-rejected">Từ chối</div></td>
                <td className="actions">
                  <button className="btn-edit">✏️</button>
                  <button className="btn-delete">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>BB18568GH</td>
                <td>Kiểm tra đột xuất tháng 9/2022</td>
                <td>15/09/2022 12:02</td>
                <td><div className="status status-approved">Đã duyệt</div></td>
                <td className="actions">
                  <button className="btn-edit">✏️</button>
                  <button className="btn-delete">🗑️</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default ListInventory;