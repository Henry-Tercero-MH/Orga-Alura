import "./MiOrg.css";

const MiOrg = (props) => {
  // const manejarClick = () => {
  //   console.log("MOstrar/Ocultar elemento");
  // };
  return (
    <section className="orgSection">
      <h3 className="title">Mi Organizacion</h3>
      <img src="/img/add_.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
  );
};

export default MiOrg;
