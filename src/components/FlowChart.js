import React from 'react';
import ReactFlow , { Handle }from 'react-flow-renderer';
import "../css/nodeStyle.css"

const TwoOutputNode = ({ data }) => {
  return (
    <div >
      <Handle type="target" position={data.handlePosition1} style={{ borderRadius: 0 }} />
      <div>{data.label}</div>
      <Handle
        type="source"
        position={data.handlePosition2}
        id="a"
      />
      <Handle
        type="source"
        position={data.handlePosition3}
        id="b"
      />
    </div>
  );
};

const TwoInputNode = ({ data }) => {
  return (
    <div>
      <div className = {"nodeText"} >{data.label}</div>
      <Handle
        type="target"
        position={data.handlePosition1}
        id="a"
      />
      <Handle
        type="target"
        position={data.handlePosition2}
        id="b"
      />
    </div>
  );
};

const nodeTypes = {
  TwoOutput: TwoOutputNode,
  TwoInput: TwoInputNode
};

const elements = [
  {
    id: '1',
    
    data: { label: 'AT 160 HIGH SD' },
    position: { x: 300, y: 0 },
    type:'input',
    sourcePosition: 'right'
  },
  // default node
  {
    id: '2',
    // you can also pass a React component as a label
    type:'TwoOutput',
    data: { label: 'Did the SD Occur in P140?',handlePosition1: "left",handlePosition2: 'right', handlePosition3: 'bottom'},
    position: { x: 500, y: 0 },
  },
  {
    id: '3',
    data: { label: 'Check data for VSD110 current draw during P140' },
    position: { x: 500, y: 200 },
  },
  {
    id: '4',
    type:'TwoOutput',
    data: { label: 'Was this an LOR SD' ,handlePosition1: "left",handlePosition2: 'right',handlePosition3: 'bottom'},
    position: { x: 900, y: 0 },
  },
  {
    id: '5',
    type:'output',
    targetPosition: 'left',
    data: { label: 'Refer to FCTG107871' },
    position: { x: 1100, y: 0 },
  },
  {
    id: '6',
    type:'TwoInput',
    data: { label: 'Investigate possible flammable gas leak.\
    \n1. There is a possible fuel leak. Check for loose boot, slipped seal, etc.\
    \n2. Check AT160 calibration and calibrate AT160.\
  \n3. Perform purge gas leak check:\
 	\na) Reduce N2/H2 pressure to approximately 10psi on the purge manifold.\
 	\nb) Open CV720 to purge fuel system with N2/H2.\
 	\nc) While flowing purge gas, use combustible gas detector (sniffer) on all fuel boots on CSA A-D and around the FPS. Repair any leaks identified.\
 	\nd) Close CV720.\
 	\ne) Open CV710 to purge air system with N2/H2.\
 	\nf) While flowing purge gas, use combustible gas detector (sniffer) on all air boots on CSA A-D. Repair any leaks identified.\
 	\ng) Close CV710.\
 	\nh) Return N2/H2 back to 65PSI.\
 \n4. If no leaks are found refer to FCTG107787 to troubleshoot bad sensor issues.',
  handlePosition1 :'left',
  handlePosition2 : 'bottom'
   },
    style:{
      width:400
    },
    position: { x: 1100, y: 100 },
  },
  {
    id: '7',
    type:'TwoOutput',
    data: { label: 'Did SD occur within 30 sec \n after a different PPLT SD?' ,handlePosition1: "left",handlePosition2: 'right',handlePosition3: 'bottom'},
    position: { x: 700, y: 0 },
  },
  {
    id: '8',
    type:'output',
    data: { label: 'This is likely a nuisance shutdown. \n Consult with systems to determine if troubleshooting is necessary'},
    position: { x: 700, y: 200 },
  },
  {
    id: '9',
    targetPosition: 'bottom',
    sourcePosition: 'top',
    data: { label: 'Was current =0A',handlePosition1: "top",handlePosition2: 'right',handlePosition3: 'bottom' },
    type:'TwoOutput',
    position: { x: 500, y: 400 },
  },
  {
    id: '10',
    type:'output',
    data: { label: '1.Troubleshoot VSD110/BLO110 operation. Fuel is likely flowing back through the CV110 \n 2.Follow FCTG1077831 if there are any faults logged on VSD110'},
    targetPosition:'left',
    position: { x: 700, y: 600 },
  },
  
  { id: 'e1-2', source: '1', target: '2',arrowHeadType:"arrow",style:{stroke:'red'} ,animated : true},
  { id: 'e2-3', source: '2', target: '3',arrowHeadType:"arrow",sourceHandle:"b",label: 'Yes'},
  {id: 'e2-7', source: '2', target: '7',arrowHeadType:"arrow",sourceHandle:"a",label: 'No',style:{stroke:'red'} ,animated : true},
  {id: 'e7-4', source: '7', target: '4',arrowHeadType:"arrow",sourceHandle:"a",label: 'No',style:{stroke:'red'} ,animated : true},
  {id: 'e4-5',source:'4',target:'5',arrowHeadType:"arrow",label: 'Yes'},
  {id: 'e4-6',source:'4',target:'6',arrowHeadType:"arrow",sourceHandle:'b',targetHandle:'a',type:"step",label: 'No, Create WO',style:{stroke:'red'} ,animated : true},
  {id: 'e7-8',source:'7',target:'8',arrowHeadType:"arrow",sourceHandle:'b',label: 'Yes'},
  {id: 'e3-9',source:'3',target:'9',arrowHeadType:"arrow",sourceHandle:'a'},
  {id: 'e9-10',source:'9',target:'10',arrowHeadType:"arrow",type:"step",sourceHandle:'b',label: 'Yes'},
  {id: 'e9-6',source:'9',target:'6',arrowHeadType:"arrow",type:"step",sourceHandle:'a',targetHandle:'b',label: 'No'},
  

];


const FlowChart = () => {

return (

    <div style={{ height: "100%" }}>
    <ReactFlow elements={elements} nodeTypes={nodeTypes}/>
  </div>


)



}





export default FlowChart
 