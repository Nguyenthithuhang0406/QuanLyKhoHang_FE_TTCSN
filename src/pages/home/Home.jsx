/* eslint-disable */
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
import React from "react";
import "./Home.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
const overviewData = {
  datasets: [
    {
      data: [37, 63],
      backgroundColor: ["#FFBB01", "#30A032"],
      // hoverBackgroundColor: ["#FFCE56", "#36A2EB"],
    },
  ],
};

const exportData = {
  datasets: [
    {
      data: [37, 52, 11],
      backgroundColor: ["#FFBB01", "#FFD45F", "#FFEAB0"],
      // hoverBackgroundColor: ["#FFCE56", "#FF7043", "#FF6384"],
    },
  ],
};

const importData = {
  datasets: [
    {
      data: [82, 18],
      backgroundColor: ["#30A032", "#95f5a8"],
      // hoverBackgroundColor: ["#4BC0C0", "#36A2EB"],
    },
  ],
};

const Home = () => {
  return (
    <>
      <Header className="headerListP" />
      <NavBar />
      <div className="container_home" style={{ padding: "10px 20px " }}>
        <div className="sub_home">
          <div className="tongquan_home">
            <div className="dong1_tq">
              <p>
                <b>TỔNG QUAN</b>
              </p>
            </div>
            <div className="dong2_tq">
              <p>Tỉ lệ xuất nhập kho</p>
              <div className="date_time_home">
                <label htmlFor="">Từ ngày</label>
                <input className="date_home" type="date" name="" id="" />
                <label htmlFor="">Đến ngày</label>
                <input className="date_home" type="date" name="" id="" />
              </div>
            </div>
            <div className="dong3_tq">
              <Doughnut data={overviewData} className="chart-size" />
              <div className="sub2_home">
                <div className="col_2_home">
                  <div className="o_home"></div>
                  <p>Xuất kho</p>
                </div>
                <div className="col_2_home">
                  <div className="o1_home"></div>
                  <p>Nhập kho</p>
                </div>
              </div>
              <div>
                <div className="col3_home">
                  <div className="icon_home">
                    <i className="fa-regular fa-calendar-check"></i>
                  </div>
                  <p className="home-text">
                    Tổng số phiếu <p>52</p>
                  </p>
                </div>
                <div className="col3_home">
                  <div className="icon_home">
                    <i class="fa-solid fa-boxes-stacked"></i>
                  </div>
                  <p className="home-text">
                    Tổng lượng tồn kho <p>52,369</p>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="tongquan_home">
            <div className="dong1_tq">
              <p>
                <b>XUẤT KHO</b>
              </p>
            </div>
            <div className="dong2_tq">
              <p>Tỉ lệ xuất nhập kho theo nguồn nhập</p>
              <div className="date_time_home">
                <label htmlFor="">Từ ngày</label>
                <input className="date_home" type="date" name="" id="" />
                <label htmlFor="">Đến ngày</label>
                <input className="date_home" type="date" name="" id="" />
              </div>
            </div>
            <div className="dong3_tq">
              <Doughnut data={exportData} className="chart-size" />
              <div className="sub2_home">
                <div className="col_2_home">
                  <div className="o3_home"></div>
                  <p>
                    Xuất kho <p>cho NCC</p>
                  </p>
                </div>
                <div className="col_2_home">
                  <div className="o4_home"></div>
                  <p>
                    Xuất kho <p>cho ĐLC1</p>
                  </p>
                </div>
                <div className="col_2_home">
                  <div className="o5_home"></div>
                  <p>Hoàn hàng</p>
                </div>
              </div>
              <div>
                <div className="col3_home">
                  <div className="icon_home">
                    <i className="fa-regular fa-calendar-check"></i>
                  </div>
                  <p className="home-text">
                    Số phiếu xuất kho <p>709</p>
                  </p>
                </div>
                <div className="col3_home">
                  <div className="icon_home">
                    <i class="fa-solid fa-box-archive"></i>
                  </div>
                  <p className="home-text">
                    Tổng lượng xuất kho<p>2,238</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="tongquan_home">
            <div className="dong1_tq">
              <p>
                <b>NHẬP KHO</b>
              </p>
            </div>
            <div className="dong2_tq">
              <p>Tỉ lệ xuất nhập kho theo nguồn xuất</p>
              <div className="date_time_home">
                <label htmlFor="">Từ ngày</label>
                <input className="date_home" type="date" name="" id="" />
                <label htmlFor="">Đến ngày</label>
                <input className="date_home" type="date" name="" id="" />
              </div>{" "}
            </div>
            <div className="dong3_tq">
              <Doughnut data={importData} className="chart-size" />
              <div className="sub2_home">
                <div className="col_2_home">
                  <div className="o6_home"></div>
                  <p>
                    Nhập kho <p>từ NCC</p>
                  </p>
                </div>
                <div className="col_2_home">
                  <div className="o7_home"></div>
                  <p>
                    Nhập kho <p>từ ĐLC1</p>
                  </p>
                </div>
              </div>
              <div>
                <div className="col3_home">
                  <div className="icon_home">
                    <i className="fa-regular fa-calendar-check"></i>
                  </div>
                  <p className="home-text">
                    Số phiếu nhập kho <p>1,023</p>
                  </p>
                </div>
                <div className="col3_home">
                  <div className="icon_home">
                    <i class="fa-solid fa-box-archive"></i>
                  </div>
                  <p className="home-text">
                    Tổng lượng nhập kho <p>5,206</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
