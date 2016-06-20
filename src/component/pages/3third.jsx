import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/pages/3third.css";
import {Mainstream} from "../../data.jsx";
import CustomImage from "../atom/customImage.jsx";
let datas = Mainstream;

class Third extends React.Component {
	constructor(props) {
		super(props);
		this.scrollLocation = 0
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
	}

	render() {
		return (
			<div styleName="container" ref="container" onWheel={this.handleScroll.bind(this)}>
				<div styleName="column" className="firstLayer">
					{datas.map(data => {
						return (
							<div styleName="content">
								<CustomImage
									data={data}
									showBottomSheet={this.props.sendDataUp}
								/>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default CSSModules(Third, styles)