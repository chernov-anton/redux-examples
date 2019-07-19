import React from 'react';
import SearchBar from '../search-bar'
import ProductTable from '../product-table'

const FilterableProductTable = () =>  (
  <div className="m-5">
    <SearchBar />
    <ProductTable />
  </div>
);

export default FilterableProductTable;
