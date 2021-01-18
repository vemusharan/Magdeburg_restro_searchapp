import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import yelp from "../api/yelp";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

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
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          justifyContent: "center",
          alignSelf: "center",
          borderColor: "grey",
          borderWidth: 1,
          padding: 5,
          margin: 10,
        }}
      >
        {" "}
        {result.name}{" "}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Feather name="phone" size={24} color="black" style={{ margin: 10 }} />
        <Text style={{ fontSize: 18, margin: 10 }}> {result.phone}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Entypo
          name="location"
          size={24}
          color="black"
          style={{ marginLeft: 10 }}
        />
        <Text style={{ fontSize: 15, marginLeft: 8, marginBottom: 15 }}>
          {" "}
          {result.location.display_address[0]} ,{" "}
          {result.location.display_address[1]}{" "}
        </Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
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
