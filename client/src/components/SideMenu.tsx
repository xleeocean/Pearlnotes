import React, { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { AppContext } from '../AppContext'



export default function SideMenu () {
  const { pearlType } = useContext(AppContext);
  const { jewelryType } = useContext(AppContext);
  const { selected, setSelected } = useContext(AppContext);
  // const jumpTo = (e) => {
  //   setSelected()
  // }

  return (
    <div className='sideMenu'>
      <h4> Pearl Type </h4>
      <List>
        {pearlType.map((type) => (
          <ListItem>- {type} -</ListItem>
        ))}
      </List>
      <h4> Jewelry Type </h4>
      <List>
        {jewelryType.map((type) => (
          <ListItem>- {type} -</ListItem>
        ))}
      </List>

    </div>

  );
}