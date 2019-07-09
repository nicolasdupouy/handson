# Build environment
FROM maven:3-jdk-8 AS build
WORKDIR /app/user-activity
COPY commons-messaging /app/commons-messaging
COPY user-activity /app/user-activity
RUN mvn -f /app/user-activity/pom.xml clean package

# Run environment
FROM java:8-jre-alpine
COPY --from=build /app/user-activity/target/user-activity-0.0.1-SNAPSHOT.jar /usr/app/app.jar
ENTRYPOINT [ "java", "-jar", "/usr/app/app.jar" ]
