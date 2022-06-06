import React, { useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  validateFecha,
  validateHora,
  validateNombreApellido,
  validateProf,
  validatetextarea,
} from "../../Helpers/validacionesTurnos";

const TurnosCreate = ({ URL2, getAp }) => {
  const [TurnoPetName, setTurnoPetName] = useState("");
  const [TurnoDoctor, setTurnoDoctor] = useState("");
  const [TurnoDetalle, setTurnoDetalle] = useState("");
  const [TurnoFecha, setTurnoFecha] = useState("");
  const [TurnoHora, setTurnoHora] = useState("");
  const [horasDr1, setHorasDr1] = useState([]);
  const [horasDr2, setHorasDr2] = useState([]);
  const [turnos, setTurnos] = useState([]);
  const [horas, setHoras] = useState([]);
  const [time, setTime] = useState("");


  const navigate = useNavigate();


  const Dr1 = "Dra Liza Morgan";
  const Dr2 = "Dr Adrian Munir";

  const TurnoPetNameRef = useRef("");
  const TurnoDoctorRef = useRef("");
  const TurnoDetalleRef = useRef("");
  const TurnoFechaRef = useRef("");
  const TurnoHoraRef = useRef("");
  const Dr1Ref = useRef("");
  const Dr2Ref = useRef("");

  const timePicker = [
    
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];



  const Time = ({ hora }) => {
    return <option value={String(hora)}>{hora}</option>;
  };

  const handleDateChange = (e) => {
    const busquedaFechas = turnos.filter(
      (fechas) => fechas.TurnoFecha === e.target.value
    );


    const buscarVeterinario = busquedaFechas.filter((doc) => doc.vet === Dr1);
    const buscarVeterinario1 = buscarVeterinario.map((horas) => horas.TurnoHora);
    setHorasDr1(buscarVeterinario1);
    const buscarVeterinarioI = busquedaFechas.filter(
      (doc) => doc.vet === Dr2
    );
    const buscarVeterinario2 = buscarVeterinarioI.map((horas) => horas.TurnoHora);
    setHorasDr2(buscarVeterinario2);

    if (buscarVeterinario.length >= 8) {
      Dr1Ref.current.disabled = true;
    } else {
      Dr1Ref.current.disabled = false;
    }
    if (buscarVeterinarioI.length >= 8) {
      Dr2Ref.current.disabled = true;
    } else {
      Dr2Ref.current.disabled = false;
    }

    TurnoDoctorRef.current.disabled = false;
  };


  const handleVetChange = (e) => {
    if (e.target.value === Dr1) {
      const vet1filtrado = timePicker.filter(
        (hora) => !horasDr1.includes(hora)
      );
      console.log("filtrado", vet1filtrado);
      setHoras(vet1filtrado);
    } else if (e.target.value === Dr2) {
      const vet2filtrado = timePicker.filter(
        (hora) => !horasDr2.includes(hora)
      );
      console.log(vet2filtrado);
      setHoras(vet2filtrado);
    }

    TurnoHoraRef.current.disabled = false;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !validateNombreApellido(TurnoPetName) ||
      !validateProf(TurnoDoctor) ||
      !validatetextarea(TurnoDetalle) ||
      !validateFecha(TurnoFecha) ||
      !validateHora(TurnoHora)
    ) {
      Swal.fire("Ops!", "Llene correctamente los casilleros.", "error");
      return;
    }
    const nuevoTurno = {
      TurnoPetName,
      TurnoDoctor,
      TurnoDetalle,
      TurnoFecha,
      TurnoHora,
    };

    Swal.fire({
      title: "Esta seguro?",
      text: "No podra revertir este paso!",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      showCancelButton: true,
      confirmButtonText: "Guardar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(URL2, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoTurno),
          });
          if (res.status === 201) {
            Swal.fire(
              "Turno Agregado!",
              "Su turno fue creado exitosamente.",
              "success"
            );
            getAp();
            navigate("/Turnos/Tabla");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div>
      <Container className="my-5 container">
        <h3 className="text-center text-danger display-4">Agendar Turnos</h3>
        <hr />
        <Row>
          <Col sm={12} md={6}>
            <div className="my-5">
              <img
                src="https://dojiw2m9tvv09.cloudfront.net/11787/product/royalcaninlatasvetdietrecoveryfeline-canine145gr25347.png"
                alt="perro en blanco y negro con su amigo el gato"
                className="img-fluid mt-5"
              />
            </div>
          </Col>
          <Col sm={12} md={6} className="my-4">
            <Form className="my-3" onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-bold">
                  Nombre de la Mascota
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre de la Mascota"
                  ref={TurnoPetNameRef}
                  onChange={({ target }) => setTurnoPetName(target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label className="fw-bolder">Profesionales*</Form.Label>
                <Form.Select
                  ref={TurnoDoctorRef}
                  onChange={({ target }) => setTurnoDoctor(target.value)}
                  onBlur={handleVetChange}
                >
                  <option value="">Seleccione al profesional</option>
                  <option ref={Dr1Ref} value="Dra Liza Morgan">Dra Liza Morgan</option>
                  <option ref={Dr2Ref} value="Dr Adrian Munir">Dr Adrian Munir</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="fw-bold">Detalle De la Cita</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={({ target }) => setTurnoDetalle(target.value)}
                  ref={TurnoDetalleRef}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-bold">Fecha</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Escriba la fecha"
                  onBlur={handleDateChange}
                  onChange={({ target }) => setTurnoFecha(target.value)}
                  ref={TurnoFechaRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label className="fw-bolder">Horario</Form.Label>
                <Form.Select
                  ref={TurnoHoraRef}
                  onChange={({ target }) => setTurnoHora(target.value)}
                >
                  <option value="">Elija el horario</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                </Form.Select>
              </Form.Group>
              <button className="btn btn-success">Guardar</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TurnosCreate;
