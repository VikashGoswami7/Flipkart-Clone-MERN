import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Typography, styled } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
// import './index.css';

const NavItems = styled(Box)`
display:flex;
justify-content:space-around;
align-item:center;
font-size:16px;
width:40%;
color:black;
margin:0 15px;
& > button{
    width:30%;
& > button:hover{
    background-color:blue;
}


`

const SellerStyle = styled(Box)`
width:40%
padding:0;
`
const CartStyle = styled(Box)`
width:30%;
padding:0;
`


const NavButton = () => {
  const sellerURL = 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg'
  const signURL = 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-815786.svg'
  return (
    <NavItems>

      <Button variant="text"><img src={signURL} alt='sign in' />&nbsp; Sign in</Button>

      <SellerStyle>
        <Typography><img src={sellerURL} alt='sell' />&nbsp; Become a Seller</Typography>
      </SellerStyle>

      <CartStyle><Typography><ShoppingCartIcon />&nbsp; Cart</Typography></CartStyle>

      <MoreVertIcon fontSize='medium' />
      
    </NavItems>
  )
}

export default NavButton;