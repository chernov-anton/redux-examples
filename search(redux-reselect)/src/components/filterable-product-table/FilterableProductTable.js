import React from 'react';
import SearchBar from '../search-bar';
import ProductTable from '../product-table';

const FilterableProductTable = (props) => (
  <div className="m-5">
    <SearchBar text={props.value} onChange={props.onChange}/>
    <ProductTable products={props.products}/>
  </div>
);

export default FilterableProductTable;
