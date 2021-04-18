import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import _ from "lodash";

export default function App() {
  const [value, setValue] = useState(
    "Do what you can. Want what you have. Be who you are."
  );
  const [author, setAuthor] = useState("Forrest Church");

  const newone = async () => {
    const resp = await fetch("https://type.fit/api/quotes");
    const respJSON = await resp.json();
    var firstRandomElement = _.shuffle(respJSON)[0];
    setValue(firstRandomElement.text);
    setAuthor(firstRandomElement.author);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: "40%",
          fontSize: 30,
          position: "absolute",
          top: 0,
          fontStyle: "italic",
        }}
      >
        Inspirin
      </Text>
      <Text
        style={{
          marginTop: "57%",
          fontSize: 26,
          position: "absolute",
          top: 0,
          fontStyle: "italic",
          marginHorizontal: "10%"
        }}
      >
        Inspiring you to do what makes you best
      </Text>
      <Text
        style={{
          marginHorizontal: "10%",
          marginBottom: "10%",
          fontSize: 24,
          marginTop: "20%"
        }}
      >
        {value}
      </Text>
      <Text
        style={{
          marginHorizontal: "10%",
          marginBottom: "10%",
          fontSize: 20,
        }}
      >
        {author}
      </Text>
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
    backgroundColor: "#add8e6",
    alignItems: "center",
    justifyContent: "center",
  },
});
