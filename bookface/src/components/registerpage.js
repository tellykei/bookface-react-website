import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

class Registerpage extends React.Component {
  constructor(props) {
    super(props);

    this.checkEmail = this.checkEmail.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }
  checkEmail() {
    const email = document.getElementById("email");
    const mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (mailformat.test(email.value)) {
      email.setCustomValidity("");
    } else {
      email.setCustomValidity("Invalid Email Address");
    }
  }
  checkPassword() {
    const password = document.getElementById("password");
    const confirm_password = document.getElementById("confirm_password");
    if (password.value !== confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Do Not Match");
    } else {
      confirm_password.setCustomValidity("");
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div>
            <Avatar>BF</Avatar>
            <Typography component="h1" variant="h5">
              Create a new account
            </Typography>
            <form>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="fname"
                label="First Name"
                name="fname"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="lname"
                label="Last Name"
                name="lname"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onKeyUp={this.checkEmail}
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
                onChange={this.checkPassword}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirm_password"
                label="Confirm Password"
                type="password"
                id="confirm_password"
                onKeyUp={this.checkPassword}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default Registerpage;
