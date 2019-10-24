import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

class Forgotpasswordpage extends React.Component {
  render() {
    return (
      <div>
        <br></br>
        <Container component={"main"} maxWidth={"xs"}>
          <CssBaseline />
          <div>
            <Avatar>BF</Avatar>
            <Typography component={"h1"} variant={"h5"}>
              Account Email
            </Typography>
            <form>
              <TextField
                variant={"outlined"}
                margin={"normal"}
                required
                fullWidth
                id={"email"}
                label={"Email Address"}
                name={"email"}
              />
              <Button
                type={"submit"}
                fullWidth
                variant={"contained"}
                color={"primary"}
              >
                Send Recovery Email
              </Button>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default Forgotpasswordpage;
