import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './component/Navbar';
import Main from './Pages/Main';
import AllRoutes from './component/AllRoutes';

function App() {
  return (
  <Box>
    < Navbar/>
   
    <AllRoutes/>
  </Box>
  );
}

export default App;
