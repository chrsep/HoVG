import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/atom/image.css";

class CustomImage extends React.Component {
	componentDidMount() {
		let {container} = this.refs;
		TweenMax.from(container, 1, {scale: 0, TranslateY: '-12.5rem'});
	}

	render() {
		return (
			<div styleName="container" ref="container" style={{
			backgroundImage:'url('+this.props.data.Image+')',
			backgroundPosition: 'center',
			backgroundSize: 'cover'
			}}>
				<div styleName="content">
					<div styleName="title">{this.props.data.Name}</div>
					<div styleName="year">{this.props.data.Year}</div>
					<div styleName="shortDesc">{this.props.data.ShortDesc}</div>
				</div>

				
			</div>
		)
	}
}

export default CSSModules(CustomImage , styles)