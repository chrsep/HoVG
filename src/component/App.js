import React from "react"
import { TransitionGroup } from "react-transition-group" // ES6
import style from "../styles/app.pcss"
import Menu from "./molecules/menu.js"
import MenuButton from "./molecules/menuButton.js"
import BottomSheet from "./molecules/bottomSheet.js"
import { withRouter } from "react-router-dom"

class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isMenuShown: false,
      isSoundOn: true,
      chosenData: [
        {
          Year: 1947,
          Month: "",
          Day: null,
          Type: "Software",
          Name: "Cathode-ray Tube Amusement Device",
          ShortDesc:
            "A patent that describe interactive electronic game that simulates artillery shell arching toward a target on a cathode ray tube screen",
          LongDesc:
            "in 1947, Thomas T. Goldsmith, Jr. and Estie Ray Mann constructed an analog electronics and filled a patent for cathode-ray tube amusement device. /nIf it was constructed, the device that consisted of cathode ray tube (CRT) and ossiloscope with a set of knobs and switches, The device is purely analogue, which does not use any digital computer, memory or execute any program. The is about  firing artillery shell to a target that is projected in the CRT screen. /nThe device was invented by physicists Thomas T. Goldsmith, Jr. and Estle Ray Mann. But due to notion of that time, the device was never used or manufactured beyond the original prototype.",
          "Additional Link 1": "https://www.youtube.com/watch?v=k_WUb-1C010",
          "Additional Link 2": "",
          Image:
            "https://upload.wikimedia.org/wikipedia/commons/2/2d/Cathode_ray_tube_amusement_device_-_schematic.jpg",
          "Reference Link 1":
            "https://en.wikipedia.org/wiki/Cathode-ray_tube_amusement_device",
          "Reference Link 2":
            "http://classicgames.about.com/od/classicvideogames101/p/CathodeDevice.htm",
          "": null
        }
      ]
    }
    this.shown = { transition: "all 0.5s", opacity: 1, zIndex: 2 }
    this.notShown = { transition: "all 0.5s", opacity: 0, zIndex: 1 }
  }

  componentDidMount() {
    this.sound = new Howl({
      urls: [this.chooseMusic()],
      loop: true
    }).fadeIn(1.0, 3000)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.location.pathname)
    if (
      prevProps.location.pathname === this.props.location.pathname ||
      this.props.location.pathname === "/interim"
    )
      return
    this.changeMusic(this.chooseMusic(false))
  }

  chooseMusic() {
    switch (this.props.location.pathname) {
      case "/interim":
      case "/":
        return "asset/CylinderFive.mp3"
      case "/first":
        return "asset/DawnofMachines.mp3"
      case "/second":
        return "asset/BitBeat.mp3"
      case "/third":
        return "asset/FunkyStar.mp3"
      case "/fourth":
        return "asset/ActThree.mp3"
    }
  }

  changeMusic(url) {
    const music = this.sound
    music.fadeOut(0.0, 2000)
    setTimeout(() => {
      music.urls([url])
      music.fadeIn(1.0, 3000)
    }, 3000)
  }

  menuOff() {
    this.setState({ isMenuShown: false })
  }

  menuOn() {
    this.setState({ isMenuShown: true })
  }

  mute() {
    Howler.mute()
    this.setState({ isSoundOn: false })
  }

  unmute() {
    Howler.unmute()
    this.setState({ isSoundOn: true })
  }

  changeChosenData(data) {
    this.setState({ chosenData: data })
  }

  render() {
    return (
      <div className={style.container}>
        <div
          style={{
            background:
              "linear-gradient(to bottom, rgba(28, 29, 33, 0.6) 0%,rgba(28, 29, 33, 0) 100%)",
            width: "100%",
            height: "8rem",
            position: "absolute",
            zIndex: 99
          }}
        >
          {this.props.location.pathname !== "/" &&
            !this.state.isMenuShown && (
              <MenuButton menuOn={this.menuOn.bind(this)} />
            )}
          <div className={style.audio}>
            <div
              className={style.soundIcon}
              onClick={this.mute.bind(this)}
              style={this.state.isSoundOn ? this.shown : this.notShown}
            >
              <img src="asset/ic_volume_up_white_24px.svg" alt="" />
            </div>
            <div
              className={style.soundIcon}
              onClick={this.unmute.bind(this)}
              style={this.state.isSoundOn ? this.notShown : this.shown}
            >
              <img src="asset/ic_volume_off_white_24px.svg" alt="" />
            </div>
          </div>
        </div>
        <TransitionGroup component="div">
          {this.state.isMenuShown ? (
            <Menu
              menuOn={this.menuOn.bind(this)}
              menuOff={this.menuOff.bind(this)}
              pathname={this.props.location.pathname}
            />
          ) : null}
        </TransitionGroup>
        <TransitionGroup
          component="div"
          className={
            this.state.isMenuShown
              ? style["container-with-menu"]
              : style.container
          }
        >
          {React.cloneElement(this.props.children, {
            key: this.props.history.location.pathname,
            menuOn: this.menuOn.bind(this),
            menuOff: this.menuOff.bind(this),
            isMenuShown: this.state.isMenuShown,
            sendDataUp: this.changeChosenData.bind(this)
          })}
        </TransitionGroup>
        <BottomSheet data={this.state.chosenData} />
      </div>
    )
  }
}

export default withRouter(App)
