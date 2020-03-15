FROM node:slim as common
WORKDIR /account
COPY package.json yarn.lock /account/
RUN yarn
COPY . .

### STAGE 1: Dev ###
FROM node:slim as dev
COPY --from=common /account /account
WORKDIR /account
EXPOSE 3000
CMD ["yarn", "dev"]

### STAGE 2: Deploy ###
FROM node:slim as prod
COPY --from=common /account /account
WORKDIR /account
RUN yarn build
EXPOSE 3000
CMD ["yarn", "serve"]