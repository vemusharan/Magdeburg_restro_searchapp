// imports

import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

// function components

const ResultsDetail = ({ result, navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}> {result.name} </Text>
      <Text>
        {" "}
        {result.rating} Starts , {result.review_count} Review{" "}
      </Text>

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
});

//export
export default ResultsDetail;
