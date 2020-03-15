FROM node:slim as common
WORKDIR /student
COPY package.json yarn.lock /student/
RUN yarn
COPY . .

### STAGE 1: Dev ###
FROM node:slim as dev
COPY --from=common /student /student
WORKDIR /student
EXPOSE 3000
CMD ["yarn", "dev"]

### STAGE 2: Deploy ###
FROM node:slim as prod
COPY --from=common /student /student
WORKDIR /student
RUN yarn build
EXPOSE 3000
CMD ["yarn", "serve"]