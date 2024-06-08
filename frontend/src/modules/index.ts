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

export interface Holiday {
  id: string;
  estado: string;
  motivo: string;
  tipo: string;
  fecha_inicio: string;
  fecha_fin: string;
  usuarioId: string;
  Usuario?: User;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface Department {
  nombre: string;
  descripcion: string;
  id: string;
}
