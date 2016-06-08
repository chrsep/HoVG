import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/pages/1first.css";

class First extends React.Component {
	constructor(props) {
		super(props);
		this.scrollLocation = 0
	}

	componentDidMount() {
		let {quoteOne, quoteTwo} = this.refs;
		let animSequence = new TimelineLite({delay: 2});
		animSequence.from(quoteOne, 1, {opacity: 0})
			.from(quoteTwo, 1, {opacity: 0})
			.to(quoteOne, 1, {opacity: 0})
			.to(quoteTwo, 1, {opacity: 0})
	}


	handleScroll(e) {
		this.scrollLocation += e.deltaY < 0 ? 10 : -10;
		if (this.scrollLocation > 0) {
			this.scrollLocation = 0;
			return;
		}
		let firstLayer = document.getElementsByClassName('firstLayer');
		let secondLayer = document.getElementsByClassName('secondLayer');
		let firstLayerElement;
		for(firstLayerElement of firstLayer){
			TweenMax.to(firstLayerElement, 1, {x: this.scrollLocation});
		}

		let secondLayerElement;
		for(secondLayerElement of secondLayer){
			TweenMax.to(secondLayerElement, 1, {x: this.scrollLocation/ 0.5});
		}

		// TweenMax.to(this.refs.timeline2, 1, {x: (this.state.size / 0.4 ), backgroundColor: "red", y: 600});
		// TweenMax.to(this.refs.timeline3, 1, {x: (this.state.size / 0.6), backgroundColor: "black", y: 300});
		// TweenMax.to(this.refs.timeline4, 1, {x: (this.state.size / 1.21 ), backgroundColor: "purple", y: 100});
	}

	render() {
		return (
			<div styleName="container" onWheel={this.handleScroll.bind(this)}>
				<div styleName="intro">
					<div ref="quoteOne">One Two doesnt matter when there is three</div>
					<div ref="quoteTwo">-Alan Turing</div>
				</div>
				<div styleName="content-one">
					<div className="firstLayer" styleName="text">
						adfa
					</div>
					<div className="secondLayer" styleName="image-container">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="secondLayer" styleName="image-container">
						adfa
					</div>
					<div className="firstLayer" styleName="text">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="firstLayer" styleName="text">
						adfa
					</div>
					<div className="secondLayer" styleName="image-container">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="secondLayer" styleName="image-container">
						adfa
					</div>
					<div className="firstLayer" styleName="text">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="firstLayer" styleName="text">
						adfa
					</div>
					<div className="secondLayer" styleName="image-container">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="secondLayer" styleName="image-container">
						adfa
					</div>
					<div className="firstLayer" styleName="text">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="firstLayer" styleName="text">
						adfa
					</div>
					<div className="secondLayer" styleName="image-container">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="secondLayer" styleName="image-container">
						adfa
					</div>
					<div className="firstLayer" styleName="text">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="firstLayer" styleName="text">
						adfa
					</div>
					<div className="secondLayer" styleName="image-container">
						asdfasd
					</div>
				</div>
				<div styleName="intro">
					<div ref="quoteOne">One Two doesnt matter when there is three</div>
					<div ref="quoteTwo">-Alan Turing</div>
				</div>
				<div styleName="content-one">
					<div className="firstLayer" styleName="text">
						adfa
					</div>
					<div className="secondLayer" styleName="image-container">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="secondLayer" styleName="image-container">
						adfa
					</div>
					<div className="firstLayer" styleName="text">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="firstLayer" styleName="text">
						adfa
					</div>
					<div className="secondLayer" styleName="image-container">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="secondLayer" styleName="image-container">
						adfa
					</div>
					<div className="firstLayer" styleName="text">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="firstLayer" styleName="text">
						adfa
					</div>
					<div className="secondLayer" styleName="image-container">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="secondLayer" styleName="image-container">
						adfa
					</div>
					<div className="firstLayer" styleName="text">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="firstLayer" styleName="text">
						adfa
					</div>
					<div className="secondLayer" styleName="image-container">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="secondLayer" styleName="image-container">
						adfa
					</div>
					<div className="firstLayer" styleName="text">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="firstLayer" styleName="text">
						adfa
					</div>
					<div className="secondLayer" styleName="image-container">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="secondLayer" styleName="image-container">
						adfa
					</div>
					<div className="firstLayer" styleName="text">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="firstLayer" styleName="text">
						adfa
					</div>
					<div className="secondLayer" styleName="image-container">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="secondLayer" styleName="image-container">
						adfa
					</div>
					<div className="firstLayer" styleName="text">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="firstLayer" styleName="text">
						adfa
					</div>
					<div className="secondLayer" styleName="image-container">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="secondLayer" styleName="image-container">
						adfa
					</div>
					<div className="firstLayer" styleName="text">
						asdfasd
					</div>
				</div>
				<div styleName="content-one">
					<div className="firstLayer" styleName="text">
						adfa
					</div>
					<div className="secondLayer" styleName="image-container">
						asdfasd
					</div>
				</div>
			</div>
		)
	}
}

export default CSSModules(First, styles)