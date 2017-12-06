# Angular4CRUDFirebase
- Proyecto creado con la instrucción: ng new Angular4CRUD-Firebase.
- Repositorio obtenido con la instrucción: git remote add origin https://github.com/lmarcela/Angular4CRUD-Firebase.git.
- Añadir todo lo modificado al repositorio: git add .
- Añadir commit con mensaje:git commit -m ""
- Repositorio subido con la instrucción: git push -u origin master.
- Proyecto compilado con la instrucción: ng serve -o. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
- CREAR COMPONENTE SIN ARCHIVOS CSS Y SPEC: ng g c components/employees --spec false -is
- CREAR MODELO: ng g class models/employee
- CREAR SERVICIO SIN SPEC: ng g s services/information --spec false 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Firebase configuration
The official library for Firebase and Angular: https://github.com/angular/angularfire2

1. Install: npm install firebase angularfire2 --save
2. Add Firebase config to environments variable: Open /src/environments/environment.ts and add your Firebase configuration:
'export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};'
3.  En app.module.ts añadir: 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

