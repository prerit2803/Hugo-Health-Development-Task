FROM node:9.10

#Use environment variable to set the value of cryptocurrency dynamically
ENV cryptoCurrencyName=

# Create App directory
WORKDIR /usr/src/Test1

# Install the App dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle the App source
COPY . .

#Expose the App port
EXPOSE 3000

#Change the user to node before running index.js
USER node

#Execute the script and echo the output to the console
CMD [ "/bin/bash", "-c", "echo `node index.js $cryptoCurrencyName`" ]
