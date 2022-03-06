import 'bootstrap/dist/css/bootstrap.min.css'
import Flex from './components/Flex';
import './assets/styles.css';
import { Box, Center } from '@chakra-ui/react';
import HomePage from './pages/home';

function App() {
  return (
    <>
    <Box paddingX = "16">
      <Center>
        <HomePage/>
      </Center> 
    </Box>
    </>
  );
}

export default App;
