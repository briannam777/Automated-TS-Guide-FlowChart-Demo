import React from 'react';
import { Menu } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import Searchbar from './Searchbar';
import 'semantic-ui-css/semantic.min.css';



const HeaderMenu = ({ header }) => {
 



  return (
    <Menu inverted borderless style={styles.header}>
      <Menu.Item icon='bars' style={styles.menu} />
      <Menu.Item header>{header}</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item style={styles.search}>
          <b style={styles.ppid}>PPID :</b>
          <Searchbar />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

const styles = {
  header: {
    margin: '0',
    borderRadius: '0',
    display: 'flex',
    flexDirection: 'row'
  },
  menu: {
    borderRadius: '0',
    cursor: 'pointer'
  },
  ppid: {
    marginRight: '12px'
  },
  search: {
    paddingTop: '0',
    paddingBottom: '0'
  }
};

export default HeaderMenu;