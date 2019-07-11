# Build environment
FROM maven:3-jdk-8 AS build
WORKDIR /app/gateway
COPY commons-messaging /app/commons-messaging
COPY gateway /app/gateway
RUN mvn -f /app/gateway/pom.xml clean package

# Run environment
FROM java:8-jre-alpine
COPY --from=build /app/gateway/target/gateway-0.0.1-SNAPSHOT.jar /usr/app/app.jar
ENTRYPOINT [ "java", "-jar", "/usr/app/app.jar" ]

# From project root directory
# docker build --tag=homics_gateway -f gateway/Dockerfile .
# docker run homics_gateway