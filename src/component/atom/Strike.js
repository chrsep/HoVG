import React, { PureComponent } from "react"
import styles from "../../styles/atom/strike.pcss"
import { TimelineMax } from "gsap/TimelineMax"

class Strike extends PureComponent {
  componentDidMount() {
    const line = this.refs.line
    const tl = new TimelineMax({
      repeat: -1,
      repeatDelay: this.props.delay * 0.2,
      delay: this.props.delay * 1.5
    })
    tl.to(line, 10, { x: -800, ease: Linear.easeNone, width: 800 }).to(
      line,
      10,
      { x: -1600, ease: Linear.easeNone, width: 0 }
    )
  }

  render() {
    return (
      <div
        className={styles.container}
        style={this.props.movement}
        ref="line"
      />
    )
  }
}

export default Strike
