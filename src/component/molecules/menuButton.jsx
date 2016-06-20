import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/molecules/menuButton.css";

class MenuButton extends React.Component {
	componentDidMount() {
		let tlLine1 = new TimelineMax({repeat: -1});
		let tlLine2 = new TimelineMax({repeat: -1});
		let tlLine3 = new TimelineMax({repeat: -1});
		let {line1, line2, line3} = this.refs;

		tlLine1.to(line1, 1, {width: '0.5rem'})
			.to(line1, 1, {width: '5rem'});

		tlLine2.to(line2, 1, {width: '0.5rem'})
			.to(line1, 1, {width: '5rem'});

		tlLine3.to(line3, 1, {width: '0.5rem'})
			.to(line1, 1, {width: '5rem'})
	}

	render() {
		return (
			<div styleName="container" onClick={this.props.menuOn}>
				<div styleName="lines" ref="line1"></div>
				<div styleName="lines" ref="line2"></div>
				<div styleName="lines" ref="line3"></div>
			</div>
		)
	}
}

export default CSSModules(MenuButton, styles)