import React from "react";

import { TextField } from "@material-ui/core";

class PasswordInput extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <TextField
        variant={"outlined"}
        margin={"normal"}
        required
        fullWidth
        label={"Password"}
        type="password"
        value={value}
        onChange={onChange}
      />
    );
  }
}

export default PasswordInput;
