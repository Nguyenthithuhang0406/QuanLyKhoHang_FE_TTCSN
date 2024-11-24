/* eslint-disable */
import React from 'react';
import './ReportEII.css';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
import Header from '@/components/header/Header';
import NavBar from '@/components/navBar/NavBar';
const ReportEII = () => {
  const data = {
    labels: ['Hàng hóa 1', 'Hàng hóa 2', 'Hàng hóa 3', 'Hàng hóa 4', 'Hàng hóa 5'],
    datasets: [
      {
        label: 'Xuất kho',
        data: [80, 20, 40, 170,60],
        stack: 'stack',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        barThickness: 30
      },
      {
        label: 'Tồn Kho',
        data: [45, 60, 25, 45,90 ],
        stack: 'stack',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        barThickness: 30
      },
    ]
  };
  
  const options = {
    scales: {
      y: {
        stacked: true,
        beginAtZero: true,
        display: true,
        title: {
          display: true,
          text: 'Số lượng'
        }
      },
      x: {
        stacked: true,
        display: true,
        title: {
          display: true,
          text: 'Các loại hàng hóa'
        },
        categoryPercentage: 0.5,
        barPercentage: 0.5
      }
    },
    plugins: {
      title: {
        display: true,
      }
    }
  };
  
  return (
    <>
      <Header className="reporteii" />
      <NavBar />
      <div className="report-eii-container">
        <div className="bieudo"><h1>BIỂU ĐỒ BÁO CÁO XUẤT NHẬP TỒN</h1></div>
        <div className="congcu">
          <form>
            <div className="chon">
              <div className="chon1">
                <label htmlFor="date">Từ Ngày:</label>
                <input type="date" id="date" name="date" />
              </div>
              <div className="chon2">
                <label htmlFor="date">Đến Ngày:</label>
                <input type="date" id="date" name="date" />
              </div>
              <div className="chon3">
                <label htmlFor="option">Lựa chọn:</label>
                <select id="option" name="option" required>
                  <option value="">--Chọn một tùy chọn--</option>
                  <option value="option1">Tùy chọn 1</option>
                  <option value="option2">Tùy chọn 2</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default ReportEII;