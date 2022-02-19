import React from "react";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { Stack, TextField, Button, Typography } from "@mui/material";
import { StyledForm } from "../../../styles/styledForm";
import Link from "next/link";

export default function CreateFamily() {
  const styles = StyledForm();

  const RegisterSchema = Yup.object().shape({
    familyName: Yup.string()
      .min(2, "Too Short!")
      .max(15, "Too Long!")
      .required("First name required"),
    slogan: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      familyName: "H&M",
      slogan: "Love is not enough",
      email: "parter@demo.app",
      remember: true,
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        console.log(values);
        // await register(
        //   values.email,
        //   values.password,
        //   values.familyName,
        //   values.slogan
        // );
        // if (isMountedRef.current) {
        //   setSubmitting(false);
        // }
      } catch (error) {
        console.error(error);
        setErrors({ afterSubmit: "Can't submit for some reasons!" });
        setSubmitting(false);
      }
    },
  });
  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <Stack spacing={3}>
          <>
            <Typography variant="h6" color="primary.dark" align="left">
              Family name
            </Typography>
            <TextField
              fullWidth
              label="Enter Family Name"
              {...getFieldProps("familyName")}
              variant="filled"
              className={styles.input}
              error={Boolean(touched.familyName && errors.familyName)}
              helperText={touched.familyName && errors.familyName}
            />
          </>
          <>
            <Typography variant="h6" color="primary.dark" align="left">
              Family slogan
            </Typography>
            <TextField
              fullWidth
              label="Enter Slogan (Optional)"
              variant="filled"
              className={styles.input}
              {...getFieldProps("slogan")}
              error={Boolean(touched.slogan && errors.slogan)}
              helperText={touched.slogan && errors.slogan}
            />
          </>
          <>
            <Typography variant="h6" color="primary.dark" align="left">
              Invite your partner
            </Typography>
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Enter Email Address"
              variant="filled"
              className={styles.input}
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
          </>
        </Stack>
        <Button
          type="submit"
          variant="outlined"
          loading={isSubmitting}
          className={styles.btn}
        >
          <Link href="./home">Create</Link>
        </Button>
      </Form>
    </FormikProvider>
  );
}
