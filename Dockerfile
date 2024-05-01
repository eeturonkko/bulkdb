# Use the official lightweight Node.js 16 image.
# https://hub.docker.com/_/node
FROM node:16-buster-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install --production

# Copy local code to the container image.
COPY . .

# Build the application if needed (uncomment this line for SvelteKit)
# RUN npm run build

# Set the DATABASE_URL environment variable
ENV DATABASE_URL="postgres://postgres:admin@192.168.100.18:5433/bulkdb"

EXPOSE 3000

# Run the web service on container startup.
CMD [ "npm", "start" ]
