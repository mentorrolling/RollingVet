import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/views/Home/Home";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
// import ProductsTable from "./components/views/ProductTable/ProductTable";
// import ProductCreate from "./components/views/ProductCreate/ProductCreate";
// import ProductEdit from "./components/views/ProductEdit/ProductEdit";
import Error404 from "./components/views/Error404/Error404";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ContactUs from "./components/views/ContactUs/ContactUs";
import AdminClientesCreate from "./components/views/AdminClientes/AdminClientesCreate";
import AdminTurnos from "./components/views/AdminTurnos/AdminTurnos";
import AdminTurnosCreate from "./components/views/AdminTurnos/AdminTurnosCreate";
import ListaTurnos from "./components/views/AdminTurnos/ListaTurnos/ListaTurnos";
import ListaClientes from "./components/views/AdminClientes/ListaClientes/ListaClientes";
import AdminClientes from "./components/views/AdminClientes/AdminClientes";



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
      <main>
      {/* <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/product/table" element={<ProductsTable />}/>
      <Route exact path="/product/create" element={<ProductCreate/>}/>
      <Route exact path="/product/edit" element={<ProductEdit/>}/>
      <Route exact path="*" element={<Error404/>}/>
      </Routes> */}
      {/* <ContactUs /> */}
      {/* <AdminClientesCreate /> */}
      {/* <AdminTurnos /> */}
      {/* <AdminTurnosCreate /> */}
      <AdminClientes />
      </main>
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
