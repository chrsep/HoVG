import React, { PureComponent } from "react"
import styles from "../../styles/pages/interim.pcss"

class Interim extends PureComponent {
  componentDidMount() {
    this.props.menuOn()
  }
  componentWillUnmount() {
    this.props.menuOff()
  }
  render() {
    return <div className={styles.container} />
  }
}

export default Interim
