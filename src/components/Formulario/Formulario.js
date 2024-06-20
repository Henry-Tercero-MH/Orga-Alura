import { useState } from "react";
import "./Formulario.css";
import ListaOpciones from "../ListaOpciones/ListaOpciones.js";
import Campo from "../Campo/Campo.js";
import Boton from "../Boton/Boton.js";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

  const { registrarColaborador, crearEquipo } = props;
  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("manejar el envio");
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(datosAEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  };
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingrese nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar puesto"
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo
          titulo="Imagen"
          placeholder="Ingresar imagen url"
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones
          valor={equipo}
          actualizarEquipo={actualizarEquipo}
          equipos={props.equipos}
        />
        <Boton texto="Crear" />
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el Equipo.</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar titulo"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar color en Hex"
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />
        <Boton texto="Registrar Equipo" />
      </form>
    </section>
  );
};
export default Formulario;
