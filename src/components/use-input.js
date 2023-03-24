import {useState} from 'react';

const useInput=(validatevalue)=>{
 const [value,setenterdvalue]=useState('');
  const [checkvalidity,setvalidity]=useState(false);
  const [istouched,setistouched]=useState(false);

  const enterdvalueisvalid=validatevalue(value);
const haserror=!enterdvalueisvalid&&istouched;

const inputChangeHandler=(event)=>{
    setenterdvalue(event.target.value);
};
const inputblurHandler=(event)=>{
    setistouched(true);
};
const reset=()=>{
    setistouched(false); 
    setvalidity(false);
}
return {
    value:value,
    Isvalid:enterdvalueisvalid,
    haserror:checkvalidity,
    inputChangeHandler,
    inputblurHandler,
    reset,
}
};
export default useInput;