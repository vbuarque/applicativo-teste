import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#f8f8f8',
    padding: 24,
  },
  titleWrapper:{
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 40,
    fontFamily: "Poppins_500Medium",
    color: '#29292e'
  },
  textSubtitle: {
    fontSize: 24,
    fontFamily: "Poppins_400Regular",
    color: '#29292e',
    textAlign: "center",
  },
  containerInputs: {
    marginTop: 80,
    marginBottom: 32,
  },
});
