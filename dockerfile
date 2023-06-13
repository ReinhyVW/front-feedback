# Establecer la imagen base
FROM node:alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar los archivos del proyecto al contenedor
COPY package.json package-lock.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Compilar la aplicación
RUN npm run build

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 8000

# Comando para ejecutar la aplicación en el contenedor
CMD [ "npm", "start" ]