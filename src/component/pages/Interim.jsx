import React from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../styles/pages/interim.css'

class Interim extends React.Component{
    render(){
        return(
            <div>
                <div styleName="line"></div>
                <div styleName="line"></div>
                <div styleName="line"></div>
            </div>
        )
    }
}

export default CSSModules(Interim, styles);