import * as React from 'react';
import ProductMenu from './ProductMenu';
import ProductList from './ProductList';

export default function MainBox() {
  const [filter, setFilter] = React.useState("b");

  return (
    <div className="MainBox">
      {filter ? <ProductList/> : <ProductMenu/>}
    </div>
  );
}
