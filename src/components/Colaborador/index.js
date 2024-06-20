import "./Colaborador.css";
import { FaWindowClose, FaHeart, FaRegHeart } from "react-icons/fa";

const Colaborador = (props) => {
  const { nombre, puesto, foto, equipo, id, fav } = props.datos;
  const { colorPrimario, eliminarColaborador, like } = props;
  return (
    <div className="colaborador">
      <FaWindowClose
        className="eliminar"
        onClick={() => eliminarColaborador(id)}
      />
      <div class="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre} />
      </div>
      <div class="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav ? (
          <FaHeart color="red" onClick={() => like(id)} />
        ) : (
          <FaRegHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};
export default Colaborador;
