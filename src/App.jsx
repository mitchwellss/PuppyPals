import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)
  
  const featuredPuppy = puppies.find((puppy) => puppy.id === featPupId)
  console.log(featuredPuppy)

  const something = featPupId && 'something'
    
  
  return (
    <div className='App'>
      {featPupId &&
        <div>
          <h2>{featuredPuppy.name} </h2>
          <p>{'id: '  + featuredPuppy.id}</p>
          <p>{'email: '  + featuredPuppy.email}</p>
         </div>
      } 
     
      {puppies.map((puppy) => {
        return (
          <p onClick={() => setFeatPupId(puppy.id)}
           key = {puppy.id}> {puppy.name}</p>
          
        ); 
      })}
      
    </div>
  );
}



// console.log(puppyList)
//   return (
//     <>
//       <div className='App'>
//         {
//           puppies.map((puppy) => {
//             return <p key={puppy.id}>{puppy.name}</p>
//           })
//         }
//       </div>
      
//     </>
//   )



// {/* <p onClick={} key = {puppy.Id}>{puppy.name}</p> */}



export default App

