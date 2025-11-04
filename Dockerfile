FROM node:20-alpine as builder

# Instala dependencias necesarias (como git)
# RUN apk add --no-cache git
RUN apk add --no-cache git python3 make g++ pkgconfig cairo-dev pango-dev jpeg-dev giflib-dev

# Copia archivos
COPY package*.json ./ 
COPY src/ ./src/
COPY tsconfig*.json ./  

COPY . .

# Instala npm versión específica y las dependencias
# RUN npm install -g npm@11.3.0
RUN npm install 

# Variables de entorno
ARG PORT
ARG SENDWAVE_API_KEY
ARG SENDWAVE_NAME
ENV PORT=${PORT}
ENV SENDWAVE_API_KEY=${SENDWAVE_API_KEY}
ENV SENDWAVE_NAME=${SENDWAVE_NAME}


EXPOSE ${PORT}

# Construye el proyecto
RUN npm run build

# Comando por defecto
CMD ["npm", "start"]
