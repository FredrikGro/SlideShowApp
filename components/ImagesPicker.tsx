import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, View } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import GlobalButton from "./GlobalButton";

//TODO: Implement picture from camera?

export default function ImagesPicker() {
  const [images, setImages] = useState<any>([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImages([...images, result.uri]);
      console.log(images);
    }
  };

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 80,
          marginBottom: 40,
        }}
      >
        <FlatList
          data={images}
          style={{ paddingTop: 10 }}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: 200, height: 200, margin: 10 }}
            />
          )}
          // keyExtractor={(item) => item.id}
        />
        <GlobalButton onPress={console.log} text={"+ Create Project"} />
      </SafeAreaView>

      <Entypo
        name="folder-images"
        size={30}
        color="black"
        onPress={pickImage}
        style={styles.icon_left}
      />

      <AntDesign
        style={styles.icon_right}
        name="camera"
        size={30}
        color="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon_left: {
    flexDirection: "row",
    backgroundColor: "#fff",
    position: "absolute",
    left: 10,
    bottom: 4,
  },
  icon_right: {
    flexDirection: "row",
    backgroundColor: "#fff",
    position: "absolute",
    right: 10,
    bottom: 4,
  },
});
