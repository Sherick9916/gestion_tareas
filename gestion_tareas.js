const readlineSync = require(`readline-sync`);

class usuario {
    Nombre = ``;
    ID = 0;
    Correo_electronico = ``;
    Contrasena = ``;
}

class tarea {
    ID = 0;
    Fecha_entregado = Date ;
    Fecha_creacion = Date ;
    Fecha_limite = Date;
}

class proyecto {
    ID = 0;
    Nombre_proyecto = ``;
    Descripcion = ``;
    Fecha_inicio = Date;
}

class equipo {
    ID = 0;
    Nombre_equipo = ``;
    Descripcion = ``;
    Lista_usuarios_equipo = [];
    
}

class calendario {
    ID = 0;
    Fecha_eventos = Date;
    Lista_eventos = [];
    Descrición = ``;
}

const usuario1 = new usuario();
usuario1.Nombre = "Juan Perez";
usuario1.ID = 1;
usuario1.Correo_electronico = "juan@dominio.com";
usuario1.Contrasena = "contraseña1";

const usuario2 = new usuario();
usuario2.Nombre = "Maria Lopez";
usuario2.ID = 2;
usuario2.Correo_electronico = "maria@dominio.com";
usuario2.Contrasena = "contraseña2";

const usuario3 = new usuario();
usuario3.Nombre = "Pedro Ramirez";
usuario3.ID = 3;
usuario3.Correo_electronico = "pedro@dominio.com";
usuario3.Contrasena = "contraseña3";

const usuario4 = new usuario();
usuario4.Nombre = "Ana Garcia";
usuario4.ID = 4;
usuario4.Correo_electronico = "ana@dominio.com";
usuario4.Contrasena = "contraseña4";

const usuario5 = new usuario();
usuario5.Nombre = "Luisa Martinez";
usuario5.ID = 5;
usuario5.Correo_electronico = "luisa@dominio.com";
usuario5.Contrasena = "contraseña5";

const usuario6 = new usuario();
usuario6.Nombre = "Carlos Gomez";
usuario6.ID = 6;
usuario6.Correo_electronico = "carlos@dominio.com";
usuario6.Contrasena = "contraseña6";

const usuario7 = new usuario();
usuario7.Nombre = "Pablo Rodriguez";
usuario7.ID = 7;
usuario7.Correo_electronico = "pablo@dominio.com";
usuario7.Contrasena = "contraseña7";

const usuario8 = new usuario();
usuario8.Nombre = "Elena Fernandez";
usuario8.ID = 8;
usuario8.Correo_electronico = "elena@dominio.com";
usuario8.Contrasena = "contraseña8";

const usuario9 = new usuario();
usuario9.Nombre = "Sofia Sanchez";
usuario9.ID = 9;
usuario9.Correo_electronico = "sofia@dominio.com";
usuario9.Contrasena = "contraseña9";

const usuario10 = new usuario();
usuario10.Nombre = "Diego Herrera";
usuario10.ID = 10;
usuario10.Correo_electronico = "diego@dominio.com";
usuario10.Contrasena = "contraseña10";

const usuario11 = new usuario();
usuario11.Nombre = "Laura Jimenez";
usuario11.ID = 11;
usuario11.Correo_electronico = "laura@dominio.com";
usuario11.Contrasena = "contraseña11";

const usuario12 = new usuario();
usuario12.Nombre = "Javier Castro";
usuario12.ID = 12;
usuario12.Correo_electronico = "javier@dominio.com";
usuario12.Contrasena = "contraseña12";

const usuario13 = new usuario();
usuario13.Nombre = "Monica Alvarez";
usuario13.ID = 13;
usuario13.Correo_electronico = "monica@dominio.com";
usuario13.Contrasena = "contraseña13";

const usuario14 = new usuario();
usuario14.Nombre = "Raul Moreno";
usuario14.ID = 14;
usuario14.Correo_electronico = "raul@dominio.com";
usuario14.Contrasena = "contraseña14";

const usuario15 = new usuario();
usuario15.Nombre = "Carmen Navarro";
usuario15.ID = 15;
usuario15.Correo_electronico = "carmen@dominio.com";
usuario15.Contrasena = "contraseña15";

