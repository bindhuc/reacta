import React, { Component } from 'react'

 class Constructor extends Component {
  
  constructor(){
      super();
this.state = {
    name: "constructor method"
}
  }
  
  handleClick(){
      console.log("heyy",this);
  }
  
  
    render() {
    return (
      <div>Constructor{this.state.name}

<button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default Constructor