import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/Rectangle.png)" }}
    >
      <div className="redes">
        <a href="https://www.aluracursos.com/">
          <img src="/img/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.aluracursos.com/">
          <img src="/img/twitter.png" alt="twitter" />
        </a>
        <a href="https://www.aluracursos.com/">
          <img src="/img/instagram.png" alt="instagram" />
        </a>
      </div>
      <img src="/img/Logo.png" alt="org" />
      <strong>Desarrollado por Henry Tercero</strong>
      <div className="figuras">
        <img src="/img/Polygon.png" alt="poligon" />
        <img src="/img/Polygon2.png" alt="" />
        <img src="/img/Ellipse.png" alt="" />
        <img src="/img/Ellipse2.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
