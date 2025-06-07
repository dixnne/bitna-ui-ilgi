# Dockerfile

# --- Etapa 1: Construcción (Build Stage) ---
# Usamos una imagen de Node.js para construir la aplicación
FROM node:18-alpine AS build

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias
COPY package.json ./
COPY package-lock.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos el resto del código fuente de la aplicación
COPY . .

# Ejecutamos el script de construcción de Vite para crear los archivos de producción
RUN npm run build


# --- Etapa 2: Servidor (Serve Stage) ---
# Usamos una imagen ligera de Nginx para servir los archivos estáticos
FROM nginx:stable-alpine

# Copiamos los archivos de producción construidos en la etapa anterior 
# desde la carpeta /app/dist del contenedor 'build' al directorio HTML de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiamos nuestro archivo de configuración personalizado de Nginx
# Este archivo es crucial para que las rutas de React funcionen
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponemos el puerto 80, que es el puerto por defecto de Nginx
EXPOSE 80

# El comando para iniciar Nginx cuando el contenedor se inicie
CMD ["nginx", "-g", "daemon off;"]
