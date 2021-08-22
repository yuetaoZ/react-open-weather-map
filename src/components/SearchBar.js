import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  color: white;
  padding: 8px 16px;
  background-color: black;
  border-radius: 0px 4pt 4pt 0px;
`;

const Input = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4pt 0px 0px 4pt;
  width: 100%;
`;

const SearchBarContainer = styled.div`
  display: flex;
  background-color: rgb(242, 242, 242);
  padding: 16px;
`;

const SearchBar = (props) => {
  const [value, setValue] = useState("");

  return (
    <SearchBarContainer>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.onSearch(value);
          }
        }}
        placeholder="Search city"
      />
      <Button onClick={() => props.onSearch(value)}>Search</Button>
    </SearchBarContainer>
  );
};

export default SearchBar;
