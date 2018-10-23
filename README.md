# nodejs-starter
Nodejs project started using Onion Architecture

## Getting Started
Async and non-blocking Nodejs 😎

Fully based on onion architecture and good practices.

This project is using:
- TypeORM for connection to MySQL database
- Inversifyjs as IoC (Inversion of Control)
- Express as API handler
- Docker for deploy as container
- CircleCI for automating pipeline from commit to deploy

### Prerequisites
You will need a MySQL database at port 3307 or actually you can change this port at:
```
.env - production (need to be created and set environment NODE_ENV=production)
.env.dev - development
.env.test - testing
```

### Installing
You should install dependencies to use this project
```
npm install
```

### Running test
Test can simply run with:
```
npm test
```
This test will show you a map coverage with Jest
Simply test are localed at test/
For test you need to name your files as: **.test.ts

### Running develop
You can watch file changes using nodemon simply running:
```
npm run watch
```

### Deployment
Using docker:
```
- docker build -t started:1.0.0 .
- docker run --name started -p '3500:3500' -d started:1.0.0
```

Using Docker-compose:
```
docker-compose up -d
```

Using CircleCI:
For circle workflows you should complete the last workflow step named as deploy (Everyone have a different deploy strategy)




Regards
