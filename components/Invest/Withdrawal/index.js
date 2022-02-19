import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { Stack, TextField, Button, Typography } from "@mui/material";
import { FavoriteOutlined } from "@mui/icons-material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Dialog from "../../Dialog";
import { StyledForm } from "../../../styles/styledForm";

export default function Withdrawal() {
  const styles = StyledForm();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = (value) => {
    setOpen(false);
  };

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
        <Typography variant="h6" color="primary.dark">
          SEND A WITHDRAWAL{" "}
          <Button
            sx={{
              padding: 0,
              color: "primary.dark",
            }}
            onClick={handleClickOpen}
          >
            <InfoOutlinedIcon />
          </Button>
        </Typography>
        <Dialog
          open={open}
          onClose={handleClickClose}
          content={
            <Typography>
              <InfoOutlinedIcon /> <br /> Send a withdrawal to your partner for
              his/her wrongness that hurts the relationship. Ex: Being
              impunctual for a date. The amount of withdrawal will be deducted
              directly to your partner’s balance without any approval. Think
              thoroughly before confirming.
            </Typography>
          }
        />
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
          Confirm
        </Button>
      </Form>
    </FormikProvider>
  );
}
