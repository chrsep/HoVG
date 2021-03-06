import React, { PureComponent } from "react"
import styles from "../../styles/pages/1first.pcss"
import CustomImage from "../atom/customImage.js"
import { inception } from "../../data.js"
import {TimelineLite} from "gsap/TimelineLite";
let datas = inception

class First extends PureComponent {
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
    let { content } = this.refs
    let { container } = this.refs
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
    console.log("scroll" + this.scrollLocation)
    console.log("offsetWidth" + container.offsetWidth)
    console.log("innerWidth" + window.innerWidth)

    TweenMax.to(content, 1, { x: this.scrollLocation })
  }

  componentWillLeave(callback) {
    TweenMax.to(this.refs.content, 1, {
      opacity: 0,
      transform: "translateX(-5rem)",
      onComplete: callback
    })
    // let {title, desc, explore, strikes} = this.refs;
    // let animOut = new TimelineMax({onComplete: callback});
    // animOut.to(title, 0.7, {y: '-=50', opacity: 0})
    // 	.to(desc, 0.7, {y: '-=50', opacity: 0}, 0.4)
    // 	.to(explore, 0.7, {y: '-=25', opacity: 0}, 0.8)
    // 	.to(strikes, 0.7, {opacity: 0});
  }

  render() {
    return (
      <div
        className={styles.container}
        ref="container"
        onWheel={this.handleScroll.bind(this)}
      >
        <div className={styles.intro}>
          <div ref="quoteOne">The beginning, a time of exploration</div>
          <div ref="quoteTwo">Ideas start taking shape</div>
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

export default First
