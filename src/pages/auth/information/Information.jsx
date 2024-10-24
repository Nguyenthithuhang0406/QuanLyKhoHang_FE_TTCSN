/* eslint-disable */
import React, { useEffect, useState } from "react";

import "./Information.css";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
import { getUserById } from "@/api/userAPI/user";
import { useParams } from "react-router-dom";

const Information = () => {
  const [user, setUser] = useState({
    fullName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    staffCode: "",
    role: "",
    address: "",
    gender: "",
    startDate: "",
    avatar: "",
  });

  const { userId } = useParams();

  useEffect(() => {
    const getUser = async () => {
      const respone = await getUserById(userId);
      const dateObj = new Date(respone.startDate);
      const day = dateObj.getUTCDate();
      const month = dateObj.getUTCMonth() + 1;
      const year = dateObj.getUTCFullYear();

      respone.startDate = `${day}/${month}/${year}`;
      setUser({
        fullName: respone.fullName,
        userName: respone.userName,
        email: respone.email,
        phoneNumber: respone.phoneNumber,
        staffCode: respone.staffCode,
        role: respone.role,
        address: respone.address,
        gender: respone.gender,
        startDate: respone.startDate,
        avatar: respone.avatar,
      });
    };

    getUser();
  }, []);

  return (
    <div>
      <Header className='info-header' />
      <NavBar className='info-navBar'/>
      <div className="infoBody">
        <div className="infoAvatar">
          <img
            className="infoImage"
            src={user.avatar}
            alt=""
          />
          <p className="infoUsername"><b>{user.userName}</b></p>
        </div>
        <div className="infoContainer">
          <div className="inforForm">
            <h2 className="info-h2">THÔNG TIN CÁ NHÂN</h2>
            <div className="info-group-field">
              <label className="info-label" htmlFor="infoFullName">
                Họ và tên
              </label>
              {/* <input className="info-input" type="text" /> */}
              <div className="info-input">{user.fullName}</div>
            </div>
            <div className="info-group-field">
              <label className="info-label" htmlFor="infoEmail">
                Email
              </label>
              {/* <input className="info-input" type="text" /> */}
              <div className="info-input">{user.email}</div>
            </div>
            <div className="info-group-field">
              <label className="info-label" htmlFor="infoPhone">
                Số điện thoại
              </label>
              {/* <input className="info-input" type="text" /> */}
              <div className="info-input">{user.phoneNumber}</div>
            </div>
            <div className="info-group-field">
              <label className="info-label" htmlFor="infoStaffCode">
                Mã nhân viên
              </label>
              {/* <input className="info-input" type="text" /> */}
              <div className="info-input">{user.staffCode}</div>
            </div>
            <div className="info-group-field">
              <label className="info-label" htmlFor="infoPosition">
                Chức vụ
              </label>
              {/* <input className="info-input" type="text" /> */}
              <div className="info-input">{user.role == 'manager' ? "Quản lý" : "Nhân viên"}</div>
            </div>
            <div className="info-group-field">
              <label className="info-label" htmlFor="infoAddress">
                Địa chỉ
              </label>
              {/* <input className="info-input" type="text" /> */}
              <div className="info-input">{user.address}</div>
            </div>
            <div className="info-group-field">
              <label className="info-label" htmlFor="infoGender">
                Giới tính
              </label>
              {/* <input className="info-input" type="text" /> */}
              <div className="info-input">{user.gender}</div>
            </div>
            <div className="info-group-field">
              <label className="info-label" htmlFor="infoDate">
                Ngày vào làm
              </label>
              {/* <input className="info-input" type="text" /> */}
              <div className="info-input">{user.startDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
