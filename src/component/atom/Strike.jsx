import React from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../styles/atom/strike.css'

class Strike extends React.Component{
    componentDidMount(){
        var line = this.refs.line;
        var tl = new TimelineMax({repeat:-1, repeatDelay:(this.props.delay*0.2), delay: (this.props.delay*1.5)});
        tl.to(line,10,{x:-800, ease: Linear.easeNone, width: 800})
            .to(line,10,{x:-1600, ease: Linear.easeNone, width: 0});
    }
    render(){
        return(
            <div styleName="container" style={this.props.movement} ref="line" ></div>
        )
    }
}

export default CSSModules(Strike, styles)