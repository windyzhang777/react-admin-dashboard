import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import Header from "../../components/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp =
  /^(\+?[01])?[-.\s]?\(?[1-9]\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;

const userSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email("invalid email").required(),
  contact: yup.string().matches(phoneRegExp, "invalid phone number").required(),
  address1: yup.string().required(),
  address2: yup.string(),
});

export default function ProfileForm() {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(`values :`, values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={userSchema}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display={"grid"}
              gap={"30px"}
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span 4", // fullwidth
                },
              }}
            >
              <TextField
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={!!touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={!!touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                variant="filled"
                type="email"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={!!touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                variant="filled"
                type="string"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={!!touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={!!touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={!!touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"end"}
              alignItems={"center"}
              mt={"20px"}
            >
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
              >
                Create A New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}
