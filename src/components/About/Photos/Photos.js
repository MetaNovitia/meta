import React, { Component } from 'react';
import {Container, Col, Row} from 'reactstrap';
import './Photos.css';

export default class Photos extends Component {

    constructor(props){
        super(props);

        this.pics = [[],[],[]];

        var movs = [1,5,6];

        this.state = {
            t: false,
        };

        this.folder = "pics/me/";
        
        for(var i=0; i<7; i++){
            for(var j=0; j<3; j++){

                if (movs.indexOf(i*3+j) !== -1){
                    this.pics[j].push( 
                
                        <video  width="100%" height="auto" 
                                className="pc"
                                controls
                                key = {i*3+j}
                        >
                            <source src={this.folder + (i*3+j).toString() + ".mp4"}  type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    );
                }else{
                    this.pics[j].push( 
                
                        <img    className="pc"
                                src={this.folder + (i*3+j).toString() + ".jpg"} 
                                alt={(i*3+j).toString()} 
                                key={i*3+j}/> 
                        );
                }
                
            }
        }

        
    }



    render() {
        return (
            <Container 
                    fluid 
            >
                <Row>
                    <Col className="nomar">{this.pics[0]}</Col>
                    <Col className="nomar">{this.pics[1]}</Col>
                    <Col className="nomar">{this.pics[2]}</Col>
                </Row>
            </Container>
        );
    }
}