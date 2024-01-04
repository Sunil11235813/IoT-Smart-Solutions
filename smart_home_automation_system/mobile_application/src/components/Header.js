import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/Header.style";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Smart Home Automation</Text>
    </View>
  );
};

export default Header;