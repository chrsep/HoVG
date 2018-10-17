import React, { PureComponent } from "react"
import { Popularisation } from "../../data.js"
import CustomImage from "../atom/customImage.js"
import styles from "../../styles/pages/1first.pcss"
import {TimelineLite} from "gsap/TimelineLite";
import TweenMax from "gsap/TweenMax";

let datas = Popularisation

class Second extends PureComponent {
  constructor(props) {
    super(props)
    this.scrollLocation = 0
  }
  componentDidMount() {
    let { quoteOne, quoteTwo, content } = this.refs
    let animSequence = new TimelineLite({ delay: 2 })
    animSequence
      .from(quoteOne, 1, { opacity: 0 })
      .from(quoteTwo, 1, { opacity: 0 })
      .to(quoteOne, 2, { opacity: 0 })
      .to(quoteTwo, 2, { opacity: 0 })
      .to(content, 1, { opacity: 1, transform: "translateX(0)" })
  }

  handleScroll(e) {
    let { container, content } = this.refs
    this.scrollLocation += e.deltaY < 0 ? 100 : -100
    if (this.scrollLocation > 0) {
      this.scrollLocation = 0
    }
    if (
      this.scrollLocation <
      ((container.offsetWidth / 2) * Math.ceil(datas.length / 2) -
        window.innerWidth) *
        -1
    ) {
      this.scrollLocation =
        ((container.offsetWidth / 2) * Math.ceil(datas.length / 2) -
          window.innerWidth) *
        -1
    }

    TweenMax.to(content, 1, { x: this.scrollLocation })
  }

  componentWillLeave(callback) {
    TweenMax.to(this.refs.content, 1, {
      opacity: 0,
      transform: "translateX(-5rem)",
      onComplete: callback
    })
  }

  render() {
    return (
      <div
        className={styles.container}
        ref="container"
        onWheel={this.handleScroll.bind(this)}
      >
        <div className={styles.intro}>
          <div ref="quoteOne">The start of an Industry</div>
          <div ref="quoteTwo">A directed approach</div>
        </div>
        <div className={styles.column} ref="content">
          {datas.map(data => {
            return (
              <div className={styles.content}>
                <CustomImage
                  data={data}
                  showBottomSheet={this.props.sendDataUp}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Second