const usuarios_lista = [usuario1, usuario2, usuario3, usuario4, usuario5, usuario6, usuario7, usuario8, usuario9, usuario10, 
    usuario11, usuario12, usuario13, usuario14, usuario15
];
// Ejercio 1 usuarios
for (let i = 0; i < usuarios_lista.length; i++){
    const usuario_lista = usuarios_lista[i];
    if(usuario_lista.Contrasena.length < 8){
        console.info(`contraseña no cumple con los parametros de seguridad`); 
    }else{
        console.info(`contraseña valida`);
    }    
}
// Ejercio 2 usuarios
for (let i = 0; i < usuarios_lista.length; i++){
    const usuario_lista_nom = usuarios_lista[i];
    if(usuario_lista_nom.Nombre.length < 3){
        console.info(`El nombre no puede tener menos de 3 caracteres`); 
    }else{
        console.info(`Nombre correcto`);
    }    
}
// Ejercio 3 usuarios
const usuarios_lista_nombre = [
    usuario1.Nombre, usuario2.Nombre, usuario3.Nombre, usuario4.Nombre, usuario5.Nombre, usuario6.Nombre, usuario7.Nombre,
    usuario8.Nombre, usuario9.Nombre, usuario10.Nombre, usuario11.Nombre, usuario12.Nombre, usuario13.Nombre, 
    usuario14.Nombre, usuario15.Nombre
];
usuarios_lista_nombre.sort();
console.info(usuarios_lista_nombre);

// CLASE TAREA
const tarea1 = new tarea();
tarea1.ID = 1;
tarea1.Fecha_entregado = new Date("2024-03-31T15:00:00");
tarea1.Fecha_creacion = new Date("2024-03-15T08:00:00");
tarea1.Fecha_limite = new Date("2024-03-31T14:00:00");

const tarea2 = new tarea();
tarea2.ID = 2;
tarea2.Fecha_entregado = new Date("2024-03-30T08:00:00");
tarea2.Fecha_creacion = new Date("2024-03-14T08:00:00");
tarea2.Fecha_limite = new Date("2024-03-30T08:00:00");

const tarea3 = new tarea();
tarea3.ID = 3;
tarea3.Fecha_entregado = new Date("2024-03-29T08:00:00");
tarea3.Fecha_creacion = new Date("2024-03-13T08:00:00");
tarea3.Fecha_limite = new Date("2024-03-29T08:00:00");

const tarea4 = new tarea();
tarea4.ID = 4;
tarea4.Fecha_entregado = new Date("2024-03-28T08:00:00");
tarea4.Fecha_creacion = new Date("2024-03-12T08:00:00");
tarea4.Fecha_limite = new Date("2024-03-28T08:00:00");

const tarea5 = new tarea();
tarea5.ID = 5;
tarea5.Fecha_entregado = new Date("2024-03-27T08:00:00");
tarea5.Fecha_creacion = new Date("2024-03-11T08:00:00");
tarea5.Fecha_limite = new Date("2024-03-27T08:00:00");

const tarea6 = new tarea();
tarea6.ID = 6;
tarea6.Fecha_entregado = new Date("2024-03-26T08:00:00");
tarea6.Fecha_creacion = new Date("2024-03-10T08:00:00");
tarea6.Fecha_limite = new Date("2024-03-26T08:00:00");

const tarea7 = new tarea();
tarea7.ID = 7;
tarea7.Fecha_entregado = new Date("2024-03-25T08:00:00");
tarea7.Fecha_creacion = new Date("2024-03-09T08:00:00");
tarea7.Fecha_limite = new Date("2024-03-25T08:00:00");

const tarea8 = new tarea();
tarea8.ID = 8;
tarea8.Fecha_entregado = new Date("2024-03-24T08:00:00");
tarea8.Fecha_creacion = new Date("2024-03-31T08:00:00");
tarea8.Fecha_limite = new Date("2024-03-24T08:00:00");

const tarea9 = new tarea();
tarea9.ID = 9;
tarea9.Fecha_entregado = new Date("2024-03-23T08:00:00");
tarea9.Fecha_creacion = new Date("2024-03-07T08:00:00");
tarea9.Fecha_limite = new Date("2024-03-23T08:00:00");

