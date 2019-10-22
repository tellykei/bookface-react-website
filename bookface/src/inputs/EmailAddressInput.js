import React from "react";

import { TextField } from "@material-ui/core";

class EmailAddressInput extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <TextField
        variant={"outlined"}
        margin={"normal"}
        required
        fullWidth
        label={"Email address"}
        value={value}
        onChange={onChange}
      />
    );
  }
}

export default EmailAddressInput;
