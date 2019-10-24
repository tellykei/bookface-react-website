import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import EmailAddressInput from "../inputs/EmailAddressInput";
import LastNameInput from "../inputs/LastNameInput";
import FirstNameInput from "../inputs/FirstNameInput";

class Registerpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: ""
    };
    this.state = {
      LastName: ""
    };

    this.state = {
      emailAddress: ""
    };

    this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
    this.handleEmailAddressSubmit = this.handleEmailAddressSubmit.bind(this);

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleFirstNameSubmit = this.handleFirstNameSubmit.bind(this);

    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleLastNameSubmit = this.handleLastNameSubmit.bind(this);

    this.checkPassword = this.checkPassword.bind(this);
    this.onClick = this.onClick.bind(this);
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

  handleFirstNameChange(event) {
    this.setState({ FirstName: event.target.value });
  }
  handleFirstNameSubmit() {
    const { FirstName } = this.state;

    alert(`You entered the First Name: ${FirstName}`);
  }

  handleLastNameChange(event) {
    this.setState({ LastName: event.target.value });
  }
  handleLastNameSubmit() {
    const { LastName } = this.state;

    alert(`You entered the LastName: ${LastName}`);
  }

  handleEmailAddressChange(event) {
    this.setState({ emailAddress: event.target.value });
  }
  handleEmailAddressSubmit() {
    const { emailAddress } = this.state;

    alert(`You entered the Email Address: ${emailAddress}`);
  }

  onClick(event) {
    this.handleFirstNameSubmit();
    this.handleLastNameSubmit();
    this.handleEmailAddressSubmit();
    this.checkPassword();
  }

  render() {
    const { FirstName } = this.state;
    const { LastName } = this.state;
    const { emailAddress } = this.state;
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
              <FirstNameInput
                value={FirstName}
                onChange={this.handleFirstNameChange}
              />
              <LastNameInput
                value={LastName}
                onChange={this.handleLastNameChange}
              />
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
                onClick={this.onClick}
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
