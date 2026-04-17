import { useState } from "react";

function Header() {
  const [search, setSearch] = useState("");

  const user = {
    name: "Daniel Alejandro Rodriguez Carrillo",
    role: "Administrador",
  };

  return (
    <header className="header">
      <div className="brand">
        <h1 className="brand-title">
          Phone<span className="brand-core">Repair</span>
        </h1>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Buscar celulares, repuestos o reparaciones..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="user-info">
        <span className="user-name">{user.name}</span>
        <span className="user-role">{user.role}</span>
      </div>
    </header>
  );
}

export default Header;