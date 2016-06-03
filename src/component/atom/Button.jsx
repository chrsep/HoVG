import React from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../styles/atom/button.css'
import {Link} from 'react-router'

class Button extends React.Component {
	componentDidMount() {
		TweenMax.set(this.refs.text, {letterSpacing: 0})
	}

	onEnter() {
		let {text, box} = this.refs;
		TweenLite.to(text, 0.25, {letterSpacing: '1rem', autoRound: false});
		TweenLite.to(box, 0.25, {opacity: 1, margin: '0 2.3rem', autoRound: false})
	}

	onLeave() {
		let {text, box} = this.refs;
		TweenLite.to(box, 0.25, {opacity: 0, margin: 0, autoRound: false, scaleX: 1, scaleY: 1});
		TweenLite.to(text, 0.25, {letterSpacing: 0, autoRound: false})
	}

	onDown() {
		let {box} = this.refs;
		TweenLite.to(box, 0.1, {scaleX: 1.5, scaleY: 1.4});
	}

	render() {
		return (
			<Link
				to={"/" + this.props.to}
				styleName="container"
				onMouseEnter={this.onEnter.bind(this)}
				onMouseLeave={this.onLeave.bind(this)}
				onMouseDown={this.onDown.bind(this)}>
				<div ref="box" styleName="box"></div>
				<span ref="text">{this.props.text}</span>
			</Link>
		)
	}
}

export default CSSModules(Button, styles)