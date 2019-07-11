#!/bin/bash

choose_topic() {
selection_request="Select which Kafka topic to listen :"
prompt="Select a topic: "
options=("IMPACT_STOCK" "ACKNOWLEDGE_STOCK" "STATS")

echo "$selection_request"
PS3="$prompt "
select opt in "${options[@]}" "Quit"; do

    case "$REPLY" in

    1 ) echo "=> [$REPLY] $opt"
        listen_kafka_topic "$opt"
        ;;
    2 ) echo "=> [$REPLY] $opt"
        listen_kafka_topic "$opt"
        ;;
    3 ) echo "=> [$REPLY] $opt"
        listen_kafka_topic "$opt"
        ;;

    $(( ${#options[@]}+1 )) ) break;;
    *) echo "Invalid option. Try another one.";continue;;

    esac

done
}

listen_kafka_topic() {
kafka_container_id=$(get_kafka_container_id)
if [ -z "$kafka_container_id" ]
then
    echo "You must start Kafka (cd commons-messaging; docker-compose up)"
else
    command="docker exec $kafka_container_id kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic $1 --from-beginning"
    eval $command
fi
}

get_kafka_container_id() {
echo $(eval docker ps | awk '$2 == "wurstmeister/kafka:1.0.0"' | awk '{print $1}')
}

choose_topic