import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Clientes from './Clientes/Clientes';

const ClientesTabla = () => {
    return (
        <div>
        <Container className="py-5">
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="text-danger">Lista Clientes</h1>
            <Link className="btn btn-primary" to="/Clientes/Create">Agregar Clientes</Link>
          </div>
          <hr />
            <Table bordered hover responsive className="align-middle mt-3">
            <thead>
              <tr>
                <th>N°</th>
                <th>Nomnbre</th>
                <th>Apellido</th>
                <th>E-mail</th>
                <th>Telefono</th>
                <th>Nombre Mascota</th>
                <th>Especie</th>
                <th>Raza</th>
              </tr>
            </thead>
            <tbody>
              <Clientes />
              <Clientes />
              <Clientes />
              <Clientes />
              <Clientes />
              <Clientes />
            </tbody>
          </Table>
          {/* No products found message */}
          {/* <div className="no-products-found d-flex align-items-center justify-content-center">
            <h1>🥐 No products found ☕</h1>
          </div> */}
        </Container>
      </div>
    );
};

export default ClientesTabla;