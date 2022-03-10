import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { putDataStore } from '../../utilis/playFlowUtilis/localstoreUtilis';

function Counter({ id, value }) {
    const [count, setCount] = useState(value || 0);

    useEffect( () => {
      putDataStore(id, count)
    },[count])

    return (  
      <div style={{textAlign:"center"}}>

        <h1>{count}</h1>
        
        <Button variant="contained" onClick={() => setCount(count + 1)}>+ 1</Button>{' '}
        <Button variant="contained" onClick={() => setCount(count - 1)}>- 1</Button>{' '}
        <Button variant="outlined" onClick={() => setCount(0)}>SetZero</Button>

      </div>
    );
}
  
export default Counter;