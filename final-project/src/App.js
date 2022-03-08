import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles.css';
import { Box, Center } from '@chakra-ui/react';
import HomePage from './pages/home';
import {Route, Routes} from 'react-router-dom'
import Profile from './pages/profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Box paddingX = "16">
      
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      
    </Box>
    </>
  );
}

export default App;
