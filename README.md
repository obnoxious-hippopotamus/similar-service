# Amazon Prime Video Clone

Microservice that reproduces the video carousel portion of an Amazon Prime Video landing page.  Made as close an imitatiion to the amazon website as possible.  One of 3 microservices that make up a single web page.  

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This app uses MySQL DBMS.  You must have MySQL installed and a running mySQL server on your local machine in order to seed mock data.    


Make a copy of this repository and clone it onto your local machine.
cd into the newly created directory and open the file into your favorite text editor.


### Installing

In the root directory of the project, execute the following commands in the terminal.

Install Dependencies

```
npm install
```

Run webpack in watch mode

```
npm run build:dev
```
Fire up development server

```
npm start
```

Log into MySQL to ensure everything installed correctly

```
mysql -u root  
```

 From the root directory, the following terminal commands will create the mySQL schema and seed the database with mock data.  

```
npm run seed  
```

## Viewing the app

Navigate to http://localhost:3000 in order to see a development version of the app.


