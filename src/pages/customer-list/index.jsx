import React, { useState, useEffect } from "react";
import "./index.scss";
import { Button, message, notification, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import {
  deleteCustomerById,
  getAllCustomers,
} from "../../services/customers.service";
import Spinner from "../../components/spinner";
import { Helmet } from "react-helmet";

const CustomerList = ({ favorites, setFavorites }) => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const getData = async () => {
    setCustomers(await getAllCustomers());
    setIsloading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    let result = customers.filter((el) => el.id !== id);
    setCustomers(result);
    deleteCustomerById(id);
  };

  const handleAddFavorite = (obj) => {
    if (!favorites.find((el) => el.id === obj.id)) {
      setFavorites([...favorites, obj]);
    } else {
      alert("bele user elave olunub!");
    }
  };

  const confirm = (id) => {
    handleDelete(id);
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    message.error("Click on No");
  };

  const openNotification = () => {
    notification.open({
      message: "Added to favorites",
      description: "This is customer added to favorites",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" name="desription" content="customer list page" />
        <title>Customer List</title>
      </Helmet>

      {isLoading ? (
        <Spinner />
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Company Name</th>
              <th>Phone</th>
              <th>Country</th>
              <th>Delete</th>
              <th>Detail</th>
              <th>Add Favorite</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => {
              return (
                <tr>
                  <td>{customer.id}</td>
                  <td>{customer.companyName}</td>
                  <td>{customer.address?.phone}</td>
                  <td>
                    {customer.address?.country}, {customer.address?.city}
                  </td>
                  <td>
                    <Popconfirm
                      title="Delete the task"
                      description="Are you sure to delete this task?"
                      onConfirm={() => confirm(customer.id)}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button
                        type="primary"
                        danger
                        // onClick={() => handleDelete(customer.id)}
                      >
                        Delete
                      </Button>
                    </Popconfirm>
                  </td>
                  <td>
                    <Link to={customer.id}>Detail</Link>
                  </td>
                  <td className="button">
                    <Button
                      type="primary"
                      warning
                      onClick={() => {
                        handleAddFavorite(customer);
                        openNotification();
                      }}
                      disabled={
                        favorites.find((el) => el.id === customer.id)
                          ? true
                          : false
                      }
                      className={
                        favorites.find((el) => el.id === customer.id)
                          ? "already"
                          : "add"
                      }
                    >
                      {!favorites.find((el) => el.id === customer.id)
                        ? "Add to Favorite"
                        : "Already Favorite"}
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CustomerList;
