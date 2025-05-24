import React, { useRef, useState } from "react";

const Otp = () => {
  const [inp, setInp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);


  const validation = (e,i) => {
    const value = e.target.value;
    console.log(value);
    if (value === '' || /^[0-9]$/.test(value)) {
      const newInp = [...inp];
      newInp[i] = value;
      setInp(newInp);
      if (value && i < inputsRef.current.length - 1) {
        inputsRef.current[i + 1].focus();
      }
    } 

    
  };
  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace") {
      if (inp[i] === "" && i > 0) {
        inputsRef.current[i - 1].focus();
      }
    }
  };
  return (
    <>
      <form action="">
        {inp.map((e,i)=>{
          return  <input 
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          type="text" 
          maxLength={1} 
          onChange={(e) => validation(e, i)} 
          onKeyDown={(e) => handleKeyDown(e, i)}
          value={inp[i]} />
        })}
        <br /><br />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ml-40">
          Submit
        </button>
      </form>
    </>
  );
};

export default Otp;
