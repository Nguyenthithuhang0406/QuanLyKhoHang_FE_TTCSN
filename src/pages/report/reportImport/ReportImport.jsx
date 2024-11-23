/* eslint-disable */
import React from 'react'

import './ReportImport.css';
import Header from '@/components/header/Header';
import NavBar from "@/components/navBar/NavBar";
const ReportImport = () => {
  return (
    <div className="reportImport-container">
      <Header className="header-report-import"/>
      <NavBar/>
      <div className="report-import-background">
        <div className="report-import">
          <div className="title-chart">BIỂU ĐỒ BÁO CÁO NHẬP KHO</div>
          <div className="filter-box">
            <div className="filter-item">
              <label className="startDate" htmlFor="start-date">Từ ngày :</label>
              <input type="date" name="start-date"/>
            </div>

            <div className="filter-item">
              <label className="endDate" htmlFor="end-date">Đến ngày :</label>
              <input type="date" name="end-date"/>
            </div>

            <div className="filter-item">
              <label className="typeImport" htmlFor="type-import">Loại báo cáo :</label>
              <select name="type-import" id="type-import">
                <option value="baoCaoXuat">Báo cáo xuất</option>
                <option value="baoCaoTon">Báo cáo tồn</option>
                <option value="baoCaoXuatNhapTon">Báo cáo xuất nhập tồn</option>
              </select>
            </div>
          </div>

          <div className="import-chart">
            <div className="chart-y-name">Số lượng</div>
            <div className="chart">
              <div className="column-item">
                <div className="number">1020</div>
                <div className="column1" ></div>
              </div>
              <div className="column-item">
                <div className="number">1200</div>
                <div className="column2"></div>
              </div>
              <div className="column-item">
                <div className="number">1300</div>
                <div className="column3"></div>
              </div>
              <div className="column-item">
                <div className="number">1000</div>
                <div className="column4"></div>
              </div>
            </div>
            <div className="last-item-chart">
              <div className="product-name">
                <div>Hàng hóa 1</div>
                <div>Hàng hóa 2</div>
                <div>Hàng hóa 3</div>
                <div>Hàng hóa 4</div>
              </div>
              <div className="chart-x-name">Các loại hàng hóa</div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportImport;