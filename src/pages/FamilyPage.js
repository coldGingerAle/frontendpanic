// ./src/pages/ThankYou.js
import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import {ModalExample} from '../components/ModalExample';
import {Family} from '../components/Family/Family';

class FamilyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      family: []
    }
  }
  componentDidMount() {
    fetch("http://localhost:8080/family/")
      .then(res => res.json())
      .then(data => this.setState({
        family: data
      }));
  }
  render() {
    const families = this.state.family.map(family => {
      return <Family family={family} />
    })
    return(
      <div>
        {families}
      </div>
    )
  }
}
export default withRouter(FamilyPage);
