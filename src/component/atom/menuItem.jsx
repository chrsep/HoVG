import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/atom/menuItem.css";
import {Link} from "react-router";

class MenuItem extends React.Component {
	render() {
		return (
			<Link styleName="container" to={this.props.to} key={this.props.key + "-link"}>
				{this.props.text}
			</Link>
		)
	}
}

export default CSSModules(MenuItem, styles)