import React, {Component} from 'react';
import {Collapse, Card, CardBody, Col, Row} from 'reactstrap';
import Prog from './Prog/Prog';
import "./Answer.css"
import getPastel from '../../../getPastel';

export default class Answer extends Component{

    constructor(props){

        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false, ori:"down" };
        var color = getPastel();
        this.colLeft = null;
        this.colRight = null;
        this.progress = null;
        this.question = props.q[0];
        this.answer = props.a[0];
        this.ansbtn = "";
        this.fontsize = "24px";
        if(window.mobilecheck()){
            this.fontsize = "16px";
        }

        this.color = "rgb("+color[0].toString()+","+color[1].toString()+","+color[2].toString()+")";
        this.color2= "white";

        if(parseInt(props.a[0])<50){
            this.left = {
                textAlign:"left",
                color: this.color,
                fontSize: "20px"
            }
            this.right = {
                textAlign:"right",
                color: this.color2
            }
            // this.color = "rgb("+color[0].toString()+","+color[1].toString()+","+color[2].toString()+")";
            // this.color2= "white";
        }else if(parseInt(props.a[0])>50){
            this.left = {
                textAlign:"left",
                color: this.color2
            }
            this.right = {
                textAlign:"right",
                color: this.color,
                fontSize: "20px"
            }
            // this.color2= "rgb("+color[0].toString()+","+color[1].toString()+","+color[2].toString()+")";
            // this.color = "white";
        }else{
            this.left = {
                textAlign:"left",
                color: this.color2
            }
            this.right = {
                textAlign:"right",
                color: this.color2
            }
            // this.color2= "rgb("+color[0].toString()+","+color[1].toString()+","+color[2].toString()+")";
            // this.color = "rgb("+(color[0]-50).toString()+","+(color[1]).toString()+","+(color[2]+50).toString()+")";
        }

        if(props.q.length>1){
            this.colLeft = <Col    className="qa" 
                                    style={this.left}
                            >{props.q[0]}</Col>

            this.colRight = <Col    className="qa" 
                                    style={this.right}
                            >{props.q[1]}</Col>
            this.question = props.q[2];
            this.answer = props.a[1];
            this.progress = <Prog   val={this.props.a[0]} 
                                    left = {this.color}
                                    right = {this.color2}
                            />
            this.ansbtn = "ansbtn";
        }

    }

    toggle() {
        if(this.state.ori==="down"){
            this.setState({ 
                collapse: !this.state.collapse ,
                ori: "up"
            });
        }else{
            this.setState({ 
                collapse: !this.state.collapse ,
                ori: "down"
            });
        }
      }

    render(){

        return(
            <div style={{
                backgroundColor:"rgba(55, 55, 55, 0.845)",
                paddingTop:"5%",
                paddingBottom:"1%",
                paddingLeft:"10%",
                paddingRight:"10%",
                marginBottom: "5%"
            }}>
                <div style={{position:"relative"}}>
                    <Row>
                        <Col style={{
                                    textAlign:"center", 
                                    color: "white",
                                    fontSize: this.fontsize
                                }}
                        >{this.question}</Col>
                    </Row>
                        
                        {this.progress}
                    
                    <Row>

                        {this.colLeft}

                        <Col    className={"qa "+this.ansbtn}>
                        
                            <btn className={"triangle-"+this.state.ori}
                                onClick={this.toggle}/>
                        
                        </Col>

                        {this.colRight}
                    </Row>
                </div>
                <Collapse isOpen={this.state.collapse} 
                    style={{ marginTop:"10px"}}>
                    <Card style={{ backgroundColor: 'white', borderWidth: "0px"}}>
                        <CardBody>
                            {this.answer}
                        </CardBody>
                    </Card>
                    <div><br/></div>
                </Collapse>
            </div>
        );
    }

}