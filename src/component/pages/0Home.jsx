import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/pages/0home.css";
import Button from "../molecules/button.jsx";
import Strikes from "../molecules/strikes.jsx";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {x: 0, y: 0}
	}

	listener(e) {
		let rootNode = document.querySelector('body');
		let {top, left} = rootNode.getBoundingClientRect();
		this.setState({
			x: e.clientX - 200 - left,
			y: e.clientY - 100 - top
		})
	}

	componentDidMount() {
		let {title, desc, explore} = this.refs;
		let animIn = new TimelineLite({delay: 2});
		animIn.from(title, 3.2, {y: '+=50', opacity: 0})
			.from(desc, 3, {y: '+=50', opacity: 0})
			.from(explore, 1, {y: '+=25', opacity: 0});
	}

	componentWillLeave(callback) {
		let {title, desc, explore, strikes} = this.refs;
		let animOut = new TimelineMax({onComplete: callback});
		animOut.to(title, 0.7, {y: '-=50', opacity: 0})
			.to(desc, 0.7, {y: '-=50', opacity: 0}, 0.4)
			.to(explore, 0.7, {y: '-=25', opacity: 0}, 0.8)
			.to(strikes, 0.7, {opacity: 0});
	}


	render() {
		let {x, y} = this.state;
		let parallax = (x, y) => {
			return {transform: `translate(${x}px, ${y}px)`}
		};

		return (
			<div styleName="container" onMouseMove={this.listener.bind(this)} >
				<div ref="strikes">
					<Strikes parallax={parallax} x={x} y={y}/>
				</div>
				<div styleName="content">
					<div style={ parallax(x/10*-1,y/10*-1) }>
						<div styleName="title" ref="title">
							Video Games
						</div>
						<div styleName="desc" ref="desc">
							How it evolves and change through time,<br/>
							Shaping our world and imagination along the way
						</div>
						<div styleName="explore" ref='explore'>
							<Button text="EXPLORE" to="interim"/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default CSSModules(Home, styles);