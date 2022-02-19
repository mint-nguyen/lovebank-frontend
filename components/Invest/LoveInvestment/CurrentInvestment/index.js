import React from "react";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { Stack, TextField, Button, Typography } from "@mui/material";
import { Favorite, FavoriteOutlined } from "@mui/icons-material";
import { StyledForm } from "../../../../styles/styledForm";

export default function CurrentInvestment() {
  const styles = StyledForm();

  const RegisterSchema = Yup.object().shape({
    invest: Yup.string().required(),
    time: Yup.number("Time must be a number greater than 0.").required(
      "Time must be a number greater than 0."
    ),
  });

  const formik = useFormik({
    initialValues: {
      invest: "",
      time: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        console.log(values);
        //await register(values.email, values.password, values.invest, values.invest);
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
              Investment Name <FavoriteOutlined />
            </Typography>
            <TextField
              fullWidth
              label="Enter Investment Name"
              {...getFieldProps("invest")}
              variant="filled"
              className={styles.input}
              error={Boolean(touched.invest && errors.invest)}
              helperText={touched.invest && errors.invest}
            />
          </>
          <>
            <Typography variant="body1" color="primary.dark" align="left">
              Time (Min)
            </Typography>
            <TextField
              fullWidth
              label="Enter Time"
              {...getFieldProps("time")}
              variant="filled"
              className={styles.input}
              error={Boolean(touched.time && errors.time)}
              helperText={touched.time && errors.time}
            />
          </>
          <>
            <Typography variant="body1" color="primary.dark" align="left">
              Date
            </Typography>
            <TextField
              id="date"
              type="date"
              fullWidth
              variant="filled"
              className={styles.input}
            />
          </>
          <Typography variant="body1" color="primary.dark" align="left">
            Importance Level <br /> <Favorite /> <Favorite /> <Favorite />
          </Typography>
          <Typography variant="body1" color="primary.dark" align="left">
            Total Points <br /> 100 <Favorite />
          </Typography>
        </Stack>
        <Button
          type="submit"
          variant="outlined"
          loading={isSubmitting}
          className={styles.btn}
        >
          Request for Approval
        </Button>
      </Form>
    </FormikProvider>
  );
}
