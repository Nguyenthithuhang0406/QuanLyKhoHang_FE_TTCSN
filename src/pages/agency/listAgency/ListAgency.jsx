/* eslint-disable */
import React, { useEffect, useState } from "react";

import "./ListAgency.css";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
import { getSupplies } from "@/api/suppliesAPI/supply";
import { Pagination } from "antd";

const ListAgency = () => {
  const [supplies, setSupplies] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);


  useEffect(() => {
    const getListSupplies = async () => {
      try {
        const res = await getSupplies(limit, page);
        setSupplies(res.supplies);
        setTotal(res.supplies.length);
      } catch (error) {
        console.error(error);
      }
    };

    getListSupplies();
  }, [page]);

  const handleChangePage = (page) => {
    setPage(page);
  };

  return (
    <>
      <Header className="ListAgency" />
      <NavBar />
      <div className="container_ListAgency">
        <div className="sub_ListAgency">
          <div className="sub_1_ListAgency">
            <div className="group-listAgency">
              <div>
                <span>Mã nguồn</span>
                <input type="text" className="input_ListAgency" />
              </div>
              <div>
                <span>Tên nguồn</span>
                <input type="text" className="input_ListAgency" />
              </div>
            </div>
            <div className="group-listAgency">
              <div >
                <span>Loại nguồn</span>
                <select name="" id="" className="input2_ListAgency">
                  <option value="">-Chọn loại nguồn-</option>
                  <option value="">Đại lý</option>
                  <option value="">Nhà cung cấp</option>
                </select>
              </div>
              <div>
                <span>Số điện thoại</span>
                <input type="text" className="input_ListAgency" />
              </div>
            </div>
          </div>
          <div className="sub_2_ListAgency">
            <span>
              Tìm kiếm <i className="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div className="sub_3_ListAgency">
          <p>+ Thêm mới nguồn</p>
        </div>
        <div className="table_ListAgency">
          <table className="table2_ListAgency">
            <tbody>
              <tr className="ListAgency_tr">
                <th className="ListAgency_th_1">STT</th>
                <th className="ListAgency_th1">Tên nguồn</th>
                <th className="ListAgency_th">Loại nguồn</th>
                <th className="ListAgency_th">Mã nguồn</th>
                <th className="ListAgency_th">Số điện thoại</th>
                <th className="ListAgency_th1">Địa chỉ</th>
                <th className="ListAgency_th">Thao tác</th>
              </tr>
              {
                supplies.length > 0 && supplies.map((supply, index) => (
                  <tr className="listAgency_tr_2" key={supply._id}>
                    <td className="listAgency_td_2">{(page - 1) * limit + index + 1}</td>
                    <td className="listAgency_td">{supply.providerName || supply.agencyName}</td>
                    <td className="listAgency_td_2">{supply.providerName ? "Nhà cung cấp " : "Đại lý"}</td>
                    <td className="listAgency_td_2">{supply.providerCode || supply.agencyCode}</td>
                    <td className="listAgency_td_2">{supply.providerPhone || supply.agencyPhone}</td>
                    <td className="listAgency_td">{supply.providerAddress || supply.agencyAddress}</td>
                    <td className="purple">
                      <span className="bin_ListAgency">
                        <i className="fa-solid fa-trash" style={{ color: 'red' }}></i>
                      </span>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <Pagination
            total={total}
            pageSize={limit}
            current={page}
            onChange={handleChangePage}
            style={{ "position": "absolute", "bottom": "20px", "right": "50px", "position": "fixed" }}
          />
        </div>
      </div>
    </>
  );
};

export default ListAgency;
