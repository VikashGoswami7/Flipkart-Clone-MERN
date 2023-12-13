
import Header from './Header/Header';
import Home from './HomePage/Home';

import { Box } from '@mui/material';


function App() {
  return (
    <div className="App">
      <Header />
      <Box style={{margin:"13vh 10px"}} >
        <Home />
      </Box>
 
    </div>
  );
}

export default App;
