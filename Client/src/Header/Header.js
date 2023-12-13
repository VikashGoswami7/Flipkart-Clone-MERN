import { AppBar, Box, Toolbar } from "@mui/material";
import { styled } from '@mui/material/styles';
import React from 'react';
import NavButton from "./NavButton";
import Search from "./Search";

const HeaderStyle = styled(AppBar)`
background: #FFFFFF;
box-shadow: none;

`
const LogoStyle = styled(Box)`
 line-height: 0;
`

const ToolStyle = styled(Toolbar)`
height: 12vh;
display:flex;
align-item:center;
`


const Header=()=>{
    const logoURL = 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg'

    return(
        <HeaderStyle>
            <ToolStyle>
                <LogoStyle>
                    <img src={logoURL} alt="logo" style={{lineHeight:"0",marginLeft:"4%"}} /> 
                </LogoStyle>
                
                <Search/>

                <NavButton/>
                
            </ToolStyle>
        </HeaderStyle>
    )
}

export default Header;