import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import EmailAddressInput from "../inputs/EmailAddressInput";

class Loginpage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailAddress: ""
    };

    this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
    this.handleEmailAddressSubmit = this.handleEmailAddressSubmit.bind(this);
  }

  handleEmailAddressChange(event) {
    this.setState({ emailAddress: event.target.value });
  }
  handleEmailAddressSubmit() {
    const { emailAddress } = this.state;

    alert(`You entered the email address: ${emailAddress}`);
  }

  render() {
    const { emailAddress } = this.state;

    return (
      <div>
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
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
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
                onClick={this.handleEmailAddressSubmit}
              >
                Login In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="recover" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
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
