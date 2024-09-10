import { useState } from "react";
import styled from "styled-components";

const SearchBoxContainer= styled.div`
    display: flex
    justify-content: center;
    // border: 2px solid lightblue;
    // border-radius: 10px;
    border:none;
    height:40px;
    margin-top:10px;
    align-items:center;
`;
const SearchClearButton=styled.button`
    background-color: lightblue;
    border-radius: 0px 7px 7px 0px;
    color:red;
    height:100%; border:none;
    cursor: pointer;

    &:hover {
        color: black;
    }

    &:active {
        color: red;
    }
`;
const SearchInput=styled.input`
    border: none;
    outline: none;
    background-color:lightblue;
    border-radius: 7px 0px 0px 7px;
    height:100%;margin:0px;
`;

export default function Search( {searchText,onSearch, onClear}){
    const[toggle,seToggle]=useState(false);

    return(
        
        <SearchBoxContainer >     
   
     <SearchInput type="text" onClick={()=>seToggle(!toggle)} placeholder="Search Note" value={searchText}  onChange={onSearch} />
        { toggle  && (
        <SearchClearButton onClick={onClear}>X</SearchClearButton >
)}
    </SearchBoxContainer>
        

    
    )}