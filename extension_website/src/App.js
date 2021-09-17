import { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import Routes from "./Routes";

// import AutoLogin from "../src/components/pages/AutoLogin";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.isLoggedIn = !!localStorage.getItem("userMail");
  }

  render = () => {
    return (
      <div style={{ backgroundColor: "ghostwhite", minHeight: "100vh" }}>
        <Routes isLoggedIn={this.isLoggedIn} />
      </div>
    );
  };
}

App.propTypes = {};

App.defaultProps = {};

export default withRouter(App);
