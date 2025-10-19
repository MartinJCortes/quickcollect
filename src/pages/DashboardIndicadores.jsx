// src/pages/DashboardIndicadores.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { TrendingUp, PieChart, Users, DollarSign, LogOutIcon } from "lucide-react";

export default function DashboardIndicadores() {
  const navigate = useNavigate();

  // Datos de ejemplo
  const ingresosMensuales = [
    { mes: "Ene", ingresos: 12000000 },
    { mes: "Feb", ingresos: 14500000 },
    { mes: "Mar", ingresos: 13300000 },
    { mes: "Abr", ingresos: 15000000 },
    { mes: "May", ingresos: 16200000 },
    { mes: "Jun", ingresos: 15500000 },
  ];

  const clientes = [
    { tipo: "Activos", valor: 210 },
    { tipo: "Inactivos", valor: 42 },
  ];

  const pagos = [
    { fecha: "Semana 1", completados: 25, pendientes: 5 },
    { fecha: "Semana 2", completados: 32, pendientes: 8 },
    { fecha: "Semana 3", completados: 29, pendientes: 4 },
    { fecha: "Semana 4", completados: 35, pendientes: 3 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="bg-white border-b shadow-sm px-6 py-3 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/dashboard-suscripcion")}
        >
          <div className="bg-indigo-600 text-white px-2 py-1 rounded font-bold text-xl">$</div>
          <h1 className="text-xl font-bold text-gray-800">QuickCollect</h1>
        </div>

        <nav className="flex items-center gap-6 text-sm">
          <Link to="/dashboard-suscripcion" className="text-gray-700 hover:text-indigo-600">
            Actividad
          </Link>
          <Link to="/dashboard" className="text-indigo-600 font-semibold">
            Dashboard
          </Link>
          <Link to="/reportes" className="text-gray-700 hover:text-indigo-600">
            Reportes
          </Link>
          <button
            className="flex items-center gap-1 text-gray-600 hover:text-red-600"
            onClick={() => navigate("/")}
          >
            <LogOutIcon size={16} /> Salir
          </button>
        </nav>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-1">Indicadores Generales</h2>
        <p className="text-gray-500 mb-8">
          Visualiza el desempeño financiero y operativo de tu negocio.
        </p>

        {/* TARJETAS DE MÉTRICAS */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-5 rounded-lg shadow flex items-center gap-4">
            <DollarSign className="text-green-600" size={28} />
            <div>
              <h3 className="text-sm text-gray-500">Ingresos Totales</h3>
              <p className="text-2xl font-bold text-green-600">$72.5M</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow flex items-center gap-4">
            <Users className="text-indigo-600" size={28} />
            <div>
              <h3 className="text-sm text-gray-500">Clientes Activos</h3>
              <p className="text-2xl font-bold text-indigo-600">210</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow flex items-center gap-4">
            <TrendingUp className="text-blue-600" size={28} />
            <div>
              <h3 className="text-sm text-gray-500">Crecimiento</h3>
              <p className="text-2xl font-bold text-blue-600">+12%</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow flex items-center gap-4">
            <PieChart className="text-yellow-600" size={28} />
            <div>
              <h3 className="text-sm text-gray-500">Pagos Completados</h3>
              <p className="text-2xl font-bold text-yellow-600">93%</p>
            </div>
          </div>
        </div>

        {/* GRÁFICOS */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ingresos Mensuales */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4 text-indigo-700">Ingresos Mensuales</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={ingresosMensuales}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="ingresos" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pagos Completados vs Pendientes */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4 text-indigo-700">Pagos por Semana</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={pagos}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fecha" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="completados" stroke="#22C55E" />
                <Line type="monotone" dataKey="pendientes" stroke="#EF4444" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* CLIENTES ACTIVOS / INACTIVOS */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4 text-indigo-700">Clientes Activos vs Inactivos</h3>
          <div className="flex gap-8 items-center">
            {clientes.map((c, index) => (
              <div
                key={index}
                className={`flex-1 text-center p-4 rounded-lg ${
                  c.tipo === "Activos" ? "bg-green-50" : "bg-gray-100"
                }`}
              >
                <p className="text-lg font-semibold text-gray-800">{c.tipo}</p>
                <p
                  className={`text-3xl font-bold ${
                    c.tipo === "Activos" ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  {c.valor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}


