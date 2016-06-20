import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/atom/image.css";

class CustomImage extends React.Component {
	componentDidMount() {
		let {container} = this.refs;
		TweenMax.from(container, 1, {scale: 0, TranslateY: '-12.5rem'});
	}

	handleClick() {
		if(this.props.data.Image !== "") {
			this.props.showBottomSheet([this.props.data]);
		}
	}

	render() {
		return (
			<div styleName="container" ref="container" style={this.props.data.Image === "" ? {cursor:'default'} : {}}>
				<div ref="image" styleName="background" style={{
					backgroundImage:'url('+this.props.data.Image+')',
					backgroundPosition: 'center',
					backgroundSize: 'cover'
					}}>
				</div>
				<div
					ref="content" styleName="content"
					onClick={this.handleClick.bind(this)}
					style={this.props.data.Image === "" ? {opacity:1, transform:'translateY(0)'} : {}}
				>
					<div styleName="title">{this.props.data.Name}</div>
					<div styleName="year">{this.props.data.Year} - {this.props.data.Type}</div>
					<div styleName="shortDesc">{this.props.data.ShortDesc}</div>
				</div>
			</div>
		)
	}
}

export default CSSModules(CustomImage, styles)