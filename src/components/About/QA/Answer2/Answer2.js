import React, {Component} from 'react';
import {Collapse, Card, CardBody, Col, Row} from 'reactstrap';
import Prog from './Prog/Prog';
import "./Answer2.css"

export default class Answer2 extends Component{

    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false, ori:"down" };
        this.fontsize = "24px";
        if(window.mobilecheck()){
            this.fontsize = "16px";
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
                        >{this.props.q[0]}</Col>
                    </Row>
                    
                    <Prog   val={this.props.a[0]} 
                            left = {this.color}
                            right = {this.color2}
                            k = {this.props.k}
                            />

                    <Row>
                        <Col    className="qa ansbtn">
                        
                            <btn className={"triangle-"+this.state.ori}
                                onClick={this.toggle}/>
                        
                        </Col>
                    </Row>
                </div>
                <Collapse isOpen={this.state.collapse} 
                    style={{ marginTop:"10px"}}>
                    <Card style={{ backgroundColor: 'white', borderWidth: "0px"}}>
                        <CardBody>
                            {this.props.a[1]}
                        </CardBody>
                    </Card>
                    <div><br/></div>
                </Collapse>
            </div>
        );
    }

}