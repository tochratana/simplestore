FROM node:20-alpine

WORKDIR /app

# Install a simple HTTP server to serve static files
RUN npm install -g http-server

# Copy pre-built dist folder
COPY dist ./dist

# Verify files were copied
RUN ls -la dist/ || (echo "Files not copied - dist directory empty" && exit 1)

# Expose port 3000
EXPOSE 3000

# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:3000/ || exit 1

# Start HTTP server with proper error handling
CMD ["sh", "-c", "http-server dist -p 3000 --cors --gzip"]
