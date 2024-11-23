# Use an official Node.js image as a base
FROM node:16

# Set the working directory
WORKDIR /app

# Install dependencies for LibreOffice and other tools
RUN apt-get update && apt-get install -y \
    libreoffice \
    wget \
    && apt-get clean

# Install application dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy application files
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the Node.js application
CMD ["node", "server.js"]
