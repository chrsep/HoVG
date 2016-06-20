import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/molecules/bottomSheet.css";

class BottomSheet extends React.Component {
	componentDidUpdate(prevProps, prevState, prevContext) {
		if (prevProps.data !== this.props.data) {
			TweenMax.to(this.refs.container, 0.5, {transform: 'translateY(0)'})
		}
	}

	close(){
		TweenMax.to(this.refs.container, 0.5, {transform: 'translateY(100vh)'})
	}

	render() {

		return (
			<div styleName="container" ref="container">
				<div styleName="close" onClick={this.close.bind(this)}>
					<img src="asset/ic_close_white_24px.svg" alt=""/>
				</div>
				<div styleName="image">
					<img src={this.props.data[0].Image} alt="" style={{height:'100vh'}}/>
				</div>
				<div styleName="content">
					<div styleName="title">
						{this.props.data[0].Name}
						<span styleName="year">
							{this.props.data[0].Year} - {this.props.data[0].Type}
						</span>
					</div>
					<div styleName="description">
						{this.props.data[0].LongDesc}
					</div>
				</div>
			</div>
		)
		
	}
}

export default CSSModules(BottomSheet, styles)