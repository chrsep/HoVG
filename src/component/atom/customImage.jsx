import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/atom/image.css";

class CustomImage extends React.Component {
	componentDidMount() {
		let {container} = this.refs;

		TweenMax.from(container, 1, {scale: 0, TranslateY: '-12.5rem'})
	}

	render() {
		return (
			<div styleName="container" ref="container">
				<img src="../../../asset/cArticle1.jpg" alt="" styleName="image"/>
				<div styleName="background">sdfdfsdfsdf</div>
			</div>
		)
	}
}

export default CSSModules(CustomImage , styles)