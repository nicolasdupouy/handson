# Build environment
FROM maven:3-jdk-8 AS build
WORKDIR /app/stats
COPY commons-messaging /app/commons-messaging
COPY stats /app/stats
RUN mvn -f /app/stats/pom.xml clean package

# Run environment
ENTRYPOINT ["mvn", "spring-boot:run"]