export interface User {
  id: string;
  email: string;
  password: string;
  rol: string;
  nombre: string;
  apellido: string;
  dni: number;
  telefono?: string;
  direccion?: string;
  ciudad?: string;
  codigo_postal?: string;
  contrato_id?: string;
  empresa_id?: string;
  solicitudLicencia_id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  contrato?: string;
  empresa?: string;
  solicitud?: string;
}
