# Apollo Fullstack Project

## Project Overview

This project implements an ecommerce with a backend using NestJS and a frontend using React. It provides features for managing products, including creating, listing, and deleting products. The backend uses PostgreSQL as the database.

## Installation

### Backend (NestJS)

Install dependencies:

npm install

Set up the PostgreSQL database and update the database.providers.ts file with your database configuration.

Run the backend:

npm start


### Frontend (React)

Install dependencies:

npm install

Update the BACKEND API URL in the 'src/components/ProductTable.js' file:

const apiUrl = 'http://localhost:your-favorite-backend-port'

Run the backend:

npm start

## Running the program:

### Backend endpoints:

- POST /products - create product
- GET /products - get all products
- GET /products/:id - get one product by id
- DELETE /products/:id - delete a product by id
