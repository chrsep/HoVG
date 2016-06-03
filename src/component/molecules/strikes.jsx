import React from "react";
import CSSModules from "react-css-modules";
import Strike from "../atom/strike.jsx";
import styles from "../../styles/molecules/strikes.css";

class Strikes extends React.Component {
	render() {
		let delays =
			[[8, 2, 20.5, 14, 21],
				[13, 5.2, 10, 6.5, 4.8],
				[11, 12, 9.3, 1, 19],
				[16.7, 7, 15, 3, 18]];
		let produceStrikes = (data) => {
			return (
				data.map(item => {
					return (<Strike delay={item} key={item}/>)
				})
			)
		};
		return (
			<div styleName="strikes" ref="strikes">
				<div
					style={ this.props.parallax(this.props.x/40*-1,this.props.y/40*-1) }> {produceStrikes(delays[0])} </div>
				<div
					style={ this.props.parallax(this.props.x/30*-1,this.props.y/30*-1) }> {produceStrikes(delays[1])} </div>
				<div
					style={ this.props.parallax(this.props.x/20*-1,this.props.y/20*-1) }> {produceStrikes(delays[2])} </div>
				<div
					style={ this.props.parallax(this.props.x/15*-1,this.props.y/15*-1) }> {produceStrikes(delays[3])} </div>
			</div>
		)
	}
}

export default CSSModules(Strikes, styles);