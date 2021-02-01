// imports

import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// function components

const ResultsDetail = ({ result, navigation }) => {
  // console.log(result);
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={{ uri: result.image_url }} />
      <Text style={styles.name}> {result.name} </Text>
      <View style={{ flexDirection: "row" }}>
        <Text> {result.rating} </Text>
        <FontAwesome
          name="star"
          size={16}
          color="black"
          style={{ marginRight: 10, marginTop: 3 }}
        />
        <Text>{result.review_count} Reviews </Text>
      </View>

      <Text numberOfLines={1}></Text>
    </View>
  );
};

// Styling

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
  },

  container: {
    marginLeft: 10,
  },

  image: {
    width: 250,
    borderRadius: 4,
    height: 130,
    marginBottom: 5,
  },

  Image: {
    width: 190,
    height: 175,
    borderRadius: 4,
    alignSelf: "center",
  },
});

//export
export default ResultsDetail;
