export class Usuario {
    id?: number;
    email: string;
    nombre: string;
    nombre_usuario: string;
    password: string;

    constructor(email: string, nombre: string, nombre_usuario: string, password: string, id?: number) {
        this.id = id;
        this.email = email;
        this.nombre = nombre;
        this.nombre_usuario = nombre_usuario;
        this.password = password;
    }
}