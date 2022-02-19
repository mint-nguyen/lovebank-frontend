import RegisterForm from "./RegisterForm";
import Button from "../../Button";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function SignUp() {
  return (
    <>
      <Typography variant="h5" color="primary.dark">
        Sign up with...
      </Typography>
      <Button>
        <FacebookIcon sx={{ marginRight: 1 }} />
        <Link href="">Facebook</Link>
      </Button>
      <br />
      <Button>
        <GoogleIcon sx={{ marginRight: 1 }} />
        <Link href="">Google</Link>
      </Button>
      <br />
      <Button>
        <TwitterIcon sx={{ marginRight: 1 }} />
        <Link href="">twitter</Link>
      </Button>
      <Divider sx={{ color: "primary.dark", padding: 1 }}>OR</Divider>
      <Typography color="primary.dark" variant="h5">
        Sign up with email
      </Typography>
      <RegisterForm />
      <Typography variant="caption" color="primary.dark">
        By creating account, you agree to our <a>Terms and Conditions</a> &{" "}
        <a>Policy</a>
      </Typography>
    </>
  );
}
export function SocialButton() {
  return (
    <>
      <Button>
        <FacebookIcon sx={{ marginRight: 1 }} />
        <Link href="">Facebook</Link>
      </Button>
      <br />
      <Button>
        <GoogleIcon sx={{ marginRight: 1 }} />
        <Link href="">Google</Link>
      </Button>
      <br />
      <Button>
        <TwitterIcon sx={{ marginRight: 1 }} />
        <Link href="">twitter</Link>
      </Button>
    </>
  );
}
