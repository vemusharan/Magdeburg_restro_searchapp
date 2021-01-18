//Part -1 Import
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImagePropTypes,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
//Part-2 compoenets
const SearchBar = (props) => {
  const x = " ";
  return (
    <View style={style.ViewStyling}>
      <Feather
        name="search"
        style={{ fontSize: 35, alignSelf: "center", marginHorizontal: 15 }}
      />
      <TextInput
        placeholder="Search"
        style={{ flex: 1, fontSize: 18 }}
        value={props.term}
        onChangeText={(newTerm) => props.onTermChange(newTerm)}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={props.onTermSubmit}
      />
      {props.term.length >= 1 ? (
        <TouchableOpacity onPress={() => props.onTermChange(x)}>
          <MaterialIcons
            name="clear"
            color="black"
            style={{ fontSize: 35, alignSelf: "center", marginHorizontal: 15 }}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

//Part-3 Styling
const style = StyleSheet.create({
  textHeading: {
    fontSize: 25,
  },
  textstyle: {
    flex: 3,
  },
  ViewStyling: {
    backgroundColor: "#F0EEEE",
    //backgroundColor:'#fff',

    flexDirection: "row",
    borderRadius: 10,
    height: 50,
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
  },
});

//Part-4 Export Default
export default SearchBar;
