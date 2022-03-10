import React, { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';

function Timer({ id, value }) {
    const [time, setTime] = useState(0);
    const [conditons, setConditions] = useState(false);

    useEffect(() => {
        if(conditons){
            const timer = setInterval( () => { setTime(time + 1)} , 1000);
            return () => clearInterval(timer);
        }
    });

    return (  
      <div>
        <header style={{textAlign:"center"}}>
        <h1>{time}</h1>
        <Button variant="success" onClick={ () => setConditions(true) }>Run</Button>{' '}
        <Button variant="danger" onClick={ () => setConditions(false) }>Stop</Button>{' '}
        <Button variant="dark" onClick={ () => setTime(0) }>Clear</Button>{' '}

        </header>
      </div>
    );
}
  
export default Timer;