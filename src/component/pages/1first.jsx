import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/pages/1first.css";

class First extends React.Component {
	render() {
		return (
			<div></div>
		)
	}
}

export default CSSModules(First, styles)