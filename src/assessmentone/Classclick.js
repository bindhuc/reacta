import React, {useState} from 'react'

export default function Classclick() {

const [show, setShow] = useState(true)


function clickchange(){
  setShow(!show);
}


  return (

    <div >
     
      <button className='btn2' onClick={ clickchange}>To see styling in class component</button>
   {
  
  show  ?  <div className='bigbox2'> <h1 >This is created using class component</h1>
     <p style={{ fontSize:"20px"}}>This is done using external css</p> 
     <p style={{color: "red", fontSize:"20px"}}>This is done using inline css</p> </div> 
    : null
  
}

      
      
 

    </div>
  )
}



























// import React, { Component } from 'react'

// export class Classclick extends Component {
//   state = {
//     message: 'wfs'

//   }
  

//   clickHandler(){
    
//    this.setState({
    
//       message : 'ehdfb'
      
//     })
    
//   }
//   render() { 
//     return (
      

//       <div>
//         <h1 className='bigbox1' >{this.state.message}</h1>
//         <button className='btn2' onClick={this.clickHandler.bind(this)}>click class compo</button>
//       </div>
//     )
//   }
// }

// export default Classclick