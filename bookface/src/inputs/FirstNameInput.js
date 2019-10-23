import React from "react";

import { TextField } from "@material-ui/core";

class FirstNameInput extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <TextField
        variant={"outlined"}
        margin={"normal"}
        required
        fullWidth
        label={"First Name"}
        value={value}
        onChange={onChange}
      />
    );
  }
}

export default FirstNameInput;
