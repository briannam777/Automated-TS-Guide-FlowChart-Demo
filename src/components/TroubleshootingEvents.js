import React, { useState, useEffect, useRef } from 'react';
import { Button, Table, Popup, Icon,Flag,Segment,Header,Modal } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import FlowChart from './FlowChart.js'

const TroubleshootingEvents = () => {


  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(null);
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const events = [ {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"},
  {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"},
  {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"},
  {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"},
  {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"},
  {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"},
  {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"},
  {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"},
  {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"},
  {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"},
  {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"},
  {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"},
  {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"},
  {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"},
  {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"},
  {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"},
  {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"},
  {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"},
  {id:1,name:"AT 160 HIGH SD",powerplant_id:"1",event_time:"11/01/2021, 00:00:00 PM",decision_tree:"",result:"Some result",recommendation:"Some recommendation",rating:1,comment:"Comment"}]



  const handleRowClick = (id) => {
    setActive(prevState => prevState === id ? null : id);
  };



  const handleClose = () => {
    setCopied(false);
  }

  return (
    <>
   
      <div style={styles.menu}>
        <Button
          icon='download'
          content='Download Table'
        />
      </div>
      <div style={styles.scroll}>
        <div style={styles.sticky}>
  
          <Table
            unstackable inverted fixed selectable attached='top'
            headerRow={EVENTS_TABLE_HEADER_ROW}EVENTS_TABLE_HEADER_ROW
          />
        </div>
 
        <Table unstackable fixed selectable attached inverted>
          <Table.Body>
            {events.map(e =>
              <Table.Row
                key={e.id}
                id={e.id}
                onClick={() => handleRowClick(e.id)}
                style={styles.row}
              >
                {EVENTS_TABLE_HEADER_ROW.map(r => {
                  const selected = e.id === active;
                  switch (r.key) {
                    case 'name':
                      return (
                        <Table.Cell key={r.key} colSpan={r.colSpan} singleLine={!selected}>
                             <Popup
                              basic hideOnScroll
                              content='Plot result data'
                              trigger={<Icon inverted link id={e.id} color='yellow' name='line graph'  />}                             
                            />
                            <Popup
                            basic hideOnScroll
                            content='Download result data'
                            trigger={<Icon inverted link id={e.id} color='orange' name='cloud download' />}
                          />
                          {e[r.key]}
                        </Table.Cell>
                      );
                    case 'event_time':
                      return (
                        <Table.Cell key={r.key} colSpan={r.colSpan} singleLine={!selected}>
                          {e[r.key]}
                        </Table.Cell>
                      );
                    case 'decision_tree':
                        return(
                            <Table.Cell key={r.key} colSpan={r.colSpan} singleLine={!selected}>
                               <Modal size="fullscreen" inverted
                                closeIcon
                                onClose={() => setOpen(false)}
                                onOpen={() => setOpen(true)}
                                open={open}
                                trigger={<Button>Show Decision Tree</Button>}>                 
                                    <Modal.Content >
                                    <Modal.Description>
                              <p> AT160 SD Decision Tree</p>
                                   </Modal.Description>      
                                    <FlowChart></FlowChart>
                                    </Modal.Content>
                                 </Modal>
                        </Table.Cell>
                        );
                    case 'result':
                      return (
                        <Table.Cell key={r.key} colSpan={r.colSpan} singleLine={!selected} style={selected ? styles.wrap : undefined}>
                          <Popup
                            basic hideOnScroll wide
                            position='right center'
                            closeOnTriggerClick={false}
                            onClose={handleClose}
                            header={copied ? undefined: e.result}
                            content={copied ? <><Icon color='green' name='check' />Copied!</> : e.recommendation}
                         
                            style={styles.wrap}
                          />
                          {e[r.key]}
                        </Table.Cell>
                      );
                    case 'recommendation':
                      return (
                        <Table.Cell key={r.key} colSpan={r.colSpan} singleLine={!selected} style={selected ? styles.wrap : undefined}>
                          {e[r.key]}
                        </Table.Cell>
                      );
                    case 'feedback':
                      return (
                        <Table.Cell key={r.key} colSpan={r.colSpan} singleLine={!selected}>
                          <Popup
                            basic hideOnScroll
                            position='top right'
                            content='Result is accurate'
                            trigger={
                              <Icon
                                inverted link
                                id={e.id} rating={1}
                                color={e.rating === 1 ? 'green' : undefined}
                                name={e.rating === 1 ? 'thumbs up' : 'thumbs up outline'}
                             
                              />
                            }
                          />
                          <Popup
                            basic hideOnScroll
                            position='top right'
                            content='Result is incorrect'
                            trigger={
                              <Icon
                                inverted link
                                id={e.id} rating={-1}
                                color={e.rating === -1 ? 'red' : undefined}
                                name={e.rating === -1 ? 'thumbs down' : 'thumbs down outline'}
                              
                              />
                            }
                          />
                          <Popup
                            basic hideOnScroll
                            position='top right'
                            content={e.comment || 'Write comment'}
                            trigger={
                              <Icon
                                inverted link
                                id={e.id}
                                name={e.comment ? 'comment' : 'comment outline'}
                            
                              />
                            }
                          />
                        </Table.Cell>
                      );
                    default:
                      return (
                        <Table.Cell key={r.key} colSpan={r.colSpan} singleLine={!selected}>
                          {e[r.key]}
                        </Table.Cell>
                      );
                  }
                })}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
     
     
    </>
  );
};


const EVENTS_TABLE_HEADER_ROW = [
  { key: 'name', content: 'Shutdown', colSpan: 5 },
  { key: 'powerplant_id', content: 'PPID', colSpan: 2 },
  { key: 'event_time', content: 'Event Time', colSpan: 5 },
  { key: 'decision_tree', content: 'View Decision Tree', colSpan: 3 },
  { key: 'result', content: 'Result', colSpan: 6 },
  { key: 'recommendation', content: 'Recommendation', colSpan: 6 },
  { key: 'feedback', content: 'Feedback', colSpan: 2 }

];

const styles = {
  menu: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: '0.5rem'
  },
  sticky: {
    position: 'sticky',
    top: '0',
    zIndex: '1'
  },
  table: {
    margin: '0'
  },
  scroll: {
    flex: '1 0 auto',
    overflow: 'hidden auto',
    height: '0',
    minHeight: '10rem'
  },
  row: {
    cursor: 'pointer'
  },
  active: {
    background: '#555',
    cursor: 'pointer'
  },
  wrap: {
    whiteSpace: 'pre-wrap'
  },
  header: {
    margin: '0'
  },
  rating: {
    width: '60px'
  }
 
  
 
};

export default TroubleshootingEvents;