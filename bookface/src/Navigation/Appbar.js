import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

import { withRouter } from "react-router-dom";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    // Bind 'this' to both of these class functions
    this.handleLoginPageNavigation = this.handleLoginPageNavigation.bind(this);
    this.handleRegisterPageNavigation = this.handleRegisterPageNavigation.bind(this);
  }

  handleLoginPageNavigation() {
    const { history } = this.props;

    history.push("/login");
  }
  handleRegisterPageNavigation() {
    const { history } = this.props;

    history.push("/register");
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>

            <Button color="inherit" onClick={this.handleLoginPageNavigation}>
              Login
            </Button>
            <Button color="inherit" onClick={this.handleRegisterPageNavigation}>
              Register
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(NavigationBar);
