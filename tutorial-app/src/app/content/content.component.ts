import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from '../welcome-message/welcome-message.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, WelcomeMessageComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  content: any = {
    "Seccion1": {
      "title": "Introducción",
      "content": "Angular es un framework de desarrollo de aplicaciones web de código abierto mantenido por Google. Está diseñado para facilitar la creación de aplicaciones web dinámicas y de una sola página (SPA, por sus siglas en inglés). Aquí encontrarás una breve introducción a sus características y componentes clave."
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
        "Para instalar Angular CLI, abre una terminal y ejecuta el siguiente comando: <code>npm install -g @angular/cli</code>",
        "Una vez que Angular CLI esté instalado, puedes crear un nuevo proyecto Angular utilizando el siguiente comando: <code>ng new my-app</code>",
        "Este comando creará una nueva carpeta llamada my-app con la estructura inicial de un proyecto Angular. Para iniciar el servidor de desarrollo y ver la aplicación en tu navegador, puedes ejecutar el siguiente comando: <code>cd my-app && ng serve --open</code>",
        "Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador predeterminado. Ahora puedes empezar a desarrollar tu aplicación Angular y ver los cambios en tiempo real."
      ]
    },
    "Seccion4": {
      "title": "Creacion de este proyecto",
      "content": [
        "Este proyecto fue creado utilizando Angular CLI. Para crear este proyecto, se ejecutaron los siguientes comandos:",
        "<code>ng new tutorial-app</code> para crear un nuevo proyecto Angular.",
        "<code>ng generate component head</code> para generar un componente llamado HeadComponent.",
        "<code>ng generate component content</code> para generar un componente llamado ContentComponent.",
        "Estos comandos generaron la estructura inicial del proyecto y los componentes necesarios para mostrar el contenido de la aplicación. Luego, se modificaron los archivos HTML y CSS de los componentes para personalizar el diseño y el estilo de la aplicación.",
        "Finalmente, se agregó el contenido de la aplicación en el archivo content.component.ts y se utilizó la directiva *ngFor en el archivo content.component.html para mostrar dinámicamente el contenido de cada sección."
      ]
    },
    "Seccion5": {
      "title": "Descripcion del código este proyecto",
      "paragraph": [
        "Este proyecto utiliza componentes para organizar la interfaz de usuario y mostrar el contenido de la aplicación. Cada componente tiene su propio archivo HTML, CSS y TypeScript para definir la estructura, el estilo y la lógica del componente.",
        "El componente content.component define la clase ContentComponent que contiene el contenido de la aplicación en forma de objetos JSON. Cada objeto JSON representa una sección de la aplicación con un título y un contenido asociado.",
        "El archivo content.component.html utiliza la directiva *ngFor para iterar sobre los objetos JSON y mostrar dinámicamente el contenido de cada sección en la página.",
        "El componente head.component define la clase HeadComponent que muestra el encabezado de la aplicación con el título principal. El título se muestra utilizando la interpolación de datos en el archivo head.component.html.",
        "El componente wellcome-message.component define la clase WellcomeMessageComponent que muestra un mensaje de bienvenida en la página de inicio de la aplicación. El mensaje se muestra utilizando la interpolación de datos en el archivo wellcome-message.component.html.",
        "El archivo app.component.html utiliza los componentes HeadComponent y ContentComponent para mostrar el encabezado y el contenido de la aplicación en la página principal.",
        "El archivo app.component.css contiene los estilos CSS para personalizar el diseño de la aplicación, incluyendo el color de fondo, el tamaño de fuente y el espaciado de los elementos.",
        "El archivo app.module.ts define el módulo raíz de la aplicación que importa los componentes y módulos necesarios para ejecutar la aplicación. El módulo raíz también define el componente principal de la aplicación y lo declara en la lista de bootstrapComponents.",
        "El archivo main.ts inicia la aplicación Angular llamando a la función platformBrowserDynamic().bootstrapModule(AppModule) para cargar el módulo raíz de la aplicación en el navegador.",
        "Este proyecto también utiliza el módulo CommonModule de Angular para importar las directivas y pipes comunes utilizados en la aplicación. El módulo CommonModule proporciona funcionalidades básicas como ngIf y ngFor que son necesarias para la aplicación.",
        "En resumen, este proyecto utiliza componentes, directivas y módulos de Angular para crear una aplicación web dinámica y de una sola página. Los componentes se utilizan para organizar la interfaz de usuario y mostrar el contenido de la aplicación, mientras que las directivas se utilizan para manipular el DOM y aplicar lógica condicional."
      ]
    }
  };    

  contentKeys(): string[] {
    return Object.keys(this.content);
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }
}