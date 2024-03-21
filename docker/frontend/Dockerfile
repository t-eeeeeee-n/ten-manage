FROM node:20.9-bullseye-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock
COPY ./frontend/package.json ./frontend/yarn.lock /app/

# Install dependencies
RUN yarn install

# Copy the current directory contents into the container at /app
COPY ./frontend/ /app/

RUN yarn build

# Expose port 5173 to access the server
EXPOSE 5173

# Command to run the application
CMD ["yarn", "start", "-p", "5173"]