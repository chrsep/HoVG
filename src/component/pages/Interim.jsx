import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/pages/interim.css";

class Interim extends React.Component {

	componentDidMount() {
		this.props.menuOn();
	}

	
	componentWillUnmount (){
		this.props.menuOff();
	}

	render() {
		return (
			<div styleName="container">
				
			</div>
		)
	}
}

export default CSSModules(Interim, styles);