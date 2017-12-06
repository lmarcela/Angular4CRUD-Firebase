# Angular4CRUDFirebase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.
Project based on this tutorial: https://www.youtube.com/watch?v=wQ5z9SFBlek

## Comandos de utilidad

### GIT

    VERSION: git --version
    USUARIO: git config --global user.name "Marcela Malaver"
    EMAIL: git config --global user.email "marcela9409@gmail.com"
    ALIAS PARA LOGIN: git config --global alias.lg "log --oneline --decorate --all --graph"
    ALIAS PARA STATUS: git config --global alias.s "status -s"
    VER ESTADO DE GIT: git s

    VER URL REPOSITORIO: git remote -v
    PONER URL REPOSITORIO: git remote add origin https://github.com/lmarcela/Angular4CRUD-Firebase.git.
    AÑADIR ARCHIVOS AL GIT: git add .
    CREAR COMMIT CON MENSAJE: git commit -m "ESTE ES MI MENSAJE"
    SUBIR CAMBIOS: git push -u origin master
    
    REVERSAR CAMBIOS EN EL GIT: git checkout -- .

### ANGULAR

    CREAR PROYECTO: ng new Angular4CRUD-Firebase
    INICIAR SERVIDOR (EN LA CARPETA DEL PROYECTO): ng serve -o (Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.)
    CREAR COMPONENTE SIN ARCHIVOS CSS Y SPEC: ng g c components/employees --spec false -is
    CREAR MODELO: ng g class models/employee
    CREAR SERVICIO SIN SPEC: ng g s services/information --spec false 
    PONER EN PRODUCCION: ng build --env=prod --prod
    HTTP-SERVER (SOLO LA PRIMERA VEZ): https://www.npmjs.com/package/http-server (npm install http-server -g)
    EN LA CARPETA DIST DEL PROYECTO: http-server -o 

## Firebase configuration
The official library for Firebase and Angular: https://github.com/angular/angularfire2

1. Install: npm install firebase angularfire2 --save
2. Add Firebase config to environments variable: 
- Open /src/environments/environment.ts and add your Firebase configuration:
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
3. En app.module.ts añadir: 
      import { AngularFireModule } from 'angularfire2';
      import { AngularFireDatabaseModule } from 'angularfire2/database';


## DESPLEGAR PROYECTO EN GITPAGES
1. Generar carpeta dist (ng build --env=prod --prod). Si se produce algun error corregir hasta que el comando se ejecute sin errores.
2. Cambiar el nombre de la carpeta dist a docs
3. En la configuracion (Settings) del repositorio, ir a la seccion "GitHub Pages". En Source elegir "master branch /docs folder". Luego save.
4. El proyecto esta desplegado (Ej: https://lmarcela.github.io/Angular4Portafolio/#/home)


