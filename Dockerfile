FROM node:16.19.0-alpine AS base
WORKDIR /base
COPY package*.json ./
RUN npm install
COPY . .

FROM node:16.19.0-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=base /base ./

RUN echo "api=https://api.com" >> .env
COPY .env .env

RUN npm run build
RUN npm run generate
EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
CMD ["npm", "start"]
