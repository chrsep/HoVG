import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/atom/image.css";

class CustomImage extends React.Component {
	componentDidMount() {
		let {container} = this.refs;
		TweenMax.from(container, 1, {scale: 0, TranslateY: '-12.5rem'});
	}

	handleClick() {
		let {container, content, image} = this.refs;
		let expandTl = new TimelineMax();
		expandTl.to(content, 0.3, {opacity: 0, transform: 'translateY(-5rem)', ease: Linear.easeNone})
	}

	render() {
		return (
			<div styleName="container" ref="container">
				<div ref="image" styleName="background" style={{
					backgroundImage:'url('+this.props.data.Image+')',
					backgroundPosition: 'center',
					backgroundSize: 'cover'
					}}>
				</div>
				<div ref="content" styleName="content" onClick={this.handleClick.bind(this)}>
					<div styleName="title">{this.props.data.Name}</div>
					<div styleName="year">{this.props.data.Year}</div>
					<div styleName="shortDesc">{this.props.data.ShortDesc}</div>
				</div>
			</div>
		)
	}
}

export default CSSModules(CustomImage, styles)