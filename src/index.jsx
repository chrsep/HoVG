import React from "react";
import {render} from "react-dom";
import {Router, hashHistory, Route, IndexRoute} from "react-router";

import App from "./component/App.jsx";
import Home from "./component/pages/0Home.jsx";
import Interim from "./component/pages/Interim.jsx";
import First from "./component/pages/1first.jsx";
import Second from "./component/pages/2second.jsx";
import Third from "./component/pages/3third.jsx";
import Fourth from "./component/pages/4fourth.jsx";

class Index extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}/>
					<Route path="/interim" component={Interim}/>
					<Route path="/first" component={First}/>
					<Route path="/second" component={Second}/>
					<Route path="/third" component={Third}/>
					<Route path="/fourth" component={Fourth}/>
				</Route>
			</Router>
		)
	}
}

render(<Index/>, document.getElementById('App'));

