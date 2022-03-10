import React, {useState} from 'react';

function ThreeCalHex() {
    const [val, setVal] = useState(0);

    return (  
      <div>
        <header style={{textAlign:"center"}}>
        <h2>Hex: {val}</h2>
        <h2>Dec: {(parseInt(val, 16).toString(2)).padStart(8, '0')}</h2>
        <h2>Bin: {parseInt(val, 16)}</h2>

        <input type="text" onChange={ (e) => setVal(e.target.value)}/>
        </header>
      </div>
    );
}
  
export default ThreeCalHex;