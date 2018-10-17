import React, { PureComponent } from "react"
import styles from "../../styles/molecules/menuButton.pcss"
import {TimelineMax} from "gsap/TimelineMax";

class MenuButton extends PureComponent {
  componentDidMount() {
    let tlLine1 = new TimelineMax({ repeat: -1 })
    let tlLine2 = new TimelineMax({ repeat: -1 })
    let tlLine3 = new TimelineMax({ repeat: -1 })
    let { line1, line2, line3 } = this.refs
    tlLine1.to(line1, 1, { width: "0.5rem" }).to(line1, 1, { width: "5rem" })
    tlLine2.to(line2, 1, { width: "0.5rem" }).to(line1, 1, { width: "5rem" })
    tlLine3.to(line3, 1, { width: "0.5rem" }).to(line1, 1, { width: "5rem" })
  }

  render() {
    return (
      <div className={styles.container} onClick={this.props.menuOn}>
        <div className={styles.lines} ref="line1" />
        <div className={styles.lines} ref="line2" />
        <div className={styles.lines} ref="line3" />
      </div>
    )
  }
}

export default MenuButton
