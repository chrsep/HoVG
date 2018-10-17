import React from "react"
import { render } from "react-dom"
import { Router, hashHistory, Route, IndexRoute } from "react-router"

import App from "./component/App.js"
import Home from "./component/pages/0Home.js"
import Interim from "./component/pages/Interim.js"
import First from "./component/pages/1first.js"
import Second from "./component/pages/2second.js"
import Third from "./component/pages/3third.js"
import Fourth from "./component/pages/4fourth.js"
import { PureComponent } from "react/lib/ReactBaseClasses"

class Index extends PureComponent {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/interim" component={Interim} />
          <Route path="/first" component={First} />
          <Route path="/second" component={Second} />
          <Route path="/third" component={Third} />
          <Route path="/fourth" component={Fourth} />
        </Route>
      </Router>
    )
  }
}

render(<Index />, document.getElementById("App"))
