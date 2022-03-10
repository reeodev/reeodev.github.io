import {Container, Row, Col, Button, Card } from "react-bootstrap";
import React, { useState, useEffect } from 'react';

import Layout from '@theme/Layout';

import Counter from './components/toolsBoxComp/Counter.js';
import Timer from './components/toolsBoxComp/Timer.js';
import ThreeCal from './components/toolsBoxComp/ThreeCal.js';
import ThreeCalBin from './components/toolsBoxComp/ThreeCalBin.js';
import ThreeCalHex from './components/toolsBoxComp/ThreeCalHex.js';
import BlankBox from './components/toolsBoxComp/BlankBox.js';
import './components/toolsBoxComp/box.css';

const toolsList = [
  {id:0, name:"Counter", components:<Counter/>},
  {id:1, name:"Timer", components:<Timer/>},
  {id:2, name:"Dec to Bin/Hex Cal", components:<ThreeCal/>},
  {id:3, name:"Bin to Dec/Hex Cal", components:<ThreeCalBin/>},
  {id:4, name:"Hex to Dec/Bin Cal", components:<ThreeCalHex/>},
  {id:5, name:"Blank Box", components:<BlankBox/>},
];

function ToolsDisplay (props){

  return props.num.map((v,i) =>
    <Col md={6} xl={3} key={"ToolBox" + i} className="rightBox">
        <Card>
          <h2>{toolsList[v].name} - {i}</h2>
          {toolsList[v].components}
          <br></br>
        </Card>
    </Col>
  );

}

function ToolsBoxPage() {

    const [toolsCount, setTools] = useState([]);

    function LeftButtonGen(){
      return toolsList.map((v,i) =>    
        <Row key={"ButtonSet" + i}>
          <Col md={8} sm={8}> <h2 className="leftSideWord">{v.name}</h2> </Col>    
          <Col md={1} sm={1}> <Button variant="outline-light" onClick={() => updateArray(true,i)}>+</Button> </Col>
          <Col md={1} sm={1}> <Button variant="outline-light" onClick={() => updateArray(false,i)}>-</Button> </Col>
          <Col md={2} sm={2}> </Col>   
        </Row>      
      );
    }

    function updateArray(cond, pol){
      let newArr =[...toolsCount];   

      if(cond){
        newArr.push(pol);
        return setTools(newArr);
      }
      else{
        for(let i = newArr.length - 1; i >= 0; i--){
          if(newArr[i] === pol){
            newArr.splice(i, 1);
            return setTools(newArr);
          }
        }

      }
             
    }

    // Initi localStore
    useEffect(() => {
      if(localStorage.getItem('componentSet') != null){
        setTools(JSON.parse(localStorage.getItem('componentSet')));
      }
      document.title = "Tools Box"

    }, []);

    useEffect(() => {
      localStorage.setItem('componentSet', JSON.stringify(toolsCount));
    });

    return (  
    <Layout>
      <Container fluid>
        <Row>

          <Col md={3} className="leftSide">  
            <h2>Tools:</h2>{<hr></hr>}
            <LeftButtonGen/>
            <Button variant="light" onClick={() => setTools([])}>Clear All</Button>{<hr></hr>}
          </Col>


          <Col md={9}>
            <Row>
              <ToolsDisplay num={toolsCount}/>
            </Row>
          </Col>    
          
        </Row>
        
      </Container>
      </Layout>
    );
}
  
export default ToolsBoxPage;