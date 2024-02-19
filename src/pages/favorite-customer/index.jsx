import { Button } from "antd";
import "./index.scss";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const FavoriteCustomer = ({ favorites, setFavorites }) => {
  const handleRemove = (id) => {
    let newFavorite = favorites.filter((el) => el.id !== id);
    setFavorites(newFavorite);
  };

  return (
    <div>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="this is favorite page"
        />
        <title>Favorite Page</title>
      </Helmet>
      <div className="allDeleteBtn">
        <Button danger className="btn" onClick={() => setFavorites([])}>
          Delete All Favorites
        </Button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company Name</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Delete</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((customer) => {
            return (
              <tr>
                <td>{customer.id}</td>
                <td>{customer.companyName}</td>
                <td>{customer.address.phone}</td>
                <td>
                  {customer.address.country}, {customer.address.city}
                </td>
                <td>
                  {/* <Popconfirm
                      title="Delete the task"
                      description="Are you sure to delete this task?"
                      onConfirm={confirm(customer.id)}
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
                    </Popconfirm> */}
                  <Button
                    type="primary"
                    danger
                    onClick={() => handleRemove(customer.id)}
                  >
                    Remove
                  </Button>
                </td>
                <td>
                  <Link to={customer.id}>Detail</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FavoriteCustomer;
