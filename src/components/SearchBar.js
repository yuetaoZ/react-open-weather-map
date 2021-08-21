import React from "react";
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

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <Input placeholder="Search city"></Input>
      <Button>Search</Button>
    </SearchBarContainer>
  );
};

export default SearchBar;
