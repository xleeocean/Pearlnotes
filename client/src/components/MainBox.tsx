import React, { useContext } from 'react';
import ProductMenu from './ProductMenu';
import ProductList from './ProductList';
import { AppContext } from '../AppContext'

export default function MainBox() {
  const { selected } = useContext(AppContext);


  return (
    <div className="MainBox">
      {selected.length > 0 ? <ProductList/> : <ProductMenu/>}
    </div>
  );
}
