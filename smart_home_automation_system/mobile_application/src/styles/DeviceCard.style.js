import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  status: {
    color: "#666",
  },
});
export default styles;