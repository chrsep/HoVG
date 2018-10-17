import React, { PureComponent } from "react"
import styles from "../../styles/molecules/menu.pcss"
import MenuItem from "../atom/menuItem.js"
import {TimelineMax} from "gsap/TimelineMax";
import TweenMax from "gsap/TweenMax";

class Menu extends PureComponent {
  componentDidMount() {
    let animIn = new TimelineMax()
    let { menu1, menu2, menu3, menu4, container } = this.refs
    TweenMax.from(container, 0.3, { opacity: 0 })
    animIn
      .from(menu1, 0.6, { x: -460 }, 0.1)
      .from(menu2, 0.6, { x: -460 }, 0.2)
      .from(menu3, 0.6, { x: -460 }, 0.3)
      .from(menu4, 0.6, { x: -460 }, 0.4)
  }

  componentWillLeave(callback) {
    let animIn = new TimelineMax({ onComplete: callback })
    let { menu1, menu2, menu3, menu4, container } = this.refs
    TweenMax.to(container, 0.3, { opacity: 0 })
    animIn
      .to(menu1, 0.6, { x: -460, width: 0 }, 0.1)
      .to(menu2, 0.6, { x: -460, width: 0 }, 0.2)
      .to(menu3, 0.6, { x: -460, width: 0 }, 0.3)
      .to(menu4, 0.6, { x: -460, width: 0 }, 0.4)
  }

  render() {
    let menus = [
      {
        text: "Inception",
        year: "1947 - 1975",
        key: "menu1",
        to: "/first",
        delay: 1
      },
      {
        text: "Popularisation",
        year: "1976-1991",
        key: "menu2",
        to: "/second",
        delay: 1
      },
      {
        text: "Mainstream",
        year: "1992 - 1996",
        key: "menu3",
        to: "/third",
        delay: 1
      },
      {
        text: "Disruption",
        year: "1997 onward",
        key: "menu4",
        to: "/fourth",
        delay: 1
      }
    ]
    return (
      <div ref="container" className={styles.container}>
        {menus.map(props => {
          return (
            <div
              className={styles.menu}
              ref={props.key}
              onClick={
                this.props.pathname !== "/interim"
                  ? this.props.menuOff
                  : this.props.menuOn
              }
            >
              <MenuItem
                text={props.text}
                key={props.key}
                delay={props.delay}
                year={props.year}
                to={props.to}
              />
            </div>
          )
        })}
        <div className={styles.attribution}>
          <img src="asset/ic_info_outline_white_24px.svg" alt="" />
        </div>
        <div className={styles["attribution-box"]}>
          Music by <br />
          <a href="http://chriszabriskie.com/cylinders/">
            Chris Zabriskie - CylinderFive
          </a>
          <br />
          <a href="https://soundcloud.com/atn010g">Atn010 - Dawn of Machines</a>
          <br />
          <a href="https://soundcloud.com/atn010g">Atn010 - BitBeat</a>
          <br />
          <a href="https://soundcloud.com/dividebyzer0/quazar-axel-hedfors-funky-ltars-hybrid-longhex-2014-remix">
            Quazar - Funky Star
          </a>
          <br />
          <a href="https://www.youtube.com/watch?v=tiL7qj0eE48">
            Audionautix - Act Three
          </a>
          <br />
        </div>
      </div>
    )
  }
}

export default Menu
