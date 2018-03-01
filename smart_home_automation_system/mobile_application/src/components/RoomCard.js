import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/RoomCard.style";

const RoomCard = ({ room, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{room.name}</Text>
    </TouchableOpacity>
  );
};
//Important line
export default RoomCard;