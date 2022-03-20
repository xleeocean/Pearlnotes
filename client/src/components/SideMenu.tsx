import React, { useContext } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { AppContext, IProductType } from '../AppContext';



export default function SideMenu () {
  const { pearlTypes, jewelryTypes, fetchProducts } = useContext(AppContext);

  const selectType =
    (productType: string) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      console.log('side menu set selected to :', productType);
      if (fetchProducts) {
        fetchProducts('false', productType);
      } 
  };

  return (
    <div className='sideMenu'>
      <h4> Pearl Type </h4>
      <List>
        {pearlTypes.map((type: IProductType) => (
          <ListItemButton
          onClick={selectType(type.name)}>
            - {type.name} -
          </ListItemButton>
        ))}
      </List>
      <h4> Jewelry Type </h4>
      <List>
        {jewelryTypes.map((type: IProductType) => (
          <ListItemButton
          onClick={selectType(type.name)}>
            - {type.name} -
          </ListItemButton>
        ))}
      </List>

    </div>

  );
}