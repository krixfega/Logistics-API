# Dockerfile for PostgreSQL

FROM postgres:latest

# Set environment variables
ENV POSTGRES_DB logistics
ENV POSTGRES_USER logistics_user
ENV POSTGRES_PASSWORD logistics_password

# Copy the database initialization script
COPY init.sql /docker-entrypoint-initdb.d/
