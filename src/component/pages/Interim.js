import React from "react";
import CSSModules from "react-css-modules";
import styles from "../../styles/pages/interim.pcss";
import {PureComponent} from "react/lib/ReactBaseClasses";

class Interim extends PureComponent {
  componentDidMount() {
    this.props.menuOn();
  }
  componentWillUnmount() {
    this.props.menuOff();
  }
  render() {
    return (
        <div styleName="container"/>
    )
  }
}

export default CSSModules(Interim, styles);