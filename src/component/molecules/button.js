import React, { PureComponent } from "react"
import styles from "../../styles/molecules/button.pcss"
import { Link } from "react-router-dom"
import { TweenMax } from "gsap/TweenMax"
import { TweenLite } from "gsap/TweenLite"

class Button extends PureComponent {
  componentDidMount() {
    TweenMax.set(this.refs.text, { letterSpacing: 0 })
  }

  onEnter() {
    let { text, box } = this.refs
    TweenLite.to(text, 0.25, { letterSpacing: "1rem", autoRound: false })
    TweenLite.to(box, 0.25, {
      opacity: 1,
      margin: "0 2.3rem",
      autoRound: false
    })
  }

  onLeave() {
    let { text, box } = this.refs
    TweenLite.to(box, 0.25, {
      opacity: 0,
      margin: 0,
      autoRound: false,
      scaleX: 1,
      scaleY: 1
    })
    TweenLite.to(text, 0.25, { letterSpacing: 0, autoRound: false })
  }

  onDown() {
    let { box } = this.refs
    TweenLite.to(box, 0.1, { scaleX: 1.5, scaleY: 1.4 })
  }

  render() {
    return (
      <Link
        to={"/" + this.props.to}
        className={styles.container}
        onMouseEnter={this.onEnter.bind(this)}
        onMouseLeave={this.onLeave.bind(this)}
        onMouseDown={this.onDown.bind(this)}
      >
        <div ref="box" className={styles.box} />
        <span ref="text">{this.props.text}</span>
      </Link>
    )
  }
}

export default Button