const tarea10 = new tarea();
tarea10.ID = 10;
tarea10.Fecha_entregado = new Date("2024-03-22T08:00:00");
tarea10.Fecha_creacion = new Date("2024-03-06T08:00:00");
tarea10.Fecha_limite = new Date("2024-03-22T08:00:00");

const tarea11 = new tarea();
tarea11.ID = 11;
tarea11.Fecha_entregado = new Date("2024-03-21T08:00:00");
tarea11.Fecha_creacion = new Date("2024-03-05T08:00:00");
tarea11.Fecha_limite = new Date("2024-03-21T08:00:00");

const tarea12 = new tarea();
tarea12.ID = 12;
tarea12.Fecha_entregado = new Date("2024-03-20T08:00:00");
tarea12.Fecha_creacion = new Date("2024-03-04T08:00:00");
tarea12.Fecha_limite = new Date("2024-03-20T08:00:00");

const tarea13 = new tarea();
tarea13.ID = 13;
tarea13.Fecha_entregado = new Date("2024-03-19T08:00:00");
tarea13.Fecha_creacion = new Date("2024-03-03T08:00:00");
tarea13.Fecha_limite = new Date("2024-03-19T08:00:00");

const tarea14 = new tarea();
tarea14.ID = 14;
tarea14.Fecha_entregado = new Date("2024-03-18T08:00:00");
tarea14.Fecha_creacion = new Date("2024-03-02T08:00:00");
tarea14.Fecha_limite = new Date("2024-03-18T08:00:00");

const tarea15 = new tarea();
tarea15.ID = 15;
tarea15.Fecha_entregado = new Date("2024-03-17T08:00:00");
tarea15.Fecha_creacion = new Date("2024-03-01T08:00:00");
tarea15.Fecha_limite = new Date("2024-03-17T08:00:00");

// Ejercio 1 tarea
function estaVencida (tarea){
    if(tarea.Fecha_limite < tarea.Fecha_entregado){
        return `vencida`;
    }else{
        return `entregada a tiempo`;
    }
}

console.log("Tarea 1 ", estaVencida(tarea1));
console.log("Tarea 2 ", estaVencida(tarea2));
console.log("Tarea 3 ", estaVencida(tarea3));
console.log("Tarea 4 ", estaVencida(tarea4));
console.log("Tarea 5 ", estaVencida(tarea5));
console.log("Tarea 6 ", estaVencida(tarea6));
console.log("Tarea 7 ", estaVencida(tarea7));
console.log("Tarea 8 ", estaVencida(tarea8));
console.log("Tarea 9 ", estaVencida(tarea9));
console.log("Tarea 10 ", estaVencida(tarea10));
console.log("Tarea 11 ", estaVencida(tarea11));
console.log("Tarea 12 ", estaVencida(tarea12));
console.log("Tarea 13 ", estaVencida(tarea13));
console.log("Tarea 14 ", estaVencida(tarea14));
console.log("Tarea 15 ", estaVencida(tarea15));

// Ejercio 2 tarea
function progreso (tarea){
    if(tarea.Fecha_creacion < new Date()){
        return `Fuera de la fecha `;
    }else{
        return `Dentro del tiempo establecido`;
    }
}

console.log("Tarea 1 ", progreso(tarea1));
console.log("Tarea 2 ", progreso(tarea2));
console.log("Tarea 3 ", progreso(tarea3));
console.log("Tarea 4 ", progreso(tarea4));
console.log("Tarea 5 ", progreso(tarea5));
console.log("Tarea 6 ", progreso(tarea6));
console.log("Tarea 7 ", progreso(tarea7));
console.log("Tarea 8 ", progreso(tarea8));
console.log("Tarea 9 ", progreso(tarea9));
console.log("Tarea 10 ", progreso(tarea10));
console.log("Tarea 11 ", progreso(tarea11));
console.log("Tarea 12 ", progreso(tarea12));
console.log("Tarea 13 ", progreso(tarea13));
console.log("Tarea 14 ", progreso(tarea14));
console.log("Tarea 15 ", progreso(tarea15));

