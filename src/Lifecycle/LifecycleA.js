import React, { Component } from 'react'

 class LifecycleA extends Component {

//1. constructor method

constructor() {
    super()// used to call the constructor of its parent class
    this.state = {
        name:"bindhu"
}
    
    console.log("LifecycleA - constructor");
}
//2.

static getDerivedStateFromProps(props, state){
    console.log('LifecycleA getDerivedStateFromProps');
    return null;
}
//4.
componentDidMount(){
    console.log('LifecycleA componentDidMount')
}
//3.
  render() {
      console.log('LifecycleA')
    return (
      <h1>LifecycleA</h1>
    )
  }
}

export default LifecycleA