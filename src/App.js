import { Route, Routes } from "react-router-dom";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import HomePage from "./pages/home-page";
import CustomerList from "./pages/customer-list";
import CustomerDetail from "./pages/customer-detail";
import AddCustomerFormik from "./pages/addCustomer-formik";

import FavoriteCustomer from "./pages/favorite-customer";
import ErrorPage from "./pages/error-page";

import "./assets/sass/reset.scss";
import { useState } from "react";

function App() {
  const [favorites, setFavorites] = useState([]);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/customer-list"
          element={
            <CustomerList favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route path="/customer-list/:id" element={<CustomerDetail />} />
        <Route
          path="/favorite-customer"
          element={
            <FavoriteCustomer
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        {/* <Route path="/add-customer" element={<AddCustomer />} /> */}
        <Route path="/add-customer" element={<AddCustomerFormik />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
