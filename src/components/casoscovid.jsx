import React, { useState, useEffect } from "react";
import { Table, Skeleton } from "antd";
import axios from "axios";
import styled from "styled-components";

import socketIOClient from "socket.io-client";

const StyledTableContainer = styled.div`
  width: 50%;
  height: 20%;
`;
// TODO: ADD STYLES AND FILTERING FUCTION
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
      key: "provincia",
      width: "20%"
    },
    {
      title: "Fecha",
      dataIndex: "fecha",
      key: "fecha",
      width: "30%"
    }
  ];

  const [endpoint, setEndPoint] = useState("http://127.0.0.1:4000"); //NODE ENDPOINT
  const [response, setResponse] = useState(false);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const socket = socketIOClient(endpoint);
    const theme = "blue";
    socket.on("FromAPI", data => {
      setResponse(data);
      setIsloading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <StyledTableContainer>
        <Skeleton loading={isLoading} active />
      </StyledTableContainer>
    );
  } else {
    return (
      <StyledTableContainer>
        <Table
          dataSource={response}
          columns={columns}
          rowKey="pais"
          pagination={{
            pageSizeOptions: ["3", "5"],
            showSizeChanger: true,
            defaultPageSize: 3
            // size: "small"
          }}
        />
      </StyledTableContainer>
    );
  }
};
// return (
//   //

//     />
//   )
//   // </StyledTableContainer>
// );
// };

export default Casos;
