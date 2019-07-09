# Build environment
FROM maven:3-jdk-8 AS build
WORKDIR /app/stock
COPY commons-messaging /app/commons-messaging
COPY stock /app/stock
RUN mvn -f /app/stock/pom.xml clean package

# Run environment
ENTRYPOINT ["mvn", "spring-boot:run"]