import React from "react";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { Stack, TextField, Button, Typography } from "@mui/material";
import { FavoriteOutlined } from "@mui/icons-material";
import { StyledForm } from "../../../../styles/styledForm";

export default function RequestDeposit() {
  const styles = StyledForm();

  const RegisterSchema = Yup.object().shape({
    code: Yup.number("Amount must be a number greater than 0.").required(
      "Amount must be a number greater than 0."
    ),
    reason: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("Reason required!"),
  });

  const formik = useFormik({
    initialValues: {
      code: "",
      reason: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        console.log(values);
        //await register(values.email, values.password, values.code, values.code);
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
            <Typography variant="body1" color="primary.dark" align="left">
              Amount <FavoriteOutlined />
            </Typography>
            <TextField
              fullWidth
              label="Enter Amount"
              {...getFieldProps("code")}
              variant="filled"
              className={styles.input}
              error={Boolean(touched.code && errors.code)}
              helperText={touched.code && errors.code}
            />
          </>
          <>
            <Typography variant="body1" color="primary.dark" align="left">
              Reason
            </Typography>
            <TextField
              fullWidth
              label="Enter Reason"
              {...getFieldProps("reason")}
              variant="filled"
              className={styles.input}
              error={Boolean(touched.reason && errors.reason)}
              helperText={touched.reason && errors.reason}
            />
          </>
        </Stack>
        <Button
          type="submit"
          variant="outlined"
          loading={isSubmitting}
          className={styles.btn}
        >
          Request
        </Button>
      </Form>
    </FormikProvider>
  );
}
