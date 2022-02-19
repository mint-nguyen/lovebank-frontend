import React from "react";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { Stack, TextField, Button, Typography } from "@mui/material";
import { StyledForm } from "../../../styles/styledForm";

export default function JoinFamily() {
  const styles = StyledForm();

  const RegisterSchema = Yup.object().shape({
    code: Yup.string().required("Invitation code required"),
  });

  const formik = useFormik({
    initialValues: {
      code: "",
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
            <Typography variant="h6" color="primary.dark" align="left">
              Invitation code
            </Typography>
            <TextField
              fullWidth
              label="Enter Invatation Code"
              {...getFieldProps("code")}
              variant="filled"
              className={styles.input}
              error={Boolean(touched.code && errors.code)}
              helperText={touched.code && errors.code}
            />
          </>
        </Stack>
        <Button
          type="submit"
          variant="outlined"
          loading={isSubmitting}
          className={styles.btn}
        >
          Join
        </Button>
      </Form>
    </FormikProvider>
  );
}
