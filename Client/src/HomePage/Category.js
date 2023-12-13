import { Box, styled, Typography } from '@mui/material';
import React from 'react';

const CategoryStyle = styled(Box)`
height: 130px;
display:flex;
justify-content: space-around;
align-item:center;
background: #ffffff;
padding-inline:20px;
`
const Container = styled(Box)`
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
padding:10px 0;
`
const Text = styled(Typography)`
font-size:14px;
font-weight:600;
color: #333333;
font-family: Inter;
`

const categoriesData = [
    { url: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/085406bae47866d5.png?q=100', text: 'Top Offers' },
    { url: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/64f1cc66052c66ef.png?q=100', text: 'Mobiles & Tablets' },
    { url: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/1fd83847b32a09d1.png?q=100', text: 'Electronics' },
    { url: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/6c0716819ac55121.png?q=100', text: 'TV &Appliances' },
    { url: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/6dbed7ba5417672f.jpg?q=100', text: 'Fashion' },
    { url: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/c444de48eb75d450.png?q=100', text: 'Beauty' },
    { url: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/f9c7aaa5f5455ae7.png?q=100', text: 'Home & Kitchen' },
    { url: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/26e11f4698473e49.png?q=100', text: 'Furniture' },
    { url: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/8abe0a348a71d745.png?q=100', text: 'Flights' },
    { url: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/022cf9a62e8bd22c.png?q=100', text: 'Grocery' }
]

const Category = () => {
    return (
        <CategoryStyle>
            {
                categoriesData.map(data => (
                    <Container>
                        <img src={data.url} alt='ctgy' />
                        <Text>{data.text}</Text>
                    </Container>
                ))
            }
        </CategoryStyle>
    )
}

export default Category;