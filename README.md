

## Prerequisites ##
Before you start, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation ##

1. **Clone the repository**:
    ```bash
    git clone https://github.com/mohammedam33n/node-app
    cd node-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

## Configuration ##

1. **Environment Variables**:
    Create a `.env` file in the root directory and add your environment variables. For example:
    ```env
    PORT=3000
    DATABASE_URL=your-database-url
    JWT_SECRET=your-secret-key
    ```

## Running the Project ##

1. **Start the development server**:
    ```bash
    npm run dev
    ```
    This will start the server with nodemon for automatic restarting.

2. **Start the production server**:
    ```bash
    node app.js
    ```

## Testing ##

## API Endpoints ##

- **Introduction**:
    - [Page 1](http://127.0.0.1:3000/introduction/page-1)
    - [Page 2](http://127.0.0.1:3000/introduction/page-2)
    - [Page 3](http://127.0.0.1:3000/introduction/page-3)

- **Profile**:
    - [Detail](http://127.0.0.1:3000/profile/detail)
    - [Show](http://127.0.0.1:3000/profile/show/(:id))
    - [Edit](http://127.0.0.1:3000/profile/edit/(:id))

- **Trip**:
    - [List](http://127.0.0.1:3000/trip/list)
    - [Show](http://127.0.0.1:3000/trip/show/(:id))

- **Auth**:
    - [Login](http://127.0.0.1:3000/auth/login)
    - [Register](http://127.0.0.1:3000/auth/register)

## Dummy User Info for Demonstration ##
- Email: `test@example.com`
- Password: `password`



## Figma ##
Add relevant Figma links or details here.
- [Figma](https://www.figma.com/design/Z3nEk4JK3vR3m5TFr066d5/TRIPIA-FINAL)

