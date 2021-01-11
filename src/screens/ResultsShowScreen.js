import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);

  console.log(result);
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  console.log();
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}> {result.name} </Text>
      <Text style={{ fontSize: 18 }}> Contact Number: {result.phone}</Text>
      <Text style={{ fontSize: 18 }}>
        {" "}
        Address : {result.location.display_address[0]} ,{" "}
        {result.location.display_address[1]}{" "}
      </Text>

      <FlatList
        horizontal
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.Image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    width: 200,
    height: 200,
    marginLeft: 10,
    alignSelf: "center",
  },
});

export default ResultsShowScreen;
