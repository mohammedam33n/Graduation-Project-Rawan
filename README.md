## Prerequisites
Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Rouvie/tripiaApp
    cd tripiaApp
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

## Running the Project

To run the project, follow these steps:

1. **Start the development server**:
    ```bash
    npm run dev
    ```
    This command starts the server using nodemon for automatic restarting during development.

2. **Start the production server**:
    ```bash
    node app.js
    ```
    Use this command to run the server in production mode.

## API Endpoints

### Introduction

- [Page 1](http://127.0.0.1:3000/introduction/page-1)
- [Page 2](http://127.0.0.1:3000/introduction/page-2)
- [Page 3](http://127.0.0.1:3000/introduction/page-3)

### Profile

- [Detail](http://127.0.0.1:3000/profile/detail)
- [Show](http://127.0.0.1:3000/profile/show/(:id))
- [Edit](http://127.0.0.1:3000/profile/edit/(:id))

### Trip

- [List](http://127.0.0.1:3000/trip/list)
- [Show](http://127.0.0.1:3000/trip/show/(:id))

### Auth

- [Login](http://127.0.0.1:3000/auth/login)
- [Register](http://127.0.0.1:3000/auth/register)

## Testing

Add instructions on how to run tests if applicable.

## Dummy User Info for Demonstration

Use the following credentials to log in and test the application:

- Email: `test@example.com`
- Password: `password`

## Figma

Explore the design details on Figma:

- [Figma Design](https://www.figma.com/design/Z3nEk4JK3vR3m5TFr066d5/TRIPIA-FINAL)
