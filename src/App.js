import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/views/Home/Home";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";

import Error404 from "./components/views/Error404/Error404";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";




function App() {
  return (
    
      <BrowserRouter>
      <Navigation />
      
      <main>
       <Routes>
      <Route exact path="/" element={<Home/>}/>
      {/*<Route exact path="/product/table" element={<ProductsTable />}/>
      <Route exact path="/product/create" element={<ProductCreate/>}/>
      <Route exact path="/product/edit" element={<ProductEdit/>}/>
      <Route exact path="*" element={<Error404/>}/>*/}
      </Routes> 
      
      
      </main>
      <Footer />
      </BrowserRouter>

  );
}

export default App;
