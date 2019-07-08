# Celebrities Magazine Angular 8 Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code generators used

    + ng generate component
    + ng generate service
    + ng generate pipe
    + ng generate directive
    + ng generate class
    + ng generate guard

### Features used
    + Interceptors
    + Guards
    + Resolvers
    + Http 

### JSON Server for Http backend
You need to run the `JSON server` tool to run the backend Http RESTful service.
Install `json-server` using `npm`

`npm install -g json-server`

Run the `json-server` with the database content. Use the `json-server-data\persons.json` to serve the data. Run the following command to start the `json-server`.

`json-server --watch json-server-data\persons.json`

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

