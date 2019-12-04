import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Axios from "axios";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import PasswordInput from "../inputs/PasswordInput";
import EmailAddressInput from "../inputs/EmailAddressInput";

class Loginpage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailAddress: "",
      Password: ""
    };

    this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }

  handleEmailAddressChange(event) {
    this.setState({ emailAddress: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ Password: event.target.value });
  }

  async handleUserSubmit() {
    const { emailAddress, Password } = this.state;
    try {
      const data = { email: emailAddress, password: Password };

      const response = await Axios.post("/api/sessions", data);

      if (JSON.stringify(response.status) === "200") {
        const { history } = this.props;

        history.push("/login");
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  render() {
    const { emailAddress } = this.state;
    const { Password } = this.state;

    return (
      <div>
        <br></br>
        <Container component={"main"} maxWidth={"xs"}>
          <CssBaseline />
          <div>
            <Avatar>BF</Avatar>
            <Typography component={"h1"} variant={"h5"}>
              Sign in
            </Typography>
            <form>
              <EmailAddressInput
                value={emailAddress}
                onChange={this.handleEmailAddressChange}
              />
              <PasswordInput
                value={Password}
                onChange={this.handlePasswordChange}
              />

              <Button
                type={"submit"}
                fullWidth
                variant={"contained"}
                color={"primary"}
                onClick={this.handleUserSubmit}
              >
                Login In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href={"recover"} color={"inherit"} variant={"body2"}>
                    {"Forgot password?"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href={"/register"} color={"inherit"} variant={"body2"}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default Loginpage;
