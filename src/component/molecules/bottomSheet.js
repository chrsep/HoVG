import React, { PureComponent } from "react"
import styles from "../../styles/molecules/bottomSheet.pcss"
import TweenMax from "gsap/TweenMax";

class BottomSheet extends PureComponent {
  componentDidUpdate(prevProps, prevState, prevContext) {
    if (prevProps.data !== this.props.data) {
      TweenMax.to(this.refs.container, 0.5, { transform: "translateY(0)" })
    }
  }

  close() {
    TweenMax.to(this.refs.container, 0.5, { transform: "translateY(100vh)" })
  }

  render() {
    return (
      <div className={styles.container} ref="container">
        <div className={styles.close} onClick={this.close.bind(this)}>
          <img src="asset/ic_close_white_24px.svg" alt="" />
        </div>
        <div className={styles.image}>
          <img
            src={this.props.data[0].Image}
            alt=""
            style={{ height: "100vh" }}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            {this.props.data[0].Name}
            <span className={styles.year}>
              {this.props.data[0].Year} - {this.props.data[0].Type}
            </span>
          </div>
          <div className={styles.description}>
            {this.props.data[0].LongDesc}
          </div>
        </div>
      </div>
    )
  }
}

export default BottomSheet
