/* eslint-disable */
import React from "react";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
import "./TableReport.css";
import "./TableReport.css";
const TableReport = () => {
  return (
    <div>
      <Header className="headerListP" />
      <NavBar />
      <div className="rtbody">
        <div className="rtSearch">
          <div className="rtInput">
            <div className="rtbox1">
              <div className="rtbox2">
                <span className="rtID">Mã hàng hoá</span>
              </div>
              <div className="rtbox3">
                <input type="text" className="rtiID" />
              </div>
              <div className="rtbox2">
                <span className="rtname">Tên hàng hoá</span>
              </div>
              <div className="rtbox3">
                {" "}
                <input type="text" className="rtiName" />
              </div>
            </div>

            <div className="rtbox1">
              <div className="rtbox2">
                <span className="rtfrom">Từ ngày</span>
              </div>
              <div className="rtbox3">
                <input type="date" className="rtdate" placeholder="" />
              </div>
              <div className="rtbox2">
                <span className="rtto">Đến ngày</span>
              </div>
              <div className="rtbox3">
                <input type="date" className="rtdate" placeholder="" />
              </div>
            </div>
          </div>
          <div className="rtbbox">
            {" "}
            <button className="rtfButton"> Tìm kiếm </button>
          </div>
        </div>
        <div className="rtselect">
          <select name="rtoption" id="rcoption">
            <option value="rtchart">Xem biểu đồ</option>
            <option value="rttable">Xem bảng</option>
          </select>
        </div>
        <div className="rtTable">
          <table className="rtInside">
            <tbody>
              <tr>
                <th className="rt-th">STT</th>
                <th className="rt-th">Tên hàng</th>
                <th className="rt-th">Mã sản phẩm</th>
                <th className="rt-th">Số lượng nhập</th>
                <th className="rt-th">Số lượng xuất</th>
                <th className="rt-th">Số lượng tồn</th>
              </tr>
              <tr>
                <td className="rtnum">1</td>
                <td className="rtnum">Hàng hoá 1</td>
                <td className="rtnum">hang0111</td>
                <td className="rtnum">2000</td>
                <td className="rtnum">300</td>
                <td className="rtnum">1700</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableReport;
