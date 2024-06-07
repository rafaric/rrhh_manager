export function getSectionTitle(pathname: string) {
  switch (pathname) {
    case "/":
      return "Dashboard";
    case "/empleados/":
      return "Todos los empleados";
    case "/empleados/nuevo-empleado/":
      return "Registrar nuevo empleado";
    case "/areas/":
      return "Áreas";
    case "/asistencia/":
      return "Asistencia";
    case "/nomina/":
      return "Nómina";
    case "/empleos/":
      return "Empleos disponibles";
    case "/candidatos/":
      return "Candidatos";
    case "/planillas/":
      return "Planillas";
    case "/configuraciones/":
      return "Configuración";
    case "/vacaciones/":
      return "Vacaciones";
    case "/empresa/":
      return "Datos de la empresa";
    case "/empresa/editar/":
      return "Editar datos de la empresa";
    default:
      return "Unknown Section";
  }
}
