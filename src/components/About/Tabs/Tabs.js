import React, {Component} from 'react';
import { Button, Col, TabContent, TabPane} from 'reactstrap';
import "./Tabs.css";

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.switch = false;

    this.toggle = this.toggle.bind(this);
    this.topic = props.topics
    this.topics = [];
    this.items = props.items;
    this.state = {
      activeTab: 1
    };

    

    this.c = "slides";
    if(window.mobilecheck()){
      this.c = "";
    }

    for(var i=0; i<this.topic.length; i++){
        var cname = "topicbtn";
        if(i===this.state.activeTab){
          cname = "opn";
        }
        this.topics.push(
          <Button key = {i}
                  id = {i}
                  onClick = {this.toggle}
                  className={cname}>
          {this.topic[i]}
          </Button>
        );
    }

    this.tabPanes = [];
    for(i=0; i<this.topics.length; i++){
        this.tabPanes.push(
            <TabPane key={i} tabId={i}>
                {this.items[i]}
            </TabPane>
        );
    }
    

  }

  toggle(e) {
    var tab = e.target.id;
    var tb = parseInt(tab,10);
    if(tb<99){
      this.topics[this.state.activeTab]=
        <Button key = {this.state.activeTab}
                id = {this.state.activeTab}
                onClick = {this.toggle}
                className="topicbtn">
        {this.topic[this.state.activeTab]}
        </Button>;
      this.topics[tab]=
        <Button key = {tb*100}
                id = {tb*100}
                onClick = {this.toggle}
                className="opn">
        {this.topic[tab]}
        </Button>;
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tb
        });
      }
    }
  }

  render() {
    if(this.switch){
      return null;
    }
    return (
      <Col className={this.c}>
        <div>{this.topics}</div>
        <div><br/><br/></div>
        <TabContent activeTab={this.state.activeTab}>
            {this.tabPanes}
        </TabContent>
      </Col>
    );
  }
}