// Ejercio 3 tarea
function asignarPrioridad(tarea) {
    const diasRestantes = Math.floor((tarea.Fecha_limite - new Date()) / (1000 * 60 * 60 * 24));
    if (diasRestantes < 0) {
        return "Vencida";
    } else if (diasRestantes < 3) {
        return "Alta";
    } else if (diasRestantes < 7) {
        return "Media";
    } else {
        return "Baja";
    }
}

console.log("Tarea 1 ", asignarPrioridad(tarea1));
console.log("Tarea 2 ", asignarPrioridad(tarea2));
console.log("Tarea 3 ", asignarPrioridad(tarea3));
console.log("Tarea 4 ", asignarPrioridad(tarea4));
console.log("Tarea 5 ", asignarPrioridad(tarea5));
console.log("Tarea 6 ", asignarPrioridad(tarea6));
console.log("Tarea 7 ", asignarPrioridad(tarea7));
console.log("Tarea 8 ", asignarPrioridad(tarea8));
console.log("Tarea 9 ", asignarPrioridad(tarea9));
console.log("Tarea 10 ", asignarPrioridad(tarea10));
console.log("Tarea 11 ", asignarPrioridad(tarea11));
console.log("Tarea 12 ", asignarPrioridad(tarea12));
console.log("Tarea 13 ", asignarPrioridad(tarea13));
console.log("Tarea 14 ", asignarPrioridad(tarea14));
console.log("Tarea 15 ", asignarPrioridad(tarea15));

//Pyotecto
const proyecto1 = new proyecto();
proyecto1.ID = 1;
proyecto1.Nombre_proyecto = "Proyecto A";
proyecto1.Descripcion = "Descripción del Proyecto A";
proyecto1.Fecha_inicio = new Date("2024-03-31");

const proyecto2 = new proyecto();
proyecto2.ID = 2;
proyecto2.Nombre_proyecto = "Proyecto B";
proyecto2.Descripcion = "Descripción del Proyecto B";
proyecto2.Fecha_inicio = new Date("2024-03-31");

const proyecto3 = new proyecto();
proyecto3.ID = 3;
proyecto3.Nombre_proyecto = "Proyecto C";
proyecto3.Descripcion = "Descripción del Proyecto C";
proyecto3.Fecha_inicio = new Date("2024-03-31");

const proyecto4 = new proyecto();
proyecto4.ID = 4;
proyecto4.Nombre_proyecto = "Proyecto D";
proyecto4.Descripcion = "Descripción del Proyecto D";
proyecto4.Fecha_inicio = new Date("2024-03-31");

const proyecto5 = new proyecto();
proyecto5.ID = 5;
proyecto5.Nombre_proyecto = "Proyecto E";
proyecto5.Descripcion = "Descripción del Proyecto E";
proyecto5.Fecha_inicio = new Date("2024-03-31");

const proyecto6 = new proyecto();
proyecto6.ID = 6;
proyecto6.Nombre_proyecto = "Proyecto F";
proyecto6.Descripcion = "Descripción del Proyecto F";
proyecto6.Fecha_inicio = new Date("2024-03-31");

const proyecto7 = new proyecto();
proyecto7.ID = 7;
proyecto7.Nombre_proyecto = "Proyecto G";
proyecto7.Descripcion = "Descripción del Proyecto G";
proyecto7.Fecha_inicio = new Date("2024-03-31");

const proyecto8 = new proyecto();
proyecto8.ID = 8;
proyecto8.Nombre_proyecto = "Proyecto H";
proyecto8.Descripcion = "Descripción del Proyecto H";
proyecto8.Fecha_inicio = new Date("2024-03-31");

const proyecto9 = new proyecto();
proyecto9.ID = 9;
proyecto9.Nombre_proyecto = "Proyecto I";
proyecto9.Descripcion = "Descripción del Proyecto I";
proyecto9.Fecha_inicio = new Date("2024-03-31");

const proyecto10 = new proyecto();
proyecto10.ID = 10;
proyecto10.Nombre_proyecto = "Proyecto J";
proyecto10.Descripcion = "Descripción del Proyecto J";
proyecto10.Fecha_inicio = new Date("2024-03-31");

