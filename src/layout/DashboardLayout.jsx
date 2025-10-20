// src/layout/DashboardLayout.jsx
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function DashboardLayout() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* NAVBAR DASHBOARD */}
      <header className="bg-white border-b shadow-sm px-6 py-3 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/dashboard-suscripcion")}
        >
          <div className="bg-indigo-600 text-white px-2 py-1 rounded font-bold text-xl">
            $
          </div>
          <h1 className="text-xl font-bold text-gray-800">QuickCollect</h1>
        </div>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            to="/dashboard-suscripcion"
            className="text-gray-700 hover:text-indigo-600"
          >
            Actividad
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-indigo-600"
          >
            Dashboard
          </Link>
         
          <button
            onClick={() => navigate("/")}
            className="bg-gray-200 px-4 py-1 rounded hover:bg-gray-300"
          >
            Cerrar sesión
          </button>
        </nav>
      </header>

      {/* CONTENIDO CENTRAL */}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
