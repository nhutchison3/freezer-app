FROM node:18-alpine AS builder
# set app as workdir
WORKDIR /app
# copy everything into app
COPY package*.json ./

# install everything needed for building
RUN npm ci

COPY . .
# build stuff
RUN npm run build

FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

COPY --from=builder /app/dist ./dist

CMD ["node", "dist/main"]