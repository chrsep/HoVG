import React from "react";
import CSSModules from "react-css-modules";
import TransitionGroup from "react-addons-transition-group";
import styles from "../styles/app.css";
import Menu from "./molecules/menu.jsx";

class App extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {isMenuShown: false}
	}

	menuOff() {
		this.setState({isMenuShown: false})
	}

	menuOn() {
		this.setState({isMenuShown: true})
	}

	render() {
		return (
			<div styleName="container">
				<TransitionGroup component="div">
					{this.state.isMenuShown ?
						<Menu menuOn={this.menuOn.bind(this)} menuOff={this.menuOff.bind(this)}/> : null
					}
				</TransitionGroup>
				<TransitionGroup component="div"
				                 styleName={this.state.isMenuShown ? 'container-with-menu' : 'container'}>
					{React.cloneElement(this.props.children, {
						key: this.props.location.pathname,
						menuOn: this.menuOn.bind(this),
						menuOff: this.menuOff.bind(this),
						isMenuShown: this.state.isMenuShown
					})}
				</TransitionGroup>
			</div>
		)
	}
}

export default CSSModules(App, styles)