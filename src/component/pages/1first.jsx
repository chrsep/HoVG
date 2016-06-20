import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/pages/1first.css";
import CustomImage from "../atom/customImage.jsx";
import datas from "../../data.jsx";

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
		let {container} = this.refs;
		this.scrollLocation += e.deltaY < 0 ? 100 : -100;
		if (this.scrollLocation > 0) {
			this.scrollLocation = 0;
		}
		if (this.scrollLocation < ((container.offsetWidth / 2) * Math.ceil(datas.length / 2) - window.innerWidth) * -1) {
			this.scrollLocation = ((container.offsetWidth / 2) * Math.ceil(datas.length / 2) - window.innerWidth) * -1;
		}
		console.log('scroll' + this.scrollLocation);
		console.log('offsetWidth' + container.offsetWidth);
		console.log('innerWidth' + window.innerWidth);

		let firstLayer = document.getElementsByClassName('firstLayer');
		let firstLayerElement;
		for (firstLayerElement of firstLayer) {
			TweenMax.to(firstLayerElement, 1, {x: this.scrollLocation});
		}
	}

	componentWillLeave(callback) {
		callback();
		// let {title, desc, explore, strikes} = this.refs;
		// let animOut = new TimelineMax({onComplete: callback});
		// animOut.to(title, 0.7, {y: '-=50', opacity: 0})
		// 	.to(desc, 0.7, {y: '-=50', opacity: 0}, 0.4)
		// 	.to(explore, 0.7, {y: '-=25', opacity: 0}, 0.8)
		// 	.to(strikes, 0.7, {opacity: 0});
	}

	render() {
		return (
			<div styleName="container" ref="container" onWheel={this.handleScroll.bind(this)}>
				<div styleName="intro">
					<div ref="quoteOne">One Two doesnt matter when there is three</div>
					<div ref="quoteTwo">-Alan Turing</div>
				</div>
				<div styleName="column" className="firstLayer">
					{datas.map(data => {
						return (
							<div styleName="content">
								<CustomImage
									data={data}
								/>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default CSSModules(First, styles)

