import React from "react";

import { TextField } from "@material-ui/core";

class ConfirmPasswordInput extends React.Component {
  render() {
    const { value, value2, onChange } = this.props;
    const PasswordIsValid = value === value2;
    return (
      <div>
        <TextField
          variant={"outlined"}
          margin={"normal"}
          required
          fullWidth
          label={"Password"}
          value={value}
          onChange={onChange}
        />
        <TextField
          variant={"outlined"}
          margin={"normal"}
          required
          fullWidth
          label={"Password"}
          value={value2}
          error={!PasswordIsValid}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default ConfirmPasswordInput;
