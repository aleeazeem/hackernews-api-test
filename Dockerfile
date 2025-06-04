# Use Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build TypeScript (optional, depending on setup)
RUN npm run build || echo "No build step defined, continuing..."

# Set environment variable (optional)
ENV DEBUG=true

# Run the tests
CMD ["npm", "test"]