const proyecto11 = new proyecto();
proyecto11.ID = 11;
proyecto11.Nombre_proyecto = "Proyecto K";
proyecto11.Descripcion = "Descripción del Proyecto K";
proyecto11.Fecha_inicio = new Date("2024-03-31");

const proyecto12 = new proyecto();
proyecto12.ID = 12;
proyecto12.Nombre_proyecto = "";
proyecto12.Descripcion = "Descripción del Proyecto L";
proyecto12.Fecha_inicio = new Date("2024-03-31");

const proyecto13 = new proyecto();
proyecto13.ID = 13;
proyecto13.Nombre_proyecto = "Proyecto M";
proyecto13.Descripcion = "Descripción del Proyecto M";
proyecto13.Fecha_inicio = new Date("2024-03-31");

const proyecto14 = new proyecto();
proyecto14.ID = 14;
proyecto14.Nombre_proyecto = "Proyecto N";
proyecto14.Descripcion = "Descripción del Proyecto N";
proyecto14.Fecha_inicio = new Date("2024-03-31");

const proyecto15 = new proyecto();
proyecto15.ID = 15;
proyecto15.Nombre_proyecto = "Proyecto O";
proyecto15.Descripcion = "Descripción del Proyecto O";
proyecto15.Fecha_inicio = new Date("2024-04-31");

// Ejercicio 1 proyecto
function finalizado_proyecto (proyecto){
    if(proyecto.Fecha_inicio < new Date()){
        return `Proyecto finalizado `;
    }else{
        return `Proyecto en curso`;
    }
}

console.log("Proyecto A ", finalizado_proyecto(proyecto1));
console.log("Proyecto B ", finalizado_proyecto(proyecto2));
console.log("Proyecto C ", finalizado_proyecto(proyecto3));
console.log("Proyecto D ", finalizado_proyecto(proyecto4));
console.log("Proyecto E ", finalizado_proyecto(proyecto5));
console.log("Proyecto F ", finalizado_proyecto(proyecto6));
console.log("Proyecto G ", finalizado_proyecto(proyecto7));
console.log("Proyecto H ", finalizado_proyecto(proyecto8));
console.log("Proyecto I ", finalizado_proyecto(proyecto9));
console.log("Proyecto J ", finalizado_proyecto(proyecto10));
console.log("Proyecto K ", finalizado_proyecto(proyecto11));
console.log("Proyecto L ", finalizado_proyecto(proyecto12));
console.log("Proyecto M ", finalizado_proyecto(proyecto13));
console.log("Proyecto N ", finalizado_proyecto(proyecto14));
console.log("Proyecto O ", finalizado_proyecto(proyecto15));

// Ejercicio 2 proyecto
const list_proyecto = [
    proyecto1, proyecto2, proyecto3, proyecto4, proyecto5, proyecto6, proyecto7, proyecto8, proyecto9, proyecto10, proyecto11,
    proyecto12, proyecto13, proyecto14, proyecto15
]


for (let i = 0; i < list_proyecto.length; i++){
    const list_proyecto_nom = list_proyecto[i];
    if(list_proyecto_nom.Nombre_proyecto.length == ``){
        console.info(`El nombre del proyecto no puede estar vacio`); 
    }else{
        console.info(`Nombre correcto`);
    }    
}


// Ejercicio 3 proyecto
function finalizado_proyecto_cont(proyecto) {
    return proyecto.Fecha_inicio < new Date();
}

let proyectos_finalizados = 0;
for (let i = 0; i < list_proyecto.length; i++) {
    if (finalizado_proyecto_cont(list_proyecto[i])) {
        proyectos_finalizados++;
    }
}

console.log(`Cantidad de proyectos finalizados: ${proyectos_finalizados}`);

// clase Equipo
const equipo1 = new equipo();
equipo1.ID = 1;
equipo1.Nombre_equipo = "Los titanes";
equipo1.Descripcion = "Descripción del equipo 1";
equipo1.Lista_usuarios_equipo = [usuario1, usuario2, usuario3];

const equipo2 = new equipo();
equipo2.ID = 2;
equipo2.Nombre_equipo = "Los Dragones";
equipo2.Descripcion = "Descripción del equipo 2";
equipo2.Lista_usuarios_equipo = [usuario4, usuario5, usuario6];

