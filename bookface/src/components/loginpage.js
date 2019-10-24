import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
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
      emailAddress: ""
    };

    this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
    this.handleEmailAddressSubmit = this.handleEmailAddressSubmit.bind(this);

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);

    this.onClick = this.onClick.bind(this);
  }

  handleEmailAddressChange(event) {
    this.setState({ emailAddress: event.target.value });
  }
  handleEmailAddressSubmit() {
    const { emailAddress } = this.state;

    alert(`You entered the Email Address: ${emailAddress}`);
  }

  handlePasswordChange(event) {
    this.setState({ Password: event.target.value });
  }
  handlePasswordSubmit() {
    const { Password } = this.state;

    alert(`You entered the Password: ${Password}`);
  }

  onClick(event) {
    this.handleEmailAddressSubmit();
    this.handlePasswordSubmit();
  }

  render() {
    const { emailAddress } = this.state;
    const { Password } = this.state;

    return (
      <div>
        <br></br>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div>
            <Avatar>BF</Avatar>
            <Typography component="h1" variant="h5">
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
              <FormControlLabel
                control={<Checkbox value="remember" color="default" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.onClick}
              >
                Login In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="recover" color="inherit" variant="body2">
                    {"Forgot password?"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" color="inherit" variant="body2">
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
