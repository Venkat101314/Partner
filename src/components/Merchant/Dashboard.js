import PrintIcon from "@mui/icons-material/Print";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import DataTable from "./DataTable";
import OrderList from "./OrderList";
import "../styles.css";
import Widgets from "../Widget";

const Wrapper = styled.div`
  height: max-content;
  margin-bottom: 0.5%;
  align-items: center;
  flex-wrap: wrap;
  border: 0.25px solid rgb(173, 169, 169);
  box-shadow: 2px 2px 2px 1px rgb(173, 169, 169);
`;
const Status = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 3%;
`;
const Span = styled.div`
  display: block;
  font-size: 10px;
`;

const Dashboard = () => {
  const [data, setData] = useState({});
  console.log("tests", data);
  return (
    <div className="dash">
      <div className="Row content">
        <Col sm={2} className="order_list">
          <OrderList setData={setData} />
        </Col>
        <Col sm={8} className="data_table ">
          <Wrapper>
            <Alert
              severity="success"
              action={
                <div className="d-flex" style={{ width: "300px" }}>
                  <Col sm={9}>
                    <Span>
                      Order Id<br></br>Order Date<br></br>Total{" "}
                    </Span>
                  </Col>

                  <Col sm={3}>
                    <Button color="inherit">
                      <PrintIcon />
                    </Button>
                  </Col>
                </div>
              }
            >
              This is a success alert — check it out!
            </Alert>
          </Wrapper>

          <div className="Row table">
            <DataTable />
          </div>
        </Col>
        <Col sm={2} className="widgets">
          <Widgets />
        </Col>
      </div>
    </div>
  );
};

export default Dashboard;
