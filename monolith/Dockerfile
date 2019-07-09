# Build environment
FROM maven:3-jdk-8 AS build
WORKDIR /app/monolith
COPY commons-messaging /app/commons-messaging
COPY monolith /app/monolith
RUN mvn -f /app/monolith/pom.xml clean package

# Run environment
ENTRYPOINT ["mvn", "spring-boot:run"]
