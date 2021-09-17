import { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import Routes from "./Routes";

// import AutoLogin from "../src/components/pages/AutoLogin";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div style={{ backgroundColor: "ghostwhite", minHeight: "100vh" }}>
        <Routes />
      </div>
    );
  };
}

App.propTypes = {};

App.defaultProps = {};

export default withRouter(App);
