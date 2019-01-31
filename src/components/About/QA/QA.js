import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Answer from './Answer/Answer';
import Answer2 from './Answer2/Answer2';
import "./QA.css"

export default class QA extends Component{

    constructor(props){
        super(props);
        this.qa = props.qa;
        this.bars = []
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: true };

        for(var i=0; i<this.qa.length; i++){
            var q = this.qa[i][2].split(";");
            var a = this.qa[i][1].split(";");

            if(this.qa[i][0]==="QA2"){
                a[0] = a[0].split("/")
                this.bars.push(
                    <Answer2 q={q} a={a} key={i} k={i}/>
                );
            }else{
                this.bars.push(
                    <Answer q={q} a={a} key={i}/>
                );
            }


            

        }
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
      }

    render(){

        return(

            <Container>

                {this.bars}

            </Container>
        );
    }

}