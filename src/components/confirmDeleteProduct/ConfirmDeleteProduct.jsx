/* eslint-disable */
import React from "react";

import "./ConfirmDeleteProduct.css";
import { deleteProduct } from "@/api/productAPI/product";
import { toast } from "react-toastify";

const ConfirmDeleteProduct = ({ type, onCancel, id }) => {
  
  const handleAgree = async () => {
    if (type === "deletedProduct") {
      try {
        await deleteProduct(id);
        onCancel();
        toast.success("Xoá hàng hóa thành công");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="body">
      <div className="frame">
        <span className="close" onClick={() => onCancel()}> &times; </span>
        <p>Bạn chắc chắn muốn xoá?</p>
        <div className="btn-confirm-deleted">
          <button className="confirm" onClick={() => handleAgree()}>Đồng ý</button>
          <button className="cancel" onClick={() => onCancel()}>Huỷ</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteProduct;
