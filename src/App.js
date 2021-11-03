

import TroubleshootingEvents from './components/TroubleshootingEvents';
import { Sidebar, Dimmer, Loader } from 'semantic-ui-react';
import HeaderMenu from './components/HeaderMenu';


function App() {
  return (
    <div style={styles.div}>
       <HeaderMenu header="Troubleshooting Events" />
      <TroubleshootingEvents></TroubleshootingEvents>
    </div>
  );
}


const styles = {
  div: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  pushable: {
    flex: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  pusher: {
    flex: 'auto',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  }
};
export default App;
