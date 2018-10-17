import React, { PureComponent } from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import App from "./component/App.js"

class Index extends PureComponent {
  render() {
    return (
      <Router>
        <App/>
      </Router>
    )
  }
}

render(<Index />, document.getElementById("App"))
