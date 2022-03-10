import React, {useState} from 'react';

function ThreeCal() {
    const [val, setVal] = useState(0);

    return (  
      <div>
        <header style={{textAlign:"center"}}>
        <h2>Dec: {val}</h2>
        <h2>Bin: {Number(val).toString(2)}</h2>
        <h2>Hex: {Number(val).toString(16)}</h2>

        <input type="text" onChange={ (e) => setVal(e.target.value)}/>
        </header>
      </div>
    );
}
  
export default ThreeCal;