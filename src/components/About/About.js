import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Tabs from './Tabs/Tabs';
import Photos from './Photos/Photos';
import Favorites from './Favorites/Favorites';
import QA from './QA/QA';
import $ from 'jquery';
import back from './back.jpg';
import '../backcolors.css'
import './About.css';

export default class About extends Component {

    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.processData = this.processData.bind(this);
        this.favorites = [];
        this.qa = [];
        this.tabs = [];

        this.state = {
            family: false,
        };

        document.body.style.backgroundColor = "rgb(14, 14, 75)";
        // rgb(149, 191, 231)
        // rgb(14, 14, 75)
        
        this.x = window.innerWidth || 
            document.documentElement.clientWidth || 
            document.getElementsByTagName('body')[0].clientWidth;
        

        this.y = window.innerHeight || 
            document.documentElement.clientHeight || 
            document.getElementsByTagName('body')[0].clientHeight;

        window.onresize = this.toggle

        // this.tabs = <Tabs   items = {
        //             [<Photos />,
        //             <QA qa = {this.qa}/>,
        //             <Favorites favs = {this.favorites} />,
        //             <Row>4</Row>,
        //             <Row>5</Row>]
        //             } 
        //             topics={["Photos","Q&A","Favorites","RankLists","WordCloud"]}></Tabs>


        $.ajax({
            url: "about.csv",
            context: document.body,
        }).done(this.processData);

    }

    processData(data) {

        data = data.split('\n');


        for(var i=1; i<data.length; i++){
            var line = data[i].split(',');
            var temp = "";
            while(line.length>3){
                temp=','+line.pop()+temp;
            }
            line[2]+=temp;
            
            if(line[0]==="Favorite"){
                this.favorites.push(line);
            }else if(line[0]==="QA" || line[0]==="QA2"){
                this.qa.push(line);
            }
        }

        this.tabs = <Tabs   items = {
            [<Photos/>,
            <QA qa={this.qa}/>,
            <Favorites favs = {this.favorites} />,
            <Row>4</Row>,
            <Row>5</Row>]
            } 
            topics={["Photos","Q&A","Favorites","RankLists","WordCloud"]}></Tabs>

        this.toggle();
    }

    toggle() {

        this.x = window.innerWidth || 
            document.documentElement.clientWidth || 
            document.getElementsByTagName('body')[0].clientWidth;
        

        this.y = window.innerHeight || 
            document.documentElement.clientHeight || 
            document.getElementsByTagName('body')[0].clientHeight;

        this.setState({
            family: !this.state.family
        });
    }



    render() {
        return (
            <Container 
                    fluid 
                    className="parallax"
            >
                <img src={back} alt="back" className="parallax__layer parallax__layer--back"/>
                <div className="parallax__layer parallax__layer--base">
                    <NavBar open="home" f='gray'></NavBar>
                    <Row    className="garden center"
                            style={
                                {
                                    fontSize:((this.x)/1300*130).toString()+"px",
                                    overflow: "hidden",
                                    whiteSpace: "nowrap"
                                }
                            }
                    >------------ About Me ------------</Row>

                    <Row    className="center"
                    >
                        {this.tabs}
                    </Row>

                    <Row    className="garden center"
                            style={
                                {
                                    fontSize:((this.x)/1300*130).toString()+"px",
                                    overflow: "hidden",
                                    whiteSpace: "nowrap"
                                }
                            }
                    >-----------------------------</Row>
                    <Footer></Footer>
                </div>
            </Container>
        );
    }
}