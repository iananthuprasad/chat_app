import React, { useState } from 'react'
import { auth,provider } from "../firebase";
import { signInWithPopup } from 'firebase/auth';


const Sign = () => {
    const [value,setValue] = useState('')
    function signInWithGoogle(){
      signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        console.log("value=",value)
        localStorage.setItem("email=",data.user.email)
      })
    }

  return (
    <div>
      <button onClick={signInWithGoogle} className='sign'>sign in with google</button>
    </div>
  )
}

export default Sign
