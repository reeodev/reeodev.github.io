import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import ReactFlow, { Controls, addEdge, Background, BackgroundVariant } from 'react-flow-renderer';
import { v4 as uuidv4 } from 'uuid';

import { setLocalStore } from './utilis/localstoreUtilis'
import { initElements } from './utilis/flowPageutilis';

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Fab from '@mui/material/Fab';

import AddIcon from '@mui/icons-material/Add';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


function PlayFlowPage() {

    const [ elements, setElements ] = useState([]);
    const [ openDrawer, setOpenDrawer ] = useState(false);
    const [ initLoading, setInitLoading ] = useState(true);

   

    useEffect( () =>{
        setElements( initElements() );
        setInitLoading(false)
    },[])

    useEffect( () =>{
        if(!initLoading){
            setLocalStore("flowArr", elements)
        }
    },[elements])

    const addNode = () => setElements([...elements, { id: uuidv4(), data: { label: 'Node bur' }, position: { x: 50, y: 50 } }])
    const onConnect = (params) => setElements((els) => addEdge(params, els));
    //const onNodeDragStop = (_, node) => console.log('drag stop', node);

    const onNodeDragStop = (_, node) => {
        let newArr = [...elements]

        for(let i = 0; i < newArr.length; i ++){

            if(newArr[i].id === node.id){
                newArr[i].position = node.position
                break;
            }
            
        }
        setElements(newArr)
    };

    const ListBox = ({ anchor }) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
    
        >
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