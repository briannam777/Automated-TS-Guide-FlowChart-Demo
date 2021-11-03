import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';



const Searchbar = () => {




  const [options, setOptions] = useState([]);


 

  return (
    <Dropdown
      search selection lazyLoad
      placeholder='Go to...'
      selectOnBlur={false}
      selectOnNavigation={false}
      options={options}
      value={null}
    />
  );
};

export default Searchbar;