import React, { Component } from 'react';
import {Container} from 'reactstrap';
import './Favorites.css';
import FlipCard from "./FlipCard/FlipCard";

export default class Favorites extends Component {

    constructor(props){
        super(props);

        this.favs = props.favs;

        this.x = window.innerWidth || 
            document.documentElement.clientWidth || 
            document.getElementsByTagName('body')[0].clientWidth;
        

        this.y = window.innerHeight || 
            document.documentElement.clientHeight || 
            document.getElementsByTagName('body')[0].clientHeight;
        
    }



    render() {

        this.cards = [];
        for(var i=0; i<this.favs.length; i++){
            this.cards.push(
                <FlipCard q={this.favs[i][2]} a={this.favs[i][1]} key={i}/>
            )
        }

        return (
            <Container fluid>
                {this.cards}
            </Container>
        );
    }
}