const equipo3 = new equipo();
equipo3.ID = 3;
equipo3.Nombre_equipo = "Los Lobos";
equipo3.Descripcion = "Descripción del equipo 3";
equipo3.Lista_usuarios_equipo = [ usuario7, usuario8, usuario9];

const equipo4 = new equipo();
equipo4.ID = 4;
equipo4.Nombre_equipo = "Los Tigres";
equipo4.Descripcion = "Descripción del equipo 4";
equipo4.Lista_usuarios_equipo = [usuario10, 
    usuario11, usuario12];

const equipo5 = new equipo();
equipo5.ID = 5;
equipo5.Nombre_equipo = "Los Águilas";
equipo5.Descripcion = "Descripción del equipo 5";
equipo5.Lista_usuarios_equipo = [ usuario13, usuario14, usuario15];

const equipo6 = new equipo();
equipo6.ID = 6;
equipo6.Nombre_equipo = "Los Leones";
equipo6.Descripcion = "Descripción del equipo 6";
equipo6.Lista_usuarios_equipo = [usuario1, usuario3,  usuario5];

const equipo7 = new equipo();
equipo7.ID = 7;
equipo7.Nombre_equipo = "Los Cazadores";
equipo7.Descripcion = "Descripción del equipo 7";
equipo7.Lista_usuarios_equipo = [usuario2, usuario4, usuario6];

const equipo8 = new equipo();
equipo8.ID = 8;
equipo8.Nombre_equipo = "Los Tormenta";
equipo8.Descripcion = "Descripción del equipo 8";
equipo8.Lista_usuarios_equipo = [ usuario7,  usuario9, usuario11];

const equipo9 = new equipo();
equipo9.ID = 9;
equipo9.Nombre_equipo = "Los Centauro";
equipo9.Descripcion = "Descripción del equipo 9";
equipo9.Lista_usuarios_equipo = [ usuario8, usuario10, usuario12];

const equipo10 = new equipo();
equipo10.ID = 10;
equipo10.Nombre_equipo = "Los Fenix";
equipo10.Descripcion = "Descripción del equipo 10";
equipo10.Lista_usuarios_equipo = [usuario1, usuario13, usuario15];

const equipo11 = new equipo();
equipo11.ID = 11;
equipo11.Nombre_equipo = "Los Guerreros";
equipo11.Descripcion = "Descripción del equipo 11";
equipo11.Lista_usuarios_equipo =  [usuario2,  usuario4, usuario14 ];

const equipo12 = new equipo();
equipo12.ID = 12;
equipo12.Nombre_equipo = "Los Exploradores";
equipo12.Descripcion = "Descripción del equipo 12";
equipo12.Lista_usuarios_equipo = [ usuario3, usuario5, usuario7];

const equipo13 = new equipo();
equipo13.ID = 13;
equipo13.Nombre_equipo = "Los Sabuesos";
equipo13.Descripcion = "Descripción del equipo 13";
equipo13.Lista_usuarios_equipo = [usuario8, usuario10, usuario12];

const equipo14 = new equipo();
equipo14.ID = 14;
equipo14.Nombre_equipo = "Los Jinetes";
equipo14.Descripcion = "Descripción del equipo 14";
equipo14.Lista_usuarios_equipo = [usuario11, usuario13, usuario15];

const equipo15 = new equipo();
equipo15.ID = 15;
equipo15.Nombre_equipo = "Los Halcones";
equipo15.Descripcion = "Descripción del equipo 15";
equipo15.Lista_usuarios_equipo = [usuario10, usuario12, usuario14];

//Ejercicio 1 Equipo
const list_nom_equipo = [
    equipo1.Nombre_equipo, equipo2.Nombre_equipo, equipo3.Nombre_equipo, equipo4.Nombre_equipo, equipo5.Nombre_equipo, equipo6.Nombre_equipo, equipo7.Nombre_equipo,
    equipo8.Nombre_equipo, equipo9.Nombre_equipo, equipo10.Nombre_equipo, equipo11.Nombre_equipo, equipo12.Nombre_equipo, equipo13.Nombre_equipo, 
    equipo14.Nombre_equipo, equipo15.Nombre_equipo
];
list_nom_equipo.sort();
console.info(list_nom_equipo);

