# Portfolio Docker Setup

This portfolio can be deployed using Docker for consistent deployment across different environments.

## Quick Start

### Production Deployment
```bash
# Build and run the production container
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

The application will be available at `http://localhost`

### Development Mode
```bash
# Run in development mode with hot reloading
docker-compose --profile dev up portfolio-dev

# Or build and run development container directly
docker build -f Dockerfile.dev -t portfolio-dev .
docker run -p 5173:5173 -v $(pwd):/app portfolio-dev
```

The development server will be available at `http://localhost:5173`

## Docker Commands

### Production Build
```bash
# Build production image
docker build -t krishna-portfolio .

# Run production container
docker run -d -p 80:80 --name portfolio krishna-portfolio
```

### Development Build
```bash
# Build development image
docker build -f Dockerfile.dev -t krishna-portfolio-dev .

# Run development container with volume mounting
docker run -p 5173:5173 -v $(pwd):/app krishna-portfolio-dev
```

## Environment Variables

- `NODE_ENV`: Set to `production` for production builds, `development` for development

## Files Structure

- `Dockerfile`: Multi-stage production build
- `Dockerfile.dev`: Development build with hot reloading
- `docker-compose.yml`: Orchestration for both production and development
- `nginx.conf`: Nginx configuration for serving the React SPA
- `.dockerignore`: Files to exclude from Docker builds

## Deployment Notes

1. **Production**: Uses Nginx to serve static files with proper caching and security headers
2. **Development**: Uses Vite dev server with hot module replacement
3. **Assets**: All assets in `/public/Assets/` are properly served
4. **SPA Routing**: Nginx is configured to handle client-side routing

## Health Check

The production container includes a health check that verifies the application is responding on port 80.

## Security Features

- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- Gzip compression for better performance
- Static asset caching
- Non-root user execution (via nginx:alpine)
