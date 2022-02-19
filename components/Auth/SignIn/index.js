import { SocialButton } from "../SignUp";
import { Divider, Typography } from "@mui/material";
import SignInForm from "./SignInForm";

export default function SignIn() {
  return (
    <>
      <Typography variant="h5" color="primary.dark">
        Sign in with email
      </Typography>
      <SignInForm />
      <Typography variant="caption" color="primary.dark">
        Forgot password?
      </Typography>
      <Divider sx={{ color: "primary.dark", padding: 2 }}>OR</Divider>
      <Typography variant="h5" color="primary.dark">
        Sign in with...
      </Typography>
      <SocialButton />
    </>
  );
}
