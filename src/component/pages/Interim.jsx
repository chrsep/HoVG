import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/pages/interim.css";
import Strikes from "../molecules/strikes.jsx";

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
				<div styleName="strikes"><Strikes parallax={() => {}} x={1} y={1}/></div>
				<span styleName="quote">"An awesome quote"</span>
				<span styleName="quoted-person">-Tony Stark</span>
			</div>
		)
	}
}

export default CSSModules(Interim, styles);