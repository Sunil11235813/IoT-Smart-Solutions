import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Button from "../components/Button";
import styles from "../styles/DeviceDetailsPage.style";

const DeviceDetailsPage = ({ route }) => {
  const { device } = route.params;
  const [status, setStatus] = useState(device.status);

  const handleStatusChange = () => {
    // Send request to API to change device status
    const newStatus = status === "ON" ? "OFF" : "ON";
    setStatus(newStatus);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Image style={styles.image} source={{ uri: device.image }} />
      <Text style={styles.name}>{device.name}</Text>
      <Text style={styles.status}>Status: {status}</Text>
      <Button
        text={status === "ON" ? "Turn Off" : "Turn On"}
        onPress={handleStatusChange}
      />
    </View>
  );
};

export default DeviceDetailsPage;
