import React, { useState, useRef, useEffect } from 'react'

import useInput from './use-input'

const SimpleInput = (props) => {
 
 
 
  const {
    value: name,
    haserror: checkvalidity,
    inputChangeHandler: setnameHandler,
    inputblurHandler: blurhandler,
  } = useInput(value=>value.trim()!='');/* using costom hook to get the validation  */


const{
value:email,
isvalid:enteredemailvalid,
haserror:emailInputHaserror,
inputChangeHandler:emailChangeHandler,
inputblurHandler:emailblurHandler,
reset:resetEmailinput,

}=useInput(value=>value.includes('@'));


  const nameref = useRef();
  // const [name, setname] = useState('');
  // const [checkvalidity, setvalidity] = useState(false);
  // const [istouched, setistouched] = useState(false);
  const [isformvalid, setformvalid] = useState(false);


  useEffect(() => {
    if (checkvalidity) {
      setformvalid(true)
    } else {
      setformvalid(false)
    }
  }, [checkvalidity])



  // const setnameHandler = (event) => {
  //   setname(event.target.value)
  // }



  const submitHandler = (event) => {
    event.preventDefault()
    setname(event.target.value)
    setistouched(true)

    if (event.target.value.trim().length === 0) {
      setvalidity(false)
    }
    setvalidity(true)
    setname('')

    const refname = nameref.current.value;
    resetEmailinput();
  }



  const onblurHandler = (event) => {
    setistouched(true)
    if (name.trim().length === 0) {
      setvalidity(false)
    }
  }



  const mergeclasses = checkvalidity
    ? 'form-control'
    : 'form-control  invalid' /* using more classes based on condition */

const emailinputclasses=emailInputHaserror?'form-valid':'form-valid invalid';

  return (
    <form onSubmit={submitHandler}>
      <div className={mergeclasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          ref={nameref}
          id="name"
          onChange={setnameHandler}
          onblur={onblurHandler}
        />
      </div>



       <div className={mergeclasses}>
        <label htmlFor="name">email</label>
        <input
          type="text"
          ref={nameref}
          id="name"
          onChange={emailChangeHandler}
          onblur={emailblurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!isformvalid}>Submit</button>
      </div>
    </form>
  )


/* redux is a state management system for cross component or app wide state  */
}

export default SimpleInput
