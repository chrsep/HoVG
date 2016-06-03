import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/pages/interim.css";

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {size: 0}
	}

	handleScroll(e) {
		this.setState({size: this.state.size + e.deltaY});
		TweenMax.to(this.refs.timeline1, 1, {x: (this.state.size / 0.3 ), backgroundColor: "white", y: 800});
		TweenMax.to(this.refs.timeline2, 1, {x: (this.state.size / 0.4 ), backgroundColor: "red", y: 600});
		TweenMax.to(this.refs.timeline3, 1, {x: (this.state.size / 0.6), backgroundColor: "black", y: 300});
		TweenMax.to(this.refs.timeline4, 1, {x: (this.state.size / 1.21 ), backgroundColor: "purple", y: 100});
	}

	componentDidMount() {
		this.props.menuOn();
	}


	componentWillUnmount (){
		this.props.menuOff();
	}

	render() {
		return (
			<div onWheel={this.handleScroll.bind(this)}>
				<div ref="timeline4"></div>
				<div ref="timeline3"></div>
				<div ref="timeline2"></div>
				<div ref="timeline1"></div>
			</div>
		)
	}
}

export default CSSModules(Menu, styles);