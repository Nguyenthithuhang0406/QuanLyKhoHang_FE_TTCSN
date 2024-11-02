/* eslint-disable */
import React from 'react'

import "./DLFromLocal.css";
const DLFromLocal = () => {
  return (
    <div className="Localkien">
       <div className="ddhh">DANH SÁCH HÀNG HÓA</div>
       <div className="search-barkien">
         <div className="search-fieldkien1">Tên hàng hóa:
            <input type="text" placeholder="Tên hàng hóa"/>
           {/* <i className="fa-solid fa-magnifying-glass"></i> */}
         </div>
         <div className="search-fieldkien2">Mã hàng:
           <input type="text" placeholder="Mã hàng"/>
          {/* <i className="fa-solid fa-magnifying-glass"></i> */}
         </div>
     </div>


      <div className="selected-count-kien">
        <div className="selected-countkien">0 mặt hàng được chọn</div>
        <input type="checkbox" id="select-all"/> 
      </div>
<table className="bang">
      <thead>
        <tr>
            <th>STT</th>
            <th>Tên hàng hóa</th>
            <th>Mã hàng</th>
            <th>Đơn vị tính</th>
            <th>Số lượng trong kho</th>
            <th>Đơn giá</th>
            <th>Chọn</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>1</td>
            <td>DT Samsung Galaxy</td>
            <td>XXXXXXXX</td>
            <td>Cái</td>
            <td>100</td>
            <td>20.000.000</td>
            <td><input type="checkbox" className="item-checkbox"/> </td>
        </tr>
        <tr>
            <td>2</td>
            <td>DT Samsung Galaxy</td>
            <td>XXXXXXXX</td>
            <td>Cái</td>
            <td>100</td>
            <td>20.000.000</td>
            <td><input type="checkbox" className="item-checkbox"/></td>
        </tr>
       
      </tbody>
    </table>

    <div className="buttonskien">
        <button className="btn cancel">Hủy</button>
       <button className="btn add">Thêm</button>
    </div>

  </div>
  )
}

export default DLFromLocal;