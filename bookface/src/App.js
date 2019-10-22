import React from "react";

import NavigationBar from "./Navigation/Appbar";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loginpage from "./components/loginpage";
import Registerpage from "./components/registerpage";

import { yellow, pink } from "@material-ui/core/colors";
import Forgotpasswordpage from "./components/forgotpasswordpage";

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: pink
  }
});

class App extends React.Component {
  render() {
    return (
      <div>
        {/* Providers are new to you, just understand that they must exist as high in the heirarchy as possible. 
                       Change the default Material UI theme by passing in the theme we made up top to this provider */}
        <ThemeProvider theme={theme}>
          <Router>
            <div>
              {/* Add out custom NavigationBar to the render */}
              <NavigationBar />

              {/* React Router switch statement for conditionally rendering Components.
                                   If the path matches '/about' render the AboutPage Component */}
              <Switch>
                <Route path="/login">
                  <Loginpage />
                </Route>

                <Route path="/register">
                  <Registerpage />
                </Route>

                <Route path="/recover">
                  <Forgotpasswordpage />
                </Route>
              </Switch>
            </div>
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
