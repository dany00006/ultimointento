function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        MotorCore © {year} – Sistema de gestión de reparación y repuestos para
        motocicletas
      </p>
      <small>Proyecto académico | Frontend con React</small>
    </footer>
  );
}

export default Footer;