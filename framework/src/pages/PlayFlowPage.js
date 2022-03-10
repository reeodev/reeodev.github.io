import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import ReactFlow, { Controls, addEdge, Background, BackgroundVariant } from 'react-flow-renderer';
import { v4 as uuidv4 } from 'uuid';

import { setLocalStore } from './utilis/playFlowUtilis/localstoreUtilis'
import { initElements } from './utilis/playFlowUtilis/flowPageutilis';

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Fab from '@mui/material/Fab';

import AddIcon from '@mui/icons-material/Add';

// import Counter from './components/toolsBoxComp/Counter';
// import Timer from './components/toolsBoxComp/Timer';
// import ThreeCal from './components/toolsBoxComp/ThreeCal';
// import ThreeCalBin from './components/toolsBoxComp/ThreeCalBin';
// import ThreeCalHex from './components/toolsBoxComp/ThreeCalHex';

// const convertObject = {
//     "@@comp/counter" : <Counter/>,
//     "@@comp/timer" : <Timer/>,
//     "@@comp/ThreeCal" : <ThreeCal/>, //Dec to Bin/Hex Cal
//     "@@comp/ThreeCalBin" : <ThreeCalBin/>,
//     "@@comp/ThreeCalHex" : <ThreeCalHex/>,
// }

import { finParamewithComp } from './utilis/playFlowUtilis/componentsConvert';


function PlayFlowPage() {

    // real elements
    const [ elements, setElements ] = useState([]);

    // store elements
    const [ elementslocalStore , setElementslocalStore ] = useState([]);

    const [ openDrawer, setOpenDrawer ] = useState(false);
    //const [ initLoading, setInitLoading ] = useState(true);

    useEffect( () =>{
        setElementslocalStore( initElements() );
   
    },[])


    //Convers text version to components version
    useEffect( () =>{
        setLocalStore("flowArr", elementslocalStore)
        let convArr = JSON.parse(JSON.stringify(elementslocalStore))
  
        for(let i = 0; i < convArr.length; i ++){
            console.log(convArr[i].data);

            if(convArr[i].data.label && convArr[i].data.label.includes("@@comp/")){
                convArr[i].data.label = finParamewithComp(convArr[i].data.label, convArr[i].id)
            }
        }

        console.log("new",convArr);
        console.log("Original",elementslocalStore);

        setElements(convArr)

    },[elementslocalStore])

    const addNode = () => setElementslocalStore([...elementslocalStore, { id: uuidv4(), data: { label: "@@comp/counter" }, position: { x: 50, y: 50 } }])
    const onConnect = (params) => setElementslocalStore((els) => addEdge(params, els));

    const onNodeDragStop = (_, node) => {
        let newArr = JSON.parse(JSON.stringify(elementslocalStore))

        for(let i = 0; i < newArr.length; i ++){
            if(newArr[i].id === node.id){
                newArr[i].position = node.position
                break;
            }  
        }

        setElementslocalStore(newArr)
    };

    const ListBox = ({ anchor }) => (
        <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }} role="presentation" >
          <List>
            <ListItem>
                <div>
                    <h3>Add Node</h3>
                    <br/>
                    <Button variant="contained" onClick={ () => addNode() }>Add Node</Button>
                </div>
            </ListItem>
          </List>
          <Divider />
        </Box>
    );

    return(
        <Layout>

            <Fab sx={{ position: 'absolute', bottom: 64, right: 16, zIndex: 100 }} aria-label={"hi"} color="secondary" onClick={ () => setOpenDrawer(true) }>
                <AddIcon />
            </Fab>

            <Drawer
                anchor={"right"}
                open={openDrawer}
                onClose={ () => setOpenDrawer(false)}
            >
                <ListBox anchor={"right"} />
            </Drawer>

            <div style={{ height: "90vh", width: "auto" }}>
                <ReactFlow 
                    elements={elements}
                    onConnect={onConnect}
                    onNodeDragStop={onNodeDragStop}
                >

                <Controls />
                <Background variant={BackgroundVariant.Lines} />

                </ReactFlow>
            </div>

        </Layout>
    )
}

export default PlayFlowPage