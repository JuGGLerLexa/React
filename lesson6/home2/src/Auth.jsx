import React from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";
import "./index.scss";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isLoading: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isLoading: false,
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn, isLoading } = this.state;

    if (this.state.isLoading) {
      return <Spinner size={20} />;
    }
    if (isLoggedIn) {
      return <Logout onLogout={this.handleLogout} />;
    }
    return <Login onLogin={this.handleLogin} />;
  }
}

export default Auth;
