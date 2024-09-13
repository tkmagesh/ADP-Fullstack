import React from 'react';

function Products() {
  const productNames = ["Pen", "Pencil", "Marker", "Notepad"];
  const productItems = productNames.map((productName, idx) => (
    <li key={idx}>{productName}</li>
  ));
  return (
    <>
      <h1>Products</h1>
      <hr />
      <ul>{productItems}</ul>
    </>
  );
}

export default Products;