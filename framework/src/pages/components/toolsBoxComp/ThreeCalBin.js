import React, {useState} from 'react';

function ThreeCal() {
    const [val, setVal] = useState(0);

    return (  
      <div>
        <header style={{textAlign:"center"}}>
        <h2>Bin: {val}</h2>
        <h2>Dec: {parseInt(val, 2)}</h2>
        <h2>Hex: {parseInt(val, 2).toString(16).toUpperCase()}</h2>

        <input type="text" onChange={ (e) => setVal(e.target.value)}/>
        </header>
      </div>
    );
}
  
export default ThreeCal;