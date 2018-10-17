import React, { PureComponent } from "react"
import styles from "../../styles/atom/image.pcss"

class CustomImage extends PureComponent {
  componentDidMount() {
    let { container } = this.refs
    TweenMax.from(container, 1, { scale: 0, TranslateY: "-12.5rem" })
  }

  handleClick() {
    if (this.props.data.Image !== "") {
      this.props.showBottomSheet([this.props.data])
    }
  }

  render() {
    return (
      <div
        className={styles.container}
        ref="container"
        style={this.props.data.Image === "" ? { cursor: "default" } : {}}
      >
        <div
          ref="image"
          className={styles.background}
          style={{
            backgroundImage: "url(" + this.props.data.Image + ")",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        />
        <div
          ref="content"
          className={styles.content}
          onClick={this.handleClick.bind(this)}
          style={
            this.props.data.Image === ""
              ? { opacity: 1, transform: "translateY(0)" }
              : {}
          }
        >
          <div className={styles.title}>{this.props.data.Name}</div>
          <div className={styles.year}>
            {this.props.data.Year} - {this.props.data.Type}
          </div>
          <div className={styles.shortDesc}>{this.props.data.ShortDesc}</div>
        </div>
      </div>
    )
  }
}

export default CustomImage
