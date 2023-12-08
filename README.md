# ACL (Access Control List)

An RBAC approach using bitwise permission system

4 bits required to show CRUD (4 actions) for each role

- Admin - 15 - `1111`
- Seller - 14 - `1110`
- Supporter - 5 - `0101`
- Customer - 4 - `0100`

## Tech Stack

**Server:** Node, Nestjs

**Database:** Postgres

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start:dev
```

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```

## Features

- Signup / Login
- Dummy endpoints

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- PG_HOST=localhost
- PG_HOST=5432
- PG_USERNAME=postgres
- PG_PASSWORD=password
- PG_DB=acl
- SALT_ROUNDS=10;

## Demo

```
POST /auth HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Content-Length: 89

{
    "username": "don",
    "password" : "password",
    "role": "customer"
}

```

```
POST /auth/login HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Content-Length: 57

{
    "username": "don",
    "password" : "password"
}
```

Dummy Endpoint(s)

```
GET /products HTTP/1.1
Host: localhost:3000
Authorization: eyJhCI6IkpXVCJ9.eyJbiIsInJvbGVJZCIX0.rsyzHRxDp8SmbOsPqJc-M
```

```
PATCH /products HTTP/1.1
Host: localhost:3000
Authorization: eyJhbGcinR5cCI6IkpXVCJ9.eyJ1c2Y2siLCJyb2x0NTkzfQ.EFvu_UZE4fPbFJk
```
