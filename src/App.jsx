import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import StudyForm from "./pages/StudyForm";
import Layout from "./pages/Layout";
import theme from "./theme/theme";



function App() {


  return (

    <div>
      <ChakraProvider theme={theme}>
        <Routes>
          
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="studyform" element={<StudyForm />} />
        

          </Route>
        </Routes>

      </ChakraProvider>
    </div>
  );
}

export default App
