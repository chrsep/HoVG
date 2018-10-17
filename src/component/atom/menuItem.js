import React, { PureComponent } from "react"
import styles from "../../styles/atom/menuItem.pcss"
import { Link } from "react-router-dom"

class MenuItem extends PureComponent {
  render() {
    return (
      <Link
        className={styles.container}
        to={this.props.to}
        key={this.props.key + "-link"}
      >
        <div className={styles.text}>{this.props.text}</div>
        <div className={styles.year}>{this.props.year}</div>
      </Link>
    )
  }
}

export default MenuItem
