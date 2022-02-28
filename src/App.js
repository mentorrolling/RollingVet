import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/views/Home/Home";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ContactUs from "./components/views/ContactUs/ContactUs";
import Login from "./components/layout/Login";
import Error404 from "./components/views/Error404/Error404";
import PaginaPlanes from "./components/views/PaginaPlanes/PaginaPlanes";
// import AdminTurnos from "./components/views/AdminTurnos/AdminTurnos";
// import AdminTurnosCreate from "./components/views/AdminTurnos/AdminTurnosCreate";
// import ListaTurnos from "./components/views/AdminTurnos/ListaTurnos/ListaTurnos";
import PlanPrimerosPasos from "./components/views/PaginaPlanes/PlanPrimerosPasos";
import PlanAdultos from "./components/views/PaginaPlanes/PlanAdultos";
import PlanMadurando from "./components/views/PaginaPlanes/PlanMadurando";
import ClientesCreate from "./components/views/ClientesCreate/ClientesCreate";
import ClientesEdit from "./components/views/ClientesEdit/ClientesEdit";
// import Clientes from "./components/views/ClientesTabla/Clientes/Clientes";
import ClientesTabla from "./components/views/ClientesTabla/ClientesTabla";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contactos" element={<ContactUs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/planes" element={<PaginaPlanes />} />
          <Route
            exact
            path="/planes/primerospasos"
            element={<PlanPrimerosPasos />}
          />
          <Route exact path="/Clientes/Tabla" element={<ClientesTabla />} />
          <Route exact path="/Clientes/Create" element={<ClientesCreate />} />
          <Route exact path="/Clientes/Edit" element={<ClientesEdit />} />
          <Route exact path="/" />

          <Route exact path="/planes/madurando" element={<PlanMadurando />} />
          <Route exact path="/planes/adultos" element={<PlanAdultos />} />
          {/* <Route exact path="/lista/turnos" element={<ListaTurnos />} />
          <Route exact path="/admin/turnos" element={<AdminTurnos />} />
          <Route
            exact
            path="/admin/turnos/create"
            element={<AdminTurnosCreate />} */}
          
          <Route exact path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// 00:50:00