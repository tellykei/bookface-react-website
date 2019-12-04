import React from "react";
import Axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import EmailAddressInput from "../inputs/EmailAddressInput";
import LastNameInput from "../inputs/LastNameInput";
import FirstNameInput from "../inputs/FirstNameInput";
import PasswordInput from "../inputs/PasswordInput";

class Registerpage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: "",
      LastName: "",
      EmailAddress: "",
      Password: ""
    };

    this.handleUserEmailChange = this.handleUserEmailChange.bind(this);
    this.handleUserPasswordChange = this.handleUserPasswordChange.bind(this);

    this.handleUserSubmit = this.handleUserSubmit.bind(this);
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

  handleLastNameChange(event) {
    this.setState({ LastName: event.target.value });
  }

  handleEmailAddressChange(event) {
    this.setState({ emailAddress: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ Password1: event.target.value });
  }
  async handleUserSubmit() {
    const { userEmail, userPassword } = this.state;
    try {
      const data = { email: userEmail, password: userPassword };

      await Axios.post("/api/users", data);
    } catch (error) {
      console.error(error.message);
    }
  }

  render() {
    const { FirstName, LastName, EmailAddress, Password } = this.state;

    return (
      <div>
        <br></br>
        <Container component={"main"} maxWidth={"xs"}>
          <CssBaseline />
          <div>
            <Avatar>BF</Avatar>
            <Typography component={"h1"} variant={"h5"}>
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
                value={EmailAddress}
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
