import React from "react";

const SearchBar = (props) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.value}
        onChange={props.onChange}
      />
    </form>
  );
};

export default SearchBar;