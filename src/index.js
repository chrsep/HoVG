import React, { PureComponent } from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import App from "./component/App.js"
import Home from "./component/pages/0Home.js"
import Interim from "./component/pages/Interim.js"
import First from "./component/pages/1first.js"
import Second from "./component/pages/2second.js"
import Third from "./component/pages/3third.js"
import Fourth from "./component/pages/4fourth.js"

class Index extends PureComponent {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/interim" component={Interim} />
            <Route path="/first" component={First} />
            <Route path="/second" component={Second} />
            <Route path="/third" component={Third} />
            <Route path="/fourth" component={Fourth} />
            <Route path="/" tset="ads" component={Home} />
          </Switch>
        </App>
      </Router>
    )
  }
}

render(<Index />, document.getElementById("App"))
