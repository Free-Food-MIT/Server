
FROM node:15.1

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json yarn.lock ./

RUN yarn global add nodemon

# Run yarn without generating a yarn.lock file
RUN yarn --pure-lockfile

COPY . .

EXPOSE 8080
CMD [ "yarn", "start" ]