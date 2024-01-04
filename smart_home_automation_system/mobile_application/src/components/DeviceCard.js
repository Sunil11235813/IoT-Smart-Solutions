import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/DeviceCard.style";

const DeviceCard = ({ device }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={device.image} />
      <Text style={styles.name}>{device.name}</Text>
      <Text style={styles.status}>{device.status}</Text>
    </View>
  );
};

export default DeviceCard;
