
import React , {useState} from 'react'


const Functionclick = () => {

  const [show, setShow] = useState(true)

  function clickchangefun(){
    setShow(!show);
  }
  
    return (
  
      <div  >
        
        <button className='btn1' onClick={ clickchangefun}>To see styling in functionalcomponent</button>
 {
    
    show  ?  <div className='bigbox1'> <h1 >This is created using functional component</h1>
       <p style={{fontSize: "20px"}}>This is done using external css</p> 
       <p style={{color: "red", fontSize:"20px"}}>This is done using inline css</p> </div> 
      : null
    
  } 
   
  </div>
  )
}

export default Functionclick














// import React from 'react'

// const Functionclick = () => {

// function clickHandler(){
   

   
// }

//   return (
//     <div >
      
        
//         <button className='btn1' onClick={clickHandler}>press</button>
//     </div>
//   )
// }

// export default Functionclick