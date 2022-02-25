# _Simple_ express prisma API

## Project setup:

### Express and TypeScript

-  npm install express
-  npm install -D typescript ts-node nodemon @types/express @types/node
   -  add to **package.json** _scripts_:
   ```json
   "scripts": {
   	"start": "nodemon app.ts"
   }
   ```
-  touch _tsconfig.json_

   -  important to add:

   ```json
   "esModuleInterop": true
   ```

-  touch _app.ts_:
   -  implement base working express
-  npm run start

### Prisma

-  npm install prisma
-  npx prisma init
   -  update your _.env_ file
   -  update your _schema.prisma_ file
-  npx prisma migrate dev --name init
-  update _app.ts_ file

### Cors

-  npm install cors
-  npm install -D @types/cors
