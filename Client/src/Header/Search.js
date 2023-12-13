import SearchIcon from '@mui/icons-material/Search';
import { Box, InputBase, styled } from '@mui/material';
import React from 'react';

const SearchContainer = styled(Box)`
background:#F1F2F4;
width: 44%;
height: 6.5vh;
border-radius: 10px;
margin-left: 3vw;
display:flex;
`;

const SearchBox = styled(InputBase)`
padding:5px 0;
box-sizing:border-box;
width:95%

`;

const SearchIconWrapper = styled(Box)`
color:black;
padding:5px;
width:5%
`


const Search = () =>{
    return(
        <SearchContainer>
            <SearchIconWrapper>
            <SearchIcon style={{color:"gray",fontSize:"32px"}} />
            </SearchIconWrapper>
            
            <SearchBox
            placeholder='Search For Products, Brands and More'/>
        </SearchContainer>
       
    )
}

export default Search;