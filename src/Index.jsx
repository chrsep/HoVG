import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import App from './component/App.jsx';
import Home from './component/pages/0Home.jsx'
import Interim from './component/pages/Interim.jsx'

class Index extends React.Component {
    componentDidMount(){
        let audio = new Audio('./asset/Cylinder_Five.mp3');
        audio.loop = true;
        audio.play();
    }
    render() {
        return(
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/interim" component={Interim}/>
                </Route>
            </Router>
        )
    }
}

render(<Index/>, document.getElementById('App'));

