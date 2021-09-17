import { PureComponent } from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import routeConfig from "./constants/routeConfig";
import HomePage from "../src/components/pages/HomePage";
import AboutUsPage from "../src/components/pages/AboutUsPage";
import SelectionPage from "../src/components/pages/SelectionPage";
import ReviewPage from "../src/components/pages/ReviewPage";
import TrackPage from "../src/components/pages/TrackPage";
// import AutoLogin from "../src/components/pages/AutoLogin";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div style={{ backgroundColor: "ghostwhite", minHeight: "100vh" }}>
        <Switch>
          <Route path={routeConfig.about} exact component={AboutUsPage} />
          <Route path={routeConfig.selection} exact component={SelectionPage} />
          <Route path={routeConfig.review} exact component={ReviewPage} />
          <Route path={routeConfig.track} exact component={TrackPage} />
          {/* <Route path={routeConfig.autoLogin} exact component={AutoLogin} /> */}
          <Route path={routeConfig.homepage} component={HomePage} />
        </Switch>
      </div>
    );
  };
}

App.propTypes = {};

App.defaultProps = {};

export default withRouter(App);
