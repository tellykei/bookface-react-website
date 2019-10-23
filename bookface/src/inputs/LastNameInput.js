import React from "react";

import { TextField } from "@material-ui/core";

class LastNameInput extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <TextField
        variant={"outlined"}
        margin={"normal"}
        required
        fullWidth
        label={"Last Name"}
        value={value}
        onChange={onChange}
      />
    );
  }
}

export default LastNameInput;
