## How to deploy the app (Development)

1. Set up the database container
```
docker compose up -d
```
2. Run the prisma commands
```
npx prisma init
```
3. Poner el archivo .env en el archivo .gitignore
4. Crear el .env.template