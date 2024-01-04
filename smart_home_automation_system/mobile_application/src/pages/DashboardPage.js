import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import Header from "../components/Header";
import RoomCard from "../components/RoomCard";
import styles from "../styles/DashboardPage.style";

const DashboardPage = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Fetch rooms from API
    const fetchRooms = async () => {
      const response = await fetch("http://localhost:3000/rooms");
      const data = await response.json();
      setRooms(data);
    };

    fetchRooms();
  }, []);

  const handleRoomPress = (room) => {
    // Navigate to room details page
    navigation.navigate("RoomDetailsPage", { room });
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={rooms}
        renderItem={({ item }) => <RoomCard room={item} onPress={() => handleRoomPress(item)} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default DashboardPage;