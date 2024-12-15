import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  content: any = {
    "Seccion1": {
      "title": "Introducción",
      "content": "Angular es un framework de desarrollo de aplicaciones web de código abierto mantenido por Google. Está diseñado para facilitar la creación de aplicaciones web dinámicas y de una sola página (SPA, por sus siglas en inglés). Aquí tienes una breve introducción a sus características y componentes clave:"
    },
    "Seccion2": {
      "title": "Características Principales de Angular",
      "content": [
        "Componentes: Angular utiliza una arquitectura basada en componentes. Cada componente encapsula una parte de la interfaz de usuario y su lógica asociada. Los componentes se pueden reutilizar y componer para construir aplicaciones complejas.",
        "Templates: Los componentes en Angular utilizan plantillas HTML para definir la estructura de la interfaz de usuario. Las plantillas pueden incluir directivas y enlaces de datos para interactuar con el modelo de datos del componente.",
        "Data Binding: Angular proporciona varias formas de enlazar datos entre el modelo y la vista, incluyendo el enlace de datos unidireccional y bidireccional. Esto facilita la sincronización de datos entre la interfaz de usuario y la lógica de la aplicación.",
        "Directivas: Las directivas son instrucciones especiales en el HTML que pueden modificar el DOM. Angular incluye directivas estructurales como *ngIf y *ngFor, así como directivas de atributos como ngClass y ngStyle.",
        "Servicios e Inyección de Dependencias: Angular utiliza servicios para encapsular la lógica de negocio y la comunicación con APIs. La inyección de dependencias facilita la gestión y el uso de estos servicios en los componentes.",
        "Ruteo: Angular incluye un módulo de enrutamiento que permite definir rutas para navegar entre diferentes vistas o componentes de la aplicación. Esto es esencial para construir aplicaciones de una sola página.",
        "Formularios: Angular proporciona dos enfoques para trabajar con formularios: formularios reactivos y formularios basados en plantillas. Ambos enfoques facilitan la validación y el manejo de datos de formularios.",
        "HTTP Client: Angular incluye un cliente HTTP para realizar solicitudes a servidores web y APIs. Esto facilita la comunicación con servicios backend y la manipulación de datos remotos."
      ]
    },
    "Seccion3": {
      "title": "Instalación",
      "content": [
        "Para empezar a trabajar con Angular, necesitas tener Node.js y npm instalados en tu sistema. Puedes descargar e instalar Node.js desde su sitio web oficial.",
        "Una vez que tengas Node.js instalado, puedes instalar Angular CLI (Command Line Interface) utilizando npm. Angular CLI es una herramienta de línea de comandos que facilita la creación, el desarrollo y la implementación de aplicaciones Angular.",
        "Para instalar Angular CLI, abre una terminal y ejecuta el siguiente comando: `npm install -g @angular/cli`",
        "Una vez que Angular CLI esté instalado, puedes crear un nuevo proyecto Angular utilizando el siguiente comando: `ng new my-app`",
        "Este comando creará una nueva carpeta llamada my-app con la estructura inicial de un proyecto Angular. Para iniciar el servidor de desarrollo y ver la aplicación en tu navegador, puedes ejecutar el siguiente comando: `cd my-app && ng serve --open",
        "Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador predeterminado. Ahora puedes empezar a desarrollar tu aplicación Angular y ver los cambios en tiempo real."
      ]
    },
    "Seccion4": {
      "title": "Creacion del proyecto",
      "content": "This is the starting steps content"
    },
    "Seccion5": {
      "title": "Despedida",
      "content": "This is the about content"
    }
  };

  contentKeys(): string[] {
    return Object.keys(this.content);
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }
}