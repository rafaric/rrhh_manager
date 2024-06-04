import { component$ } from "@builder.io/qwik";
import { Dash } from "../Icons/dash";
import { Empleados } from "../Icons/empleados";
import { Areas } from "../Icons/areas";
import { Asistencia } from "../Icons/asistencia";
import { Nomina } from "../Icons/nomina";
import { Empleos } from "../Icons/empleos";
import { Candidatos } from "../Icons/candidatos";
import { Planillas } from "../Icons/planillas";
import { Vacaciones } from "../Icons/vacaciones";
import { Empresa } from "../Icons/empresa"
import { Configuracion } from "../Icons/configuracion";

export const IconSelect = component$(
  ({ icono, active }: { icono: string; active: boolean }) => {
    return (
      <div>
        {icono === "Dashboard" && <Dash active={active} />}
        {icono === "Todos los empleados" && <Empleados active={active} />}
        {icono === "Areas" && <Areas active={active} />}
        {icono === "Asistencia" && <Asistencia active={active} />}
        {icono === "Nómina" && <Nomina active={active} />}
        {icono === "Empleos" && <Empleos active={active} />}
        {icono === "Candidatos" && <Candidatos active={active} />}
        {icono === "Planillas" && <Planillas active={active} />}
        {icono === "Vacaciones" && <Vacaciones active={active} />}
        {icono === "Empresa" && <Empresa active={active} />}
        {icono === "Configuraciones" && <Configuracion active={active} />}
      </div>
    );
  },
);
