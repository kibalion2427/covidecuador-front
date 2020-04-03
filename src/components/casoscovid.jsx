import React, { useState, useEffect } from "react";
import { Table } from "antd";
import axios from "axios";
import styled from "styled-components";

const StyledTableContainer = styled.div`
  width: 50%;
  height: 20%;
  /* align-items: flex-start; */
`;

const Casos = () => {
  //   "pais": "EC",
  //         "provincia": "Gye",
  //         "fecha": "2020-04-02T05:49:35-05:00",
  //         "confirmados": 100.0,
  //         "recuperados": null,
  //         "muertos": null,
  //         "activos": null,
  //         "nuevos": null,
  //         "total":
  const columns = [
    {
      title: "Pais",
      dataIndex: "pais",
      key: "pais",
      width: "10%"
    },
    {
      title: "Provincia",
      dataIndex: "provincia",
      key: "provincia"
    },
    {
      title: "Fecha",
      dataIndex: "fecha",
      key: "fecha"
    }
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios.get("http://127.0.0.1:8000/viewset/covid/");
      if (!ignore) setData(result.data);
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <StyledTableContainer>
      <Table
        dataSource={data}
        columns={columns}
        rowKey="pais"
        pagination={{ pageSizeOptions: ["3", "5"], showSizeChanger: true }}
      />
    </StyledTableContainer>
  );
};

export default Casos;
