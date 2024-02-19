import * as Yup from "yup";

export const customerSchema = Yup.object().shape({
  companyName: Yup.string()
    .required("add to company name")
    .min(10, "not this is 10 carakter")
    .max(20, "max 20"),
  country: Yup.string()
    .required("add to country")
    .min(5, "not this is 5 carakter")
    .max(15, "max 15"),
  city: Yup.string()
    .required("add to city")
    .min(5, "not this is 5 carakter")
    .max(10, "max 10"),
  phone: Yup.string()
    .required("add to phone")
    .min(10, "not this is 10 carakter")
    .max(15, "max 15"),
});
