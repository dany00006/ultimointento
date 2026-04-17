import { useState } from "react";
import logo from "../assets/logo2.png";

function Header() {
  const [search, setSearch] = useState("");

  const user = {
    name: "Andres Hunk",
    role: "Administrador",
  };

  return (
    <header className="header">
      <div className="brand">
        <img src={logo} alt="Logo MotorCore" className="logo" />
        <h1 className="brand-title">
          Motor<span className="brand-core">Core</span>
        </h1>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Buscar motos, repuestos o reparaciones..."
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