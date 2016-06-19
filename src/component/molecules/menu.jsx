import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/molecules/menu.css";
import MenuItem from "../atom/menuItem.jsx";

class Menu extends React.Component {
	componentDidMount() {
		let animIn = new TimelineMax();
		let {menu1, menu2, menu3, menu4, container} = this.refs;
		TweenMax.from(container, 0.3, {opacity: 0});

		animIn.from(menu1, 0.6, {x: -460}, 0.1)
			.from(menu2, 0.6, {x: -460}, 0.2)
			.from(menu3, 0.6, {x: -460}, 0.3)
			.from(menu4, 0.6, {x: -460}, 0.4);
	}

	componentWillLeave(callback) {
		let animIn = new TimelineMax({onComplete: callback});
		let {menu1, menu2, menu3, menu4, container} = this.refs;
		TweenMax.to(container, 0.3, {opacity: 0});
		animIn.to(menu1, 0.6, {x: -460, width: 0}, 0.1)
			.to(menu2, 0.6, {x: -460, width: 0}, 0.2)
			.to(menu3, 0.6, {x: -460, width: 0}, 0.3)
			.to(menu4, 0.6, {x: -460, width: 0}, 0.4);
	}

	render() {
		let menus = [
			{text: 'Inception', year: '1945 - 1972', key: 'menu1', to: '/first', delay: 1},
			{text: 'Popularisation', year: '1972-1983', key: 'menu2', to: '/second', delay: 1},
			{text: 'Mainstream', year: '1984 - 1994', key: 'menu3', to: '/third', delay: 1},
			{text: 'Disruption', year: '1995 onward', key: 'menu4', to: '/fourth', delay: 1}
		];
		return (
			<div ref='container' styleName="container">
				{menus.map(props => {
					return (
						<div styleName="menu" 
						     ref={props.key} 
						     onClick={this.props.menuOff}>
							<MenuItem text={props.text}
							          key={props.key}
							          delay={props.delay}
							          year={props.year}
							          to={props.to}
							/>
						</div>
					)
				})}
			</div>
		)
	}
}

export default CSSModules(Menu, styles)