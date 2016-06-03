import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/molecules/menu.css";
import MenuItem from "../atom/menuItem.jsx";

class Menu extends React.Component {
	componentDidMount() {
		let animIn = new TimelineMax();
		let {menu1,menu2,menu3,menu4} = this.refs;
		animIn.from(menu1, 1, {x: -460}, 0.1)
			.from(menu2, 1, {x: -460}, 0.3)
			.from(menu3, 1, {x: -460}, 0.6)
			.from(menu4, 1, {x: -460}, 0.9);
	}

	componentWillLeave(callback){
		let animIn = new TimelineMax({onComplete: callback});
		let {menu1,menu2,menu3,menu4} = this.refs;
		animIn.to(menu1, 1, {x: -460, width: 0}, 0.1)
			.to(menu2, 1, {x: -460, width: 0}, 0.3)
			.to(menu3, 1, {x: -460, width: 0}, 0.6)
			.to(menu4, 1, {x: -460, width: 0}, 0.9);
	}

	render() {
		let menus = [
			{text:'Dawn of the planet of the apes', key:'menu1', to:'first', delay: 1},
			{text:'Rise of the planet of the apes',key:'menu2', to:'second', delay: 1},
			{text:'Popularisation of the planet of the apes', key:'menu3', to:'third', delay: 1},
			{text:'Up and Coming of the planet of the apes', key:'menu4', to:'fourth', delay: 1}
		];
		return (
			<div styleName="container">
				{menus.map(props => {
					return (
						<div styleName="menu" ref={props.key}>
							<MenuItem text={props.text}
							          key={props.key}
							          delay={props.delay}
							          to={props.to}/>
						</div>
					)})}
			</div>
		)
	}
}

export default CSSModules(Menu, styles)