//Ejercicio 2 Equipo

//Ejercicio 3 Equipo

const evento1 = new calendario();
evento1.ID = 1;
evento1.Fecha_eventos = new Date("2024-04-01");
evento1.Lista_eventos = ["evento1"];
evento1.Descrición = "Descripción evento 1";

const evento2 = new calendario();
evento2.ID = 2;
evento2.Fecha_eventos = new Date("2024-04-02");
evento2.Lista_eventos = ["evento2"];
evento2.Descrición = "Descripción evento 2";

const evento3 = new calendario();
evento3.ID = 3;
evento3.Fecha_eventos = new Date("2024-04-03");
evento3.Lista_eventos = ["evento3"];
evento3.Descrición = "Descripción evento 3";

const evento4 = new calendario();
evento4.ID = 4;
evento4.Fecha_eventos = new Date("2024-04-04");
evento4.Lista_eventos = ["evento4"];
evento4.Descrición = "Descripción evento 4";

const evento5 = new calendario();
evento5.ID = 5;
evento5.Fecha_eventos = new Date("2024-04-05");
evento5.Lista_eventos = ["evento5"];
evento5.Descrición = "Descripción evento 5";

const evento6 = new calendario();
evento6.ID = 6;
evento6.Fecha_eventos = new Date("2024-04-06");
evento6.Lista_eventos = ["evento6"];
evento6.Descrición = "Descripción evento 6";

const evento7 = new calendario();
evento7.ID = 7;
evento7.Fecha_eventos = new Date("2024-04-07");
evento7.Lista_eventos = ["evento7"];
evento7.Descrición = "Descripción evento 7";

const evento8 = new calendario();
evento8.ID = 8;
evento8.Fecha_eventos = new Date("2024-04-08");
evento8.Lista_eventos = ["evento8"];
evento8.Descrición = "Descripción evento 8";

const evento9 = new calendario();
evento9.ID = 9;
evento9.Fecha_eventos = new Date("2024-04-09");
evento9.Lista_eventos = ["evento9"];
evento9.Descrición = "Descripción evento 9";

const evento10 = new calendario();
evento10.ID = 10;
evento10.Fecha_eventos = new Date("2024-04-10");
evento10.Lista_eventos = ["evento10"];
evento10.Descrición = "Descripción evento 10";

const evento11 = new calendario();
evento11.ID = 11;
evento11.Fecha_eventos = new Date("2024-04-11");
evento11.Lista_eventos = ["evento11"];
evento11.Descrición = "Descripción evento 11";

const evento12 = new calendario();
evento12.ID = 12;
evento12.Fecha_eventos = new Date("2024-04-12");
evento12.Lista_eventos = ["evento12"];
evento12.Descrición = "Descripción evento 12";

const evento13 = new calendario();
evento13.ID = 13;
evento13.Fecha_eventos = new Date("2024-04-13");
evento13.Lista_eventos = ["evento13"];
evento13.Descrición = "Descripción evento 13";

const evento14 = new calendario();
evento14.ID = 14;
evento14.Fecha_eventos = new Date("2024-04-15");
evento14.Lista_eventos = ["evento14"];
evento14.Descrición = "Descripción evento 14";

const evento15 = new calendario();
evento15.ID = 15;
evento15.Fecha_eventos = new Date("2024-04-15");
evento15.Lista_eventos = ["evento15"];
evento15.Descrición = "Descripción evento 15";

//Ejercicio 1 Calendario
const eventos_list = [evento1, evento2, evento3, evento4, evento5, evento6, evento7, evento8, evento9, evento10, evento11, evento12, evento13, evento14, evento15];

for (let i = 0; i < eventos_list.length; i++) {
    const eventoActual = eventos_list[i];
    for (let j = i + 1; j < eventos_list.length; j++) {
        const otroEvento = eventos_list[j];
        if (eventoActual.Fecha_eventos.getTime() === otroEvento.Fecha_eventos.getTime()) {
            console.log(`El evento ${eventoActual.ID} en la fecha ${eventoActual.Fecha_eventos.toISOString().split('T')[0]} ya está ocupado.`);
        }
    }
}
