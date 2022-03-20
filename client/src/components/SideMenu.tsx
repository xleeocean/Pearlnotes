import React, { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { AppContext, IProductType } from '../AppContext';



export default function SideMenu () {
  const { pearlTypes, jewelryTypes, setSelected } = useContext(AppContext);
  // const jumpTo = (e) => {
  //   setSelected()
  // }

  return (
    <div className='sideMenu'>
      <h4> Pearl Type </h4>
      <List>
        {pearlTypes.map((type: IProductType) => (
          <ListItem>- {type} -</ListItem>
        ))}
      </List>
      <h4> Jewelry Type </h4>
      <List>
        {jewelryTypes.map((type: IProductType) => (
          <ListItem>- {type} -</ListItem>
        ))}
      </List>

    </div>

  );
}