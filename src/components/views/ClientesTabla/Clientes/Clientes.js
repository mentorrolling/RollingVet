import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Clientes = () => {
    return (
        <tr>
      <td>1</td>
      <td>Nombre</td>
      <td>Apellido</td>
      <td>Correo Electronico</td>
      <td>Numero de telefono</td>
      <td>Nombre Mascota</td>
      <td>Especie</td>
      <td>Raza</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link className="btn btn-success mx-1" to= "/Clientes/Create">Editar</Link>
          <Button className="btn btn-danger mx-1">Eliminar</Button>
        </div>
      </td>
    </tr>
    );
};

export default Clientes;