import React from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../styles/pages/home.css'
import Strike from '../atom/Strike.jsx'
import Button from '../atom/Button.jsx'

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {x: 0, y: 0}
    }
    listener(e){
        var rootNode = document.querySelector('body');
        var {top, left} = rootNode.getBoundingClientRect();
        this.setState({
            x: e.clientX - 200 - left,
            y: e.clientY - 100 - top
        })
    }
    componentDidMount(){
        let {title, desc, explore} = this.refs;
        let animIn = new TimelineLite({delay:2});
        animIn.from(title,3.2,{y:'+=50', opacity:0})
          .from(desc,3,{y:'+=50', opacity:0})
          .from(explore,1,{y:'+=25', opacity:0});
    }
    componentWillLeave(callback){
        let {title, desc, explore, strikes} = this.refs;
        let animOut = new TimelineMax({onComplete:callback});
        animOut.to(title,0.7,{y:'-=50', opacity:0})
            .to(desc,0.7,{y:'-=50', opacity:0},0.4)
            .to(explore,0.7,{y:'-=25', opacity:0}, 0.8)
            .to(strikes,0.7,{opacity:0});
    }
    render(){
        let {x, y} = this.state;
        let parallax = (x,y) => {return {transform: `translate(${x}px, ${y}px)`}};

        let delays = [[8,2,20.5,14,21],[13,5.2,10,6.5,4.8],[11,12,9.3,1,19],[16.7,7,15,3,18]];
        let produceStrikes = (data) => {return(
            data.map(item => {
                return(<Strike delay={item} key={item}/>)
            })
        )};

        return(
            <div styleName="container" onMouseMove={this.listener.bind(this)}>
                <div styleName="strikes" ref="strikes">
                    <div style={ parallax(x/40*-1,y/40*-1) }> {produceStrikes(delays[0])} </div>
                    <div style={ parallax(x/30*-1,y/30*-1) }> {produceStrikes(delays[1])} </div>
                    <div style={ parallax(x/20*-1,y/20*-1) }> {produceStrikes(delays[2])} </div>
                    <div style={ parallax(x/15*-1,y/15*-1) }> {produceStrikes(delays[3])} </div>
                </div>
                <div styleName="content" >
                    <div style={ parallax(x/10*-1,y/10*-1) }>
                        <div styleName="title" ref="title" >
                            Video Games
                        </div>
                        <div styleName="desc" ref="desc">
                            How it evolves and change through time,<br/>
                            Shaping our world and imagination along the way
                        </div>
                        <div styleName="explore" ref='explore' >
                            <Button text="EXPLORE" to="interim"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(Home, styles);