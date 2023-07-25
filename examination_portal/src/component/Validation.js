import React from "react";

export const Validation = (values) => {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name required.";
  }

  if (!values.lastName) {
    errors.lastName = "Last Name required.";
  }

  if (!values.organisationName) {
    errors.organisationName = "Organisation Name required.";
  }

  if (!values.domain) {
    errors.domain = "Domain required.";
  }

  if (!values.department) {
    errors.department = "Department required.";
  }

  if (!values.position) {
    errors.position = "Position required.";
  }

  if (!values.purpose) {
    errors.purpose = "Purpose required.";
  }

  if (!values.emailid) {
    errors.emailid = "Email Id required.";
  }

  if (!values.password) {
    errors.password = "Password required.";
  } else if (values.password.lenght < 8) {
    errors.password = "Password must contain atleast 8 characters";
  }

  if (!values.phone) {
    errors.phone = "Phone Number required";
  }

  return errors;
};

export const loginValidation = (values) => {
  let errors = {};

  if (!values.emailid1) {
    errors.emailid1 = "Email Id required";
  }

  if (!values.password) {
    errors.password = "Password required";
  }
};
