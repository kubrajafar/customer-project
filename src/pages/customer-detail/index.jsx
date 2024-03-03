import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCustomerById } from "../../services/customers.service";
import { Button } from "antd";
import "./index.scss";
import { Helmet } from "react-helmet";

const CustomerDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [customers, setCustomers] = useState({});

  const getData = async () => {
    setCustomers(await getCustomerById(params.id));
  };


    getData();


  return (
    <div className="detail">
      <Helmet>
        <title>{customers.companyName}</title>
      </Helmet>
      <ul>
        <li>ID: {customers.id}</li>
        <li>companyName : {customers.companyName}</li>
        <li>contactTitle : {customers.contactTitle}</li>
        <li>phone : {customers.address?.phone}</li>
        <li>country : {customers.address?.country}</li>
      </ul>
      <div className="button">
        <Button
          type="primary"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go To Back
        </Button>
        <Button
          type="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Go To Home
        </Button>
      </div>
    </div>
  );
};

export default CustomerDetail;
