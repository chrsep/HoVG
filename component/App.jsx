import React from 'react'
import CSSModules from 'react-css-modules'
import TransitionGroup from 'react-addons-transition-group'
import styles from '../styles/app.css'


class App extends React.Component{
    render(){
        return(
            <TransitionGroup component="div" styleName="container">
                {React.cloneElement(this.props.children, {
                    key: this.props.location.pathname
                })}
            </TransitionGroup>
        )
    }
}

export default CSSModules(App, styles)