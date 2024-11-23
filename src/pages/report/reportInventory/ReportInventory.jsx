import React from "react";
import NavBar from "@/components/navBar/NavBar";
import Header from "@/components/header/Header";
import Chart from "chart.js/auto";

import "./ReportInventory.css";

const ReportInventory = () => {
  // Thiết lập dữ liệu cho biểu đồ cột
  const labels = [
    "Mặt hàng 1",
    "Mặt hàng 2",
    "Mặt hàng 3",
    "Mặt hàng 4",
    "Mặt hàng 5",
    "Mặt hàng 6",
    "Mặt hàng 7",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Tồn kho",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "#30a032",
        borderColor: "#30a032",
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: "Các loại hàng hóa",
            font: {
              size: 14,
              weight: "bold",
            },
            padding: {
              bottom: 10,
            },
          },
          grid: {
            drawOnChartArea: false,
          },
        },
        y: {
          title: {
            display: true,
            text: "Số lượng (sản phẩm)",
            font: {
              size: 14,
              weight: "bold",
            },
            padding: {
              left: 10,
            },
          },
          suggestedMin: 0,
          suggestedMax: 100,
          ticks: {
            stepSize: 20,
          },
        },
      },
      plugins: {
        title: {
          display: true,
          // text: "Biểu đồ tồn kho",
        },
      },
    },
  };

  React.useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    const chart = new Chart(ctx, config);

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
      <div className="reportInventory-container">
        <Header className="header-reportInventory" />
        <NavBar />
        <div className="reportInventory">
          <div className="reportInventory-nav">
            <p className="rInventory-link">Báo cáo hàng hóa</p> &gt;
            <p className="rInventory-link"> Báo cáo tồn kho</p>
          </div>
          <div className="rInventory-bieudo">
            <h3 className="rInventory-title">Biểu đồ báo cáo tồn kho</h3>
            <div className="time-style">
              <span className="date_reportInventory1">Từ ngày</span>
              <input
                type="date"
                className="date_reportInventory"
                placeholder=""
              />
              <span className="date_reportInventory2">Đến ngày</span>
              <input
                type="date"
                className="date_reportInventory3"
                placeholder=""
              />
              <select className="style-report" name="" id="">
                <option value="">-Loại báo cáo-</option>
                <option>Biểu đồ</option>
                <option>Bảng</option>
              </select>
            </div>
            <div className="bieu-do-Inventory">
              <canvas id="myChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportInventory;
