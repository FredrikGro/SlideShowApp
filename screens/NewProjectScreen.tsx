import { AntDesign, Entypo } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as ImagePicker from "expo-image-picker";
import { customAlphabet } from "nanoid/non-secure";
import React, { useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, View } from "react-native";
import "react-native-get-random-values";
import GlobalButton from "../components/GlobalButton";
import { Project } from "../components/Models";
import BigText from "../components/Texts/BigText";
import { useProject } from "../contexts/ProjectContext";
import { DrawerParamList } from "../Navigation/Drawer/DrawerNagivator";

type Props = NativeStackScreenProps<DrawerParamList, "ProjectName">;

export default function NewProject({ navigation }: Props) {
  const [images, setImages] = useState<string[]>([]);

  const { addToProjects, email } = useProject();

  const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

  const route = useRoute();

  const { projectName } = route.params as {
    projectName: string;
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImages([...images, result.uri]);
    }
  };

  const takePhoto = async () => {
    let camera_result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!camera_result.cancelled) {
      setImages([...images, camera_result.uri]);
    }
  };

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 20,
          marginBottom: 40,
        }}
      >
        <BigText>{projectName}</BigText>
        <FlatList
          data={images}
          style={{ paddingTop: 10 }}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.images} />
          )}
          // keyExtractor={(item) => item.id}
        />
        <GlobalButton
          text={"+ Create Project"}
          onPress={() => {
            let newProject: Project = {
              id: nanoid(),
              userEmail: email,
              projectName: projectName,
              imagesURI: images,
            };

            addToProjects(newProject);

            setImages([]);

            navigation.navigate("Projects");
          }}
        />
      </SafeAreaView>

      <Entypo
        name="folder-images"
        size={30}
        color="black"
        onPress={pickImage}
        style={styles.icon_left}
      />

      <AntDesign
        name="camera"
        size={30}
        color="black"
        onPress={takePhoto}
        style={styles.icon_right}
      />
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
  icon_left: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    position: "absolute",
    left: 10,
    bottom: 4,
  },
  icon_right: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    position: "absolute",
    right: 10,
    bottom: 4,
  },
  images: {
    width: 100,
    height: 100,
    padding: 10,
  },
});
