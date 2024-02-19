import { useFormik } from "formik";
import React from "react";
import { customerSchema } from "./schema";
import "./index.scss";
import { addNewCustomer } from "../../services/customers.service";

const AddCustomerFormik = () => {
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        companyName: "",
        country: "",
        city: "",
        phone: "",
      },
      validationSchema: customerSchema,
      onSubmit: (values) => {
        let customerObj = {
          companyName: values.companyName,
          address: {
            country: values.country,
            city: values.city,
            phone: values.phone,
          },
        };

        addNewCustomer(customerObj);
        resetForm()
      },
    });
  return (
    <div className="formikForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">Company Name</label>
        <input
          id="companyName"
          name="companyName"
          type="text"
          onChange={handleChange}
          value={values.companyName}
        />
        {errors.companyName && touched.companyName && (
          <span>{errors.companyName}</span>
        )}

        <br />
        <br />
        <label htmlFor="country">country</label>
        <input
          id="country"
          name="country"
          type="text"
          onChange={handleChange}
          value={values.country}
        />
        {errors.country && touched.country && <span>{errors.country}</span>}
        <br />
        <br />

        <label htmlFor="city">city</label>
        <input
          id="city"
          name="city"
          type="city"
          onChange={handleChange}
          value={values.city}
        />
        {errors.city && touched.city && <span>{errors.city}</span>}
        <br />
        <br />

        <label htmlFor="phone">phone</label>
        <input
          id="phone"
          name="phone"
          type="phone"
          onChange={handleChange}
          value={values.phone}
        />
        {errors.phone && touched.phone && <span>{errors.phone}</span>}
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCustomerFormik;
