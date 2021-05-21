import { useState } from "react";

const useForm = (init = {}) => {

  const [values, setFormState] = useState(init);

  const reset=()=>{
    for(let key in init) { init[key]=''}
    setFormState(init)
  }
  const handleInputChange = ( e ) => {
    setFormState({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  return [values,handleInputChange,reset];
};

export default useForm;
