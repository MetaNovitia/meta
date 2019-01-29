import React, { Component } from 'react';
import { Row } from 'reactstrap';
import './FlipCard.css';

export default class Favorites extends Component {

    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.q = props.q;
        this.a = props.a;

        this.state={
            family: false
        }

        var x = 140;        // brightness
        var c = 20;         // saturation
        var y = 255-x-c;
        var d = 60;
        var color = [x,x,x];

        var change = Math.floor(Math.random()*3);
        var other = 2;

        if (change===1){
            color[1]=x+20;
            if(Math.random()<0.5){
                color[0] = x+y;
            }else{
                color[2] = x+y;
            }
        }else{
            if (change===2){
                other = 0;
            }
            color[other] = x+y;
            color[change] = Math.floor(Math.random() * y) +x;
        }

        this.color = "rgb("+color[0].toString()+","+color[1].toString()+","+color[2].toString()+")";
        this.color2 = "rgb("+(color[0]-d).toString()+","+(color[1]-d).toString()+","+(color[2]-d).toString()+")";

        // window.onresize = this.toggle;

    }

    toggle(){
        this.setState({
            family: !this.state.family
        });
    }



    render() {


        this.x = window.innerWidth || 
            document.documentElement.clientWidth || 
            document.getElementsByTagName('body')[0].clientWidth;
        

        this.y = window.innerHeight || 
            document.documentElement.clientHeight || 
            document.getElementsByTagName('body')[0].clientHeight;

        return(
                <div 
                        className="flip-card"
                        style={
                            {
                                height: (this.y/6).toString()+"px",
                                width: "27%",
                                display: "inline-table"
                            }
                        }>
                    <div className="flip-card-inner">
                        <div    className="flip-card-front"
                                style={{
                                    backgroundColor: this.color,
                                    fontSize: (this.x/70).toString()+"px"
                                }}
                                onClick={this.toggle}
                        >
                            <Row className="rowflip">
                                {this.q}
                            </Row>
                        </div>
                        <div    className="flip-card-back"
                                style={{
                                    backgroundColor: this.color2,
                                    fontSize: (this.x/70).toString()+"px"
                                }}
                        >
                            <Row className="rowflip">
                                {this.a}
                            </Row>
                        </div>
                    </div>
                </div>
        );
    }
}