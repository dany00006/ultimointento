function Sidebar() {
  const menuItems = [
    { label: "Dashboard", path: "#" },
    { label: "Reparaciones", path: "#" },
    { label: "Repuestos", path: "#" },
    { label: "Clientes", path: "#" },
    { label: "Administración", path: "#" },
  ];

  return (
    <aside className="sidebar">
      <p className="sidebar-title">Gestión de Celulares</p>

      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              
              <a href={item.path} className="sidebar-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button className="logout-btn" type="button">
        Cerrar sesión
      </button>
    </aside>
  );
}

export default Sidebar;