// import React, { useState } from 'react'

// export class Classclick extends Component {
    
//     constructor(props) {
//         super(props);
//         this. clickchange = this. clickchange.bind(this);
//         this.state = {isOff: false};
//       }
    
    
//      clickchange() {
//         this.setState({isOff:!this.state.isOff});
//       }
//   render() {
//   <div >
             
//               <button className='btn2' onClick={ clickchange}>To see styling in class component</button>
//            {
          
//           show  ?  <div className='bigbox2'> <h1 >This is created using class component</h1>
//              <p style={{ fontSize:"20px"}}>This is done using external css</p> 
//              <p style={{color: "red", fontSize:"20px"}}>This is done using inline css</p> </div> 
//             : null
          
//         }
//         </div>
//   }
    
    
       
    
            
      
//     )
//   }


// export default Class

// export default function Classclick() {

//     const [show, setShow] = useState(true)
    
    
//     function clickchange(){
//       setShow(!show);
//     }
    
    
//       return (
    
//         <div >
         
//           <button className='btn2' onClick={ clickchange}>To see styling in class component</button>
//        {
      
//       show  ?  <div className='bigbox2'> <h1 >This is created using class component</h1>
//          <p style={{ fontSize:"20px"}}>This is done using external css</p> 
//          <p style={{color: "red", fontSize:"20px"}}>This is done using inline css</p> </div> 
//         : null
      
//     }