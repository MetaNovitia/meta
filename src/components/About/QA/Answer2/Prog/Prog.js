import React, {Component} from 'react';
import {Row, Col, UncontrolledTooltip} from 'reactstrap';
import "./Prog.css";
import getPastel from "../../../../getPastel";

export default class Prog extends Component{

    constructor(props){
        super(props);
        this.sections = [];
        this.tooltips = [];
        for(var i=0; i<props.val.length; i++){

            var b="2";
            if(i===0){
                b = "0";
            }

            var x = props.val[i].split(":");
            var color = getPastel();
            color = "rgb("+color[0].toString()+","+color[1].toString()+","+color[2].toString()+")";
            this.sections.push(
                <Col
                        key = {"prog"+i+"_"+props.k}
                        id = {"prog"+i+"_"+props.k}
                        style={{
                            backgroundColor: color,
                            maxWidth: x[1]+"%",
                            borderLeft: b+"px solid white"
                        }}
                >
                </Col>
            );

            this.tooltips.push(
                    <UncontrolledTooltip
                        key = {"prog"+i+"_"+props.k}
                        placement="bottom" 
                        target={"prog"+i+"_"+props.k}>
                        {x[0]}
                    </UncontrolledTooltip>
            );
        }
    }

    render(){
        return(
            <div
                style={{
                    position: "absolute",
                    right: "0%",
                    left: "0%",
                    marginTop: "15px",
                    paddingBottom: "0px",
                    marginBottom: "0px",
                }}
            >
                <Row style={{
                    backgroundColor:this.props.right,
                    height:"10px",
                    borderRadius:"20px",
                    overflow:"hidden",
                    paddingBottom: "0px",
                    marginBottom: "0px"
                }}>
                {this.sections}
                {this.tooltips}
                </Row>
            </div>
        )
    }


}