import React from 'react'
import CSSModules from 'react-css-modules'
import TransitionGroup from 'react-addons-transition-group'
import styles from '../styles/app.css'
import Menu from "./molecules/menu.jsx";

class App extends React.Component{
	constructor(props, context) {
		super(props, context);
		this.state = {isMenuShown: false}
	}

	menuOff(){
		this.setState({isMenuShown: false})
	}

	menuOn(){
		this.setState({isMenuShown: true})
	}

	render(){
        return(
            <TransitionGroup component="div" styleName="container">
	            {this.state.isMenuShown ? <Menu menuOn={this.menuOn.bind(this)} menuOff={this.menuOff.bind(this)} /> : null}
                {React.cloneElement(this.props.children, {
                    key: this.props.location.pathname,
	                menuOn: this.menuOn.bind(this),
	                menuOff: this.menuOff.bind(this),
	                isMenuShown: this.state.isMenuShown
                })}
            </TransitionGroup>
        )
    }
}

export default CSSModules(App, styles)