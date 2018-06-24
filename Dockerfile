FROM node:carbon

RUN mkdir -p /usr/app
WORKDIR /usr/app
RUN pwd
# RUN ls
COPY package.json package-lock.json ./
RUN ls
RUN npm install
COPY . /usr/app
EXPOSE 4000
# ENTRYPOINT [ "sh" ]
CMD ["npm", "run", "start"]
