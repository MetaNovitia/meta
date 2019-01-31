import React, {Component} from 'react';
import {Row, Col, Spinner} from 'reactstrap';
import "./Prog.css"

export default class Prog extends Component{

    constructor(props){
        super(props);
        this.spincolor = props.left;
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
                    <Col style={{
                    backgroundColor:this.props.left,
                    maxWidth:this.props.val+"%",
                }}></Col>
                </Row>
                <Spinner 
                    type="grow"
                    className="spinnerProg"
                    style={{
                        backgroundColor:this.spincolor,
                        position: "relative",
                        top: "-20px",
                        left: (parseInt(this.props.val)-50).toString()+"%",
                        height: "30px",
                        width: "30px"
                    }}
                />
            </div>
        )
    }


}