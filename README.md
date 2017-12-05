# Angular4CRUDFirebase
- Proyecto creado con la instrucción: ng new Angular4CRUD-Firebase.
- Repositorio obtenido con la instrucción: git remote add origin https://github.com/lmarcela/Angular4CRUD-Firebase.git.
- Añadir todo lo modificado al repositorio: git add .
- Añadir commit con mensaje:git commit -m ""
- Repositorio subido con la instrucción: git push -u origin master.
- Proyecto compilado con la instrucción: ng serve -o
- CREAR COMPONENTE SIN ARCHIVOS CSS Y SPEC: ng g c components/employees --spec false -is
- CREAR MODELO: ng g class models/employee
- CREAR SERVICIO SIN SPEC: ng g s services/information --spec false 
- Firebase:
--The official library for Firebase and Angular: https://github.com/angular/angularfire2
Install: npm install firebase angularfire2 --save
-- Add Firebase config to environments variable: Open /src/environments/environment.ts and add your Firebase configuration:

export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};

-- En app.module.ts añadir: 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
