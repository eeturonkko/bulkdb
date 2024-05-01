FROM node:18-alpine AS builder

RUN mkdir /app && mkdir /app/data

COPY . /app

RUN cd /app && yarn install && \
  echo "DATABASE_URL=postgres://postgres:admin@192.168.100.18:5433/bulkdb" > /app/.env && \
  yarn build 

FROM node:18-alpine

RUN mkdir /app

COPY --from=builder /app/build /app/build
COPY --from=builder /app/package.json /app/yarn.lock /app/

RUN cd /app && \ 
  yarn install --production && \
  yarn cache clean

WORKDIR /app

CMD ["node", "build/index.js"]