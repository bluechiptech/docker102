# Test web app that returns the name of the host/pod/container servicing req
FROM node:current-alpine

LABEL org.opencontainers.image.title="Hello Kubernetes Learners!" \
      org.opencontainers.image.description="Our web server is up" \
      org.opencontainers.image.authors="@laolu"

# Create directory in container image for app code
RUN mkdir -p /usr/src/app

# Copy app code (.) to /usr/src/app in container image
COPY . /usr/src/app

# Set working directory context
WORKDIR /usr/src/app

EXPOSE 8082

# Install dependencies from package.json
RUN npm install

# Command for container to execute
ENTRYPOINT [ "node", "app.js" ]