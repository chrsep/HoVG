import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/atom/strike.pcss";
import {PureComponent} from "react/lib/ReactBaseClasses";

class Strike extends PureComponent {
  componentDidMount() {
    const line = this.refs.line;
    const tl = new TimelineMax({repeat: -1, repeatDelay: (this.props.delay * 0.2), delay: (this.props.delay * 1.5)});
    tl.to(line, 10, {x: -800, ease: Linear.easeNone, width: 800})
        .to(line, 10, {x: -1600, ease: Linear.easeNone, width: 0});
  }

  render() {
    return (
        <div styleName="container" style={this.props.movement} ref="line"/>
    )
  }
}

export default CSSModules(Strike, styles)