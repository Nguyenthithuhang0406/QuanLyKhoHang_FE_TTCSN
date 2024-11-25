/* eslint-disable */
import React, { useEffect, useState } from "react";

import "./Information.css";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
import { editProfile, getUserById, uploadAvatar } from "@/api/userAPI/user";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

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

  const [isRefresh, setIsRefresh] = useState(false);

  const [avatar, setAvatar] = useState("");

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

      setAvatar(respone.avatar);
    };

    getUser();
  }, [isRefresh]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleUpdate = async () => {
    console.log(user);
    await editProfile(user, userId);
    toast.success("Cập nhật thông tin thành công");
    setIsRefresh(!isRefresh);
  };

  const handleCancel = () => {
    setIsRefresh(!isRefresh);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);

    await uploadAvatar(file, userId);
    toast.success("Cập nhật ảnh đại diện thành công");
    setIsRefresh(!isRefresh);
  };

  return (
    <div>
      <Header className="info-header" />
      <NavBar className="info-navBar" />
      <div className="infoBody">
        <div className="infoAvatar">
          <img className="infoImage" src={avatar} alt="" />
          <label
            style={{
              marginLeft: "80%",
              marginTop: "-30px",
              borderRadius: "50%",
              padding: "5px",
              cursor: "pointer",
            }}
          >
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => handleFileChange(e)}
            />
            <i
              className="fa-solid fa-pen"
              style={{
                color: "black",
                cursor: "pointer",
              }}
            ></i>
          </label>
          <p className="infoUsername">
            <b>{user.userName}</b>
          </p>
        </div>
        <div className="infoContainer">
          <div className="inforForm">
            <h2 className="info-h2">THÔNG TIN CÁ NHÂN</h2>
            <div className="info-group-field">
              <label className="info-label" htmlFor="infoFullName">
                Họ và tên
              </label>
              {/* <input className="info-input" type="text" /> */}
              <input
                className="info-input"
                value={user.fullName}
                name="fullName"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="info-group-field">
              <label className="info-label" htmlFor="infoEmail">
                Email
              </label>
              {/* <input className="info-input" type="text" /> */}
              <input
                className="info-input"
                value={user.email}
                name="email"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="info-group-field">
              <label className="info-label" htmlFor="infoPhone">
                Số điện thoại
              </label>
              {/* <input className="info-input" type="text" /> */}
              <input
                className="info-input"
                value={user.phoneNumber}
                name="phoneNumber"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="info-group-field">
              <label className="info-label" htmlFor="infoStaffCode">
                Mã nhân viên
              </label>
              {/* <input className="info-input" type="text" /> */}
              <input className="info-input" value={user.staffCode} readOnly />
            </div>
            <div className="info-group-field">
              <label className="info-label" htmlFor="infoPosition">
                Chức vụ
              </label>
              {/* <input className="info-input" type="text" /> */}
              <input
                className="info-input"
                value={user.role == "manager" ? "Quản lý" : "Nhân viên"}
                readOnly
              />
            </div>
            <div className="info-group-field">
              <label className="info-label" htmlFor="infoAddress">
                Địa chỉ
              </label>
              {/* <input className="info-input" type="text" /> */}
              <input
                className="info-input"
                value={user.address}
                name="address"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="info-group-field">
              <label className="info-label" htmlFor="infoGender">
                Giới tính
              </label>
              <select
                name="gender"
                onChange={(e) => handleChange(e)}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  border: "1px solid #dedbdb",
                  padding: "0 20px",
                }}
              >
                <option>
                  {user.gender === "male"
                    ? "Nam"
                    : user.gender === "fermale"
                    ? "Nữ"
                    : "Khác"}
                </option>
                <option value="male">Nam</option>
                <option value="fermale">Nữ</option>
                <option value="other">Khác</option>
              </select>
            </div>
            <div className="info-group-field">
              <label className="info-label" htmlFor="infoDate">
                Ngày vào làm
              </label>
              {/* <input className="info-input" type="text" /> */}
              <input className="info-input" value={user.startDate} readOnly />
            </div>

            <div className="button-section">
              <button className="cancel-button" onClick={handleCancel}>
                Hủy
              </button>
              <button
                className="save-button"
                type="submit"
                onClick={handleUpdate}
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
