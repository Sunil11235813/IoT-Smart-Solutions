import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import Header from "../components/Header";
import DeviceCard from "../components/DeviceCard";
import styles from "../styles/RoomDetailsPage.style";

const RoomDetailsPage = ({ route }) => {
  const { room } = route.params;
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    // Fetch devices from API
    const fetchDevices = async () => {
      const response = await fetch(`http://localhost:3000/rooms/${room.id}/devices`);
      const data = await response.json();
      setDevices(data);
    };

    fetchDevices();
  }, []);

  const handleDevicePress = (device) => {
    // Navigate to device details page
    navigation.navigate("DeviceDetailsPage", { device });
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>{room.name}</Text>
      <FlatList
        data={devices}
        renderItem={({ item }) => <DeviceCard device={item} onPress={() => handleDevicePress(item)} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default RoomDetailsPage;