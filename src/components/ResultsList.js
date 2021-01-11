// Part-1 Imports
import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { withNavigation } from "react-navigation";

import ResultsDetail from "./ResultsDetail";

// Part-2 Function component

const ResultsList = ({ heading, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  return (
    <View style={{ marginLeft: 15, marginBottom: 10 }}>
      <Text style={style.textheading}> {heading} </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={(props) => {
          console.log(props.item.name);
          props.item.image_url === ""
            ? (props.item.image_url =
                "https://images.unsplash.com/photo-1470114755716-3e1124c6c3bd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=988&q=80")
            : null;

          return (
            <TouchableOpacity
              onPress={() => {
                console.log("Touchable Opacity pressed navigate to new Screen");
                navigation.navigate("ResultsShow", { id: props.item.id });
              }}
            >
              <ResultsDetail result={props.item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

//part-3 Stylesheet

const style = StyleSheet.create({
  textheading: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

//Part 4 Export

export default withNavigation(ResultsList);
