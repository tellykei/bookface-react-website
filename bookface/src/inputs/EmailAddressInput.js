import React from "react";

import { TextField } from "@material-ui/core";

class EmailAddressInput extends React.Component {
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
      />
    );
  }
}

export default EmailAddressInput;
