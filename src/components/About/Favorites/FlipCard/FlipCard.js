import React, { Component } from 'react';
import { Row } from 'reactstrap';
import './FlipCard.css';
import getPastel from '../../../getPastel';

export default class Favorites extends Component {

    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.q = props.q;
        this.a = props.a;

        this.state={
            family: false
        }

        var color = getPastel();
        var d = 60;

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
                                // height: (this.y/6).toString()+"px",
                                height: "20vh",
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