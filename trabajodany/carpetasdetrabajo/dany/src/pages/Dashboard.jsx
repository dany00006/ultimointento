import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const repairStatus = [
    { label: "En proceso", value: 5 },
    { label: "Pendientes", value: 2 },
    { label: "Finalizadas", value: 12 },
  ];

  const stats = [
    { label: "Celulares Reparados", value: 156 },
    { label: "Repuestos en Stock", value: 42 },
    { label: "Clientes Activos", value: 28 },
    { label: "Ingresos Este Mes", value: "$4,250" },
  ];

  const popularModels = [
    { name: "iPhone 13", repairs: 24 },
    { name: "Samsung A12", repairs: 18 },
    { name: "Xiaomi Note 10", repairs: 15 },
    { name: "Motorola G9", repairs: 12 },
  ];

  const repairTrend = [
    { month: "Enero", reparaciones: 45 },
    { month: "Febrero", reparaciones: 52 },
    { month: "Marzo", reparaciones: 48 },
    { month: "Abril", reparaciones: 61 },
    { month: "Mayo", reparaciones: 55 },
    { month: "Junio", reparaciones: 67 },
  ];

  const COLORS = ["#e74c3c", "#722c46", "#c81d25"];

  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <h2>Panel Administrativo</h2>
        <span className="admin-badge">Admin</span>
      </div>

      <p>
        Bienvenido al área administrativa de PhoneRepair. Desde aquí puedes
        supervisar las reparaciones, repuestos y clientes del sistema.
      </p>

      {/* Estadísticas Principales */}
      <section className="dashboard-section">
        <h3>Estadísticas Generales</h3>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-box" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gráfica de Tendencia */}
      <section className="dashboard-section">
        <h3>Tendencia de Reparaciones</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={repairTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="reparaciones"
              stroke="#e74c3c"
              strokeWidth={2}
              dot={{ fill: "#722c46", r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* Gráficas de Estado y Modelos */}
      <div className="dashboard-charts-row">
        {/* Gráfica de Pastel - Estado de Reparaciones */}
        <section className="dashboard-section chart-section">
          <h3>Estado de Reparaciones</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={repairStatus}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ label, value }) => `${label}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {repairStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </section>

        {/* Gráfica de Barras - Modelos Populares */}
        <section className="dashboard-section chart-section">
          <h3>Celulares Más Reparados</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={popularModels}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="repairs" fill="#c81d25" />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </div>

      {/* Acciones Rápidas */}
      <section className="dashboard-section">
        <h3>Acciones Rápidas</h3>
        <div className="quick-actions">
          <button className="action-btn">+ Nueva Reparación</button>
          <button className="action-btn">+ Agregar Repuesto</button>
          <button className="action-btn">+ Nuevo Cliente</button>
          <button className="action-btn">Ver Reportes</button>
        </div>
      </section>
    </section>
  );
}

export default Dashboard;
