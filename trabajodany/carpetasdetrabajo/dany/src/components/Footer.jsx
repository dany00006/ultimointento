function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        PhoneRepair © {year} – Sistema de gestión de reparación y repuestos para
        celulares
      </p>
      <small>Proyecto académico | Frontend con React</small>
    </footer>
  );
}

export default Footer;