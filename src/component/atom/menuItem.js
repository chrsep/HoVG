import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/atom/menuItem.pcss";
import {Link} from "react-router";

class MenuItem extends React.Component {
	render() {
		return (
			<Link styleName="container" to={this.props.to} key={this.props.key + "-link"}>
				<div styleName="text">{this.props.text}</div>
				<div styleName="year">{this.props.year}</div>
			</Link>
		)
	}
}

export default CSSModules(MenuItem, styles)