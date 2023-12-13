import { Box, styled } from '@mui/material';
import Category from "./Category";
import Carousel from "./HomeSlider";

const Components = styled(Box)`
padding:10px;
`


function index() {
    return (
        <>
            <Category />
            <Components>
                <Carousel />
            </Components>

        </>
    )
}

export default index;