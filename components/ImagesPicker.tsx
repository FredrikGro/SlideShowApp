import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Button, FlatList, Image, SafeAreaView } from "react-native";

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
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 80,
      }}
    >
      <Button title="Add Image" onPress={pickImage} />
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
      <Button title="Create SlideShow" />
    </SafeAreaView>
  );
}
