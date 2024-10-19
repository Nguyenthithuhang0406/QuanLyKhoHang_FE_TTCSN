/* eslint-disable */
import React, { useEffect, useState } from "react";

import "./Register.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Header from "../../../components/header/Header";
// import { registerAPI } from "@/api/userApi/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { registerValidation } from "@/utils/validation.js/userValidation";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    fullName: "",
    email: "",
    staffCode: "",
    userName: "",
    password: "",
    role: "staff",
  };

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      // const user = await registerAPI(values);
      toast.success("Đăng ký thành công");
      // localStorage.setItem("userId", user.data.user._id);
      // localStorage.setItem("email", user.data.user.email);
      // localStorage.setItem("fullName", user.data.user.fullName);
      navigate("/confirm-OTP");
    } catch (error) {
      console.log(error);
      toast.error("Đăng ký thất bại");
    }
  };

  const handleClickLogin = () => {
    navigate("/login");
  };

  const tooglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Header />
      <div className="register-body">
        <div className="register-container">
          <div className="register-form">
            <Formik
              // initialValues={initialValues}
              // validationSchema={registerValidation}
              onSubmit={handleSubmit}
            >
              {({ handleSubmit, errors, setFieldValue, values }) => (
                <Form onSubmit={handleSubmit}>
                  <h2 className="register-h2">ĐĂNG KÝ TÀI KHOẢN</h2>
                  <div className="register-group-field">
                    <label htmlFor="fullName" className="register-label">
                      Họ tên đầy đủ
                    </label>
                    <br />
                    <Field
                      className="register-Field"
                      name="fullName"
                      type="text"
                      placeholder=""
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      style={{ color: "red", fontSize: "12px" }}
                    />
                  </div>

                  <div className="register-group-field">
                    <label className="register-label" htmlFor="email">
                      Email
                    </label>
                    <br />
                    <Field
                      className="register-Field"
                      name="email"
                      type="email"
                      placeholder=""
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      style={{ color: "red", fontSize: "12px" }}
                    />
                  </div>

                  <div className="register-group-field">
                    <label className="register-label" htmlFor="staffCode">
                      Mã nhân viên
                    </label>
                    <br />
                    <Field
                      className="register-Field"
                      name="staffCode"
                      type="text"
                      placeholder=""
                    />
                    <ErrorMessage
                      name="staffCode"
                      component="div"
                      style={{ color: "red", fontSize: "12px" }}
                    />
                  </div>

                  <div className="register-group-field">
                    <label className="register-label" htmlFor="userName">
                      Tên đăng nhập
                    </label>
                    <br />
                    <Field
                      className="register-Field"
                      name="userName"
                      type="text"
                      placeholder=""
                    />
                    <ErrorMessage
                      name="userName"
                      component="div"
                      style={{ color: "red", fontSize: "12px" }}
                    />
                  </div>

                  <div className="register-group-field register-eye">
                    <label className="register-label" htmlFor="password">
                      Mật khẩu
                    </label>
                    <br />
                    <Field
                      className="register-Field"
                      name="password"
                      type={showPassword ? "text" : "password"}
                    />
                    <i
                      className={`register-eye-icon ${
                        showPassword ? "fa fa-eye" : "fa fa-eye-slash"
                      }`}
                      onClick={tooglePasswordVisibility}
                    ></i>
                    <ErrorMessage
                      name="password"
                      component="div"
                      style={{ color: "red", fontSize: "12px" }}
                    />
                  </div>

                  <div className="register-role">
                    <div className="register-role-group">
                      <p>Nhân viên</p>
                      <input
                        type="radio"
                        name="role"
                        value="staff"
                        onChange={() => setFieldValue("role", "staff")}
                        // checked={values.role === "staff"}
                      />
                    </div>
                    <div className="register-role-group">
                      <p>Quản lý</p>
                      <input
                        type="radio"
                        name="role"
                        value="manager"
                        onChange={() => setFieldValue("role", "manager")}
                        // checked={values.role === "manager"}
                      />
                    </div>
                  </div>

                  <button className="register-button" type="submit">
                    Đăng ký
                  </button>

                  <div className="register-bonus">
                    <p>
                      Bạn đã có tài khoản?{" "}
                      <span
                        className="register-span"
                        onClick={handleClickLogin}
                      >
                        {" "}
                        Đăng nhập
                      </span>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="imagine">
            <img
              className="imagine-img"
              src="https://s3-alpha-sig.figma.com/img/6e4d/719d/e6aff13fc8e464cd1fb5fdb136c71ae2?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z-AK3S7BONsiHapy-MHHUX0nnnwvphDMHEoTxEpPRy3mxjgmUi910dzdcyeSCFwtUZ2nIAGGlYQbOUMQac4SHV8g2yBAgIS5Rvr9C2gYust-eEt41VjqjTjUpPUkV7CZGN8QC1dOX3FhBg6uqnbEh--fUUTOQUFh6e39LeQDKA9iA6Z4iyu0UYKX7crWeAehIRxIQ9VEv0YD6sR7gglULSQ4sHN9Llc5E1crK~tnaUmS7MhJ3liZRUo1kQGd~gOwZw3QZBg0BibxT9Cnclb0~w6DjEBNskJFstLCuf5pE1H9qaLa2zueyR2EwBdGCKF-nlHYry-~OjgVMpCifhcE-Q__"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
