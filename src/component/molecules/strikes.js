import React, { PureComponent } from "react"
import Strike from "../atom/Strike.js"
import styles from "../../styles/molecules/strikes.pcss"

class Strikes extends PureComponent {
  render() {
    let delays = [
      [8, 2, 20.5, 14, 21],
      [13, 5.2, 10, 6.5, 4.8],
      [11, 12, 9.3, 1, 19],
      [16.7, 7, 15, 3, 18]
    ]
    let produceStrikes = data =>
      data.map(item => <Strike delay={item} key={item} />)
    return (
      <div className={styles.strikes} ref="strikes">
        <div
          style={this.props.parallax(
            (this.props.x / 40) * -1,
            (this.props.y / 40) * -1
          )}
        >
          {produceStrikes(delays[0])}
        </div>
        <div
          style={this.props.parallax(
            (this.props.x / 30) * -1,
            (this.props.y / 30) * -1
          )}
        >
          {produceStrikes(delays[1])}
        </div>
        <div
          style={this.props.parallax(
            (this.props.x / 20) * -1,
            (this.props.y / 20) * -1
          )}
        >
          {produceStrikes(delays[2])}
        </div>
        <div
          style={this.props.parallax(
            (this.props.x / 15) * -1,
            (this.props.y / 15) * -1
          )}
        >
          {produceStrikes(delays[3])}
        </div>
      </div>
    )
  }
}

export default Strikes
