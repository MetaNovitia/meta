import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Home.css';
import './backcolors.css';

export default class Home extends Component {

    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.clicked = this.clicked.bind(this);
        this.back = this.back.bind(this);
        this.url = "url('home.jpg')";


        
        this.x = window.innerWidth || 
            document.documentElement.clientWidth || 
            document.getElementsByTagName('body')[0].clientWidth;
        

        this.y = window.innerHeight || 
            document.documentElement.clientHeight || 
            document.getElementsByTagName('body')[0].clientHeight;
        

        this.imgx = this.y*1600/1047;
        this.imgy = this.x/1600*1047;

        if(this.imgx<this.x){
            this.imgx=this.x
        }
        if(this.imgy<this.y){
            this.imgy=this.y
        }

        this.screeny = window.screen.height
        this.screenx = window.screen.width

        this.state = {
            family: 0,
            color:"black",
            colorb:"transparent"
        };

        
        this.fonts = [
            'historial',
            'sunshine',
            'fire',
            'pinch',
            'revenant',
            'scared'
        ];
        window.onresize = this.toggle
        


    }

    toggle() {


        this.url = "url('home.jpg')";

        this.x = window.innerWidth || 
            document.documentElement.clientWidth || 
            document.getElementsByTagName('body')[0].clientWidth;

        this.y = window.innerHeight || 
            document.documentElement.clientHeight || 
            document.getElementsByTagName('body')[0].clientHeight;

        this.imgx = this.y*1600/1047;
        this.imgy = this.x/1600*1047;

        if(this.imgx<this.x){
            this.imgx=this.x
        }
        if(this.imgy<this.y){
            this.imgy=this.y
        }

        this.setState({
            color: 'black',
            colorb: 'transparent',
            family: 0
        });
    }

    clicked(){
        this.url = '';

        var x = 140;        // brightness
        var c = 20;         // saturation
        var y = 255-x-c;
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

        this.setState({
            family: Math.floor(Math.random()*this.fonts.length),
            color:  "rgb("+
                        color[0].toString()+","+
                        color[1].toString()+","+
                        color[2].toString()+
                    ")",
            colorb:"transparent"
        });
    }

    back(){
        this.url = '';

        var x = 140;        // brightness
        var c = 20;         // saturation
        var y = 255-x-c;
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

        this.setState({
            family: Math.floor(Math.random()*this.fonts.length),
            colorb:  "rgb("+
                        color[0].toString()+","+
                        color[1].toString()+","+
                        color[2].toString()+
                    ")",
            color:"black"
        });
    }



    render() {
        return (
            <Container 
                    fluid 
                    className="home center"
                    style={{
                        height: (this.y).toString() + "px",
                        backgroundColor: this.state.colorb,
                        backgroundImage: this.url,
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "fixed",
                        backgroundPosition: "center",
                        backgroundSize: (this.imgx).toString() + "px "+ (this.imgy).toString() + "px"
                    }}
            >
                <NavBar open="home"></NavBar>
                <Row    className="title center"
                        onClick={this.clicked}
                        style={{
                            marginTop: (this.y/2-56-(this.y+this.x)/15).toString() + "px",
                            fontFamily: this.fonts[this.state.family],
                            height: ((this.y+this.x)/15).toString() + "px",
                            fontSize: ((this.y+this.x)/15).toString() + "px",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            color: this.state.color
                        }}
                >Meta Novitia</Row>
                <Row    className="subtitle center"
                        onClick={this.back}
                        style={{
                            marginBottom: (this.y/2-(this.y+this.x)/80).toString() + "px",
                            fontFamily: this.fonts[this.state.family],
                            height: ((this.y+this.x)/80).toString() + "px",
                            fontSize: ((this.y+this.x)/80).toString() + "px",
                            color: this.state.color
                        }}
                >Computer Science and Engineering - UC Irvine</Row>
                <Footer></Footer>
            </Container>
        );
    }
}