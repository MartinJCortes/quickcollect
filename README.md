# 💰 QuickCollect

QuickCollect es una plataforma web diseñada para automatizar cobros recurrentes en pequeñas y medianas empresas. Su objetivo es reducir la morosidad, mejorar el flujo de caja y optimizar la gestión de pagos mediante recordatorios, reportes y herramientas de control financiero.

---

## 🛠️ Tecnologías utilizadas

QuickCollect está desarrollado con un stack moderno, orientado a rendimiento, escalabilidad y facilidad de mantenimiento:

| Componente | Tecnología | Explicación |
|------------|------------|------------|
| **Framework base** | **React + Vite** | React permite construir interfaces dinámicas y modernas. Vite acelera el desarrollo con su servidor ultrarrápido y empaquetado eficiente. |
| **Estilos** | **TailwindCSS** | Framework CSS que permite crear interfaces profesionales con clases utilitarias, manteniendo el código limpio y consistente. |
| **Ruteo** | **React Router** | Maneja la navegación interna sin recargar la página, ofreciendo una experiencia tipo SPA. |
| **Iconografía** | **Lucide-react** | Biblioteca de íconos moderna y liviana. |
| **Exportación de datos** | **SheetJS (XLSX)** | Permite exportar reportes a Excel con un clic. |
| **Control de versiones** | **Git + GitHub** | Utilizado para control de cambios, respaldo y colaboración. |

> _*(En futuras versiones se integrarán Wompi para pagos y Firebase Auth para seguridad)*_

---

## 🚀 Características principales

✅ **Actividad financiera** — Resumen del estado general de la cobranza  
✅ **Reportes filtrables** — Filtros por estado y fecha  
✅ **Exportación a Excel** — Descarga de reportes financieros  
✅ **Gestión de clientes** — Pagado, Pendiente, Vencido, Inactivo  
✅ **Registro e inicio de sesión**  
✅ **Layouts separados (público / administrativo)**  
✅ **Foco en reducir morosidad y aumentar flujo de caja**

---

## ⚙️ Instalación y ejecución del proyecto

Requisitos previos instalados:

- **Node.js (versión 18 o superior)**
- **NPM o Yarn**
- **Git**

### ▶️ 1. Clonar el repositorio


git clone https://github.com/TU_USUARIO/quickcollect.git
cd quickcollect

▶️ 2. Instalar dependencias
npm install

▶️ 3. Ejecutar en modo desarrollo
npm run dev


Luego abre en el navegador:

http://localhost:5173

🗺️ Roadmap del proyecto

Fase	Módulo	Estado

Fase 1	Vista pública, planes, portafolio, dashboard básico y reportes iniciales	✅ Completado

Fase 2	Registro real con autenticación (Firebase Auth)	🔄 En proceso

Fase 3	Integración con pagos en Colombia (Wompi / PSE)	🔜 Próximo

Fase 4	Notificaciones automáticas (Email / WhatsApp)	🔜 Pendiente

Fase 5	Multimoneda + Panel multiempresa	🔜 Pendiente

Fase 6	App móvil (React Native)	🕒 Futuro



QuickCollect seguirá evolucionando como plataforma de automatización de cobranza inteligente.

