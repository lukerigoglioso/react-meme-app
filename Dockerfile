#FROM node:latest as builder
#
#USER root
#RUN mkdir /usr/src/app
#RUN mkdir /.npm
#RUN mkdir /.config
#
#WORKDIR /usr/src/app
#
#ENV PATH /usr/src/app/node_modules/.bin:$PATH
#
#COPY package.json /usr/src/app/package.json
#
#
#RUN npm install
#COPY . /usr/src/app
#RUN npm run build
#
#
#
## production environment
#FROM nginxinc/nginx-unprivileged:latest
#COPY --from=builder /usr/src/app/build /usr/share/nginx/html
#
#CMD ["nginx", "-g", "daemon off;"]
#

FROM node:latest
RUN npm install -g serve
RUN npm install -g express
# RUN npm install -g react-scripts
# RUN npm install -g react-app-rewired
RUN npm install

### File Author / Maintainer
MAINTAINER Luke Rigoglioso <rigoglioso.luke@gmail.com>
EXPOSE 8080

#node ose apps require admin username
USER root

WORKDIR /app
ADD . /app

RUN chown -R 1001:0 /app && chmod -R g+wrx /app
USER 1001

ADD yarn.lock /yarn.lock
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

RUN yarn

CMD [ "/bin/sh", "-c", "npm run build-serve" ]

#docker run --publish 8080:8080 lukerigoglioso/react-meme-app:latest