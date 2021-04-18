import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import _ from "lodash";

export default function App() {
  const [value, setValue] = useState("A doctor a day keeps an apple away");
  const [author, setAuthor] = useState("Rajas Gandhi");

  const newone = async () => {
    const resp = await fetch("https://type.fit/api/quotes");
    const respJSON = await resp.json();
    var firstRandomElement = _.shuffle(respJSON)[0];
    setValue(firstRandomElement.text);
    setAuthor(firstRandomElement.author);
  };
  return (
    <View style={styles.container}>
      <Text>{value}</Text>
      <Text>{author}</Text>
      <TouchableOpacity
        style={{
          height: "8%",
          width: "60%",
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "white",
          backgroundColor: "#add8e6",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={newone}
      >
        <Text style={{ color: "white", fontSize: 30 }}>New Quote</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
