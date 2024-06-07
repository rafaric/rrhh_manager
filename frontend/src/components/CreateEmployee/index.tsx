/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import type { StepperRefAttributes } from "primereact/stepper";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { useRef, useState } from "react";
import { FormNewEmployee } from "./FormNewEmployee";
import { FormNewContract } from "./FormNewContract";
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";
import type { User } from "~/modules";

export const CreateEmployee = qwikify$(
  () => {
    const stepperRef = useRef<StepperRefAttributes | null>(null);
    const [disableNext, setDisableNext] = useState(true);
    const [employeeData, setEmployeeData] = useState<User>({
      id: "",
      email: "",
      password: "",
      rol: "",
      nombre: "",
      apellido: "",
      dni: 0,
    });
    return (
      <div className="flex justify-center">
        <Stepper ref={stepperRef} linear>
          <StepperPanel header="Datos personales">
            <h2 className="mb-3 text-lg">
              Crea una cuenta con los datos de nuevo empleado
            </h2>
            <div className="flex-column h-12rem m-auto flex w-fit">
              <div className="justify-content-center align-items-center flex flex-auto  font-medium">
                <FormNewEmployee
                  setDisableNext={setDisableNext}
                  setEmployeeData={setEmployeeData}
                />
              </div>
            </div>
            <div className="justify-content-end flex pt-4">
              <button
                title={
                  disableNext ? "Completa el formulario para continuar" : ""
                }
                disabled={disableNext}
                type="button"
                className="ml-auto flex items-center gap-1 rounded-xl bg-primary p-4 text-light disabled:cursor-not-allowed disabled:bg-light disabled:text-dark"
                onClick={() => stepperRef.current?.nextCallback()}
              >
                Siguiente
              </button>
            </div>
          </StepperPanel>
          <StepperPanel header="Contrato">
            <h2 className="mb-3 text-lg">Crea un nuevo contrato</h2>
            <div className="flex-column h-12rem m-auto flex w-fit">
              <div className="justify-content-center align-items-center flex flex-auto  font-medium">
                <FormNewContract employeeData={employeeData} />
              </div>
            </div>
            <div className="justify-content-end flex pt-4">
              <a
                href="/empleados"
                className="ml-auto flex items-center gap-1 rounded-xl p-4 text-dark underline"
              >
                Salir
              </a>
            </div>
          </StepperPanel>
        </Stepper>
      </div>
    );
  },
  { eagerness: "load" },
);
