import React from "react";

import { TextField } from "@material-ui/core";

class EmailAddressInput extends React.Component {
  constructor(props) {
    super(props);

    this.checkEmail = this.checkEmail.bind(this);
  }

  checkEmail() {
    const email = document.getElementById("email");
    if (email.value.includes("@")) {
      email.setCustomValidity("");
    } else {
      email.setCustomValidity("Invalid Email Address");
    }
  }

  render() {
    const { value, onChange } = this.props;
    const emailIsValid = value.includes("@");
    const helperText = emailIsValid ? "Email is Good" : "Missing @ sign";

    return (
      <TextField
        variant={"outlined"}
        margin={"normal"}
        required
        fullWidth
        label={"Email Address"}
        value={value}
        onChange={onChange}
        error={!emailIsValid}
        helperText={helperText}
        id={"email"}
        onKeyUp={this.checkEmail}
      />
    );
  }
}

export default EmailAddressInput;
