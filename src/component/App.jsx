import React from "react";
import CSSModules from "react-css-modules";
import TransitionGroup from "react-addons-transition-group";
import styles from "../styles/app.css";
import Menu from "./molecules/menu.jsx";

class App extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {isMenuShown: false, isSoundOn: true};
		this.shown = {transition: 'all 0.5s', opacity: 1, zIndex: 2};
		this.notShown = {transition: 'all 0.5s', opacity: 0, zIndex: 1};
	}

	componentDidMount() {
		this.sound = new Howl({
			urls: [this.chooseMusic()],
			loop: true
		}).fadeIn(1.0, 3000);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(this.props.location.pathname);
		if (prevProps.location.pathname === this.props.location.pathname ||
			this.props.location.pathname === '/interim') return;
		this.changeMusic(this.chooseMusic(false));
	}

	chooseMusic() {
		switch (this.props.location.pathname) {
			case '/interim':
			case '/':
				return 'asset/CylinderFive.mp3';
			case '/first':
				return 'asset/DawnofMachines.mp3';
			case '/second':
				return 'asset/BitBeat.mp3';
			case '/third':
				return 'asset/FunkyStar.mp3';
			case '/fourth':
				return 'asset/ActThree.mp3';
		}
	}

	changeMusic(url) {
		var music = this.sound;
		music.fadeOut(0.0, 2000);
		setTimeout(() => {
			music.urls([url]);
			music.fadeIn(1.0, 3000);
		}, 3000)
	}

	menuOff() {
		this.setState({isMenuShown: false})
	}

	menuOn() {
		this.setState({isMenuShown: true})
	}

	mute() {
		Howler.mute();
		this.setState({isSoundOn: false})
	}

	unmute() {
		Howler.unmute();
		this.setState({isSoundOn: true})
	}

	render() {
		return (
			<div styleName="container">
				<div styleName="audio">
					<div styleName="soundIcon" onClick={this.mute.bind(this)}
					     style={this.state.isSoundOn ? this.shown : this.notShown}>
						<img src="asset/ic_volume_up_white_24px.svg" alt=""/>
					</div>
					<div styleName="soundIcon" onClick={this.unmute.bind(this)}
					     style={this.state.isSoundOn ?  this.notShown : this.shown}>
						<img src="asset/ic_volume_off_white_24px.svg" alt=""/>
					</div>
				</div>
				<TransitionGroup component="div">
					{this.state.isMenuShown ?
						<Menu menuOn={this.menuOn.bind(this)} menuOff={this.menuOff.bind(this)}/> : null
					}
				</TransitionGroup>
				<TransitionGroup component="div"
				                 styleName={this.state.isMenuShown ? 'container-with-menu' : 'container'}>
					{React.cloneElement(this.props.children, {
						key: this.props.location.pathname,
						menuOn: this.menuOn.bind(this),
						menuOff: this.menuOff.bind(this),
						isMenuShown: this.state.isMenuShown
					})}
				</TransitionGroup>
			</div>
		)
	}
}

export default CSSModules(App, styles)