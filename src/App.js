import Header from "./components/home/header";
import { Box } from '@chakra-ui/react';
import Services from "./components/home/services";
import About   from "./components/home/About-us"
function App() {
  return (
    <Box>
      <Header/>
      <Services/>
      <About/>
    </Box>
  );
}

export default App;
