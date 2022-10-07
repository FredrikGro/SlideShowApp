import { AntDesign, Entypo } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as ImagePicker from "expo-image-picker";
import { customAlphabet } from "nanoid/non-secure";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, View } from "react-native";
import "react-native-get-random-values";
import RegularButton from "../components/Button/RegularButton";
import { Project } from "../components/Models";
import BigText from "../components/Texts/BigText";
import { useProject } from "../contexts/ProjectContext";
import { DrawerParamList } from "../Navigation/Drawer/DrawerNagivator";

type Props = NativeStackScreenProps<DrawerParamList, "NewProject">;

export default function NewProject({ navigation, route }: Props) {
  const [images, setImages] = useState<string[]>([]);
  const [project, setProject] = useState<Project>();

  const { addToProjects, editProject, email } = useProject();

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = () => {
        setImages([]);
        setProject(undefined);
      };
      return unsubscribe;
    }, [])
  );

  useEffect(() => {
    if (route.params?.project !== undefined) {
      setImages(route.params?.project.imagesURI);
      setProject(route.params?.project);
    }
  }, [route.params]);

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
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status === "granted") {
      console.log(status);
      let camera_result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!camera_result.cancelled) {
        setImages([...images, camera_result.uri]);
      }
    } else {
      alert("You have to give permission to use the camera");
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 20,
          marginBottom: 40,
        }}
      >
        <BigText>{route.params.pName}</BigText>
        <FlatList
          data={images}
          style={{ paddingTop: 10 }}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.images} />
          )}
        />
        <RegularButton
          onPress={
            project !== undefined
              ? () => {
                  let editedProject: Project = {
                    id: project.id,
                    userEmail: project.userEmail,
                    projectName:
                      route.params.pName !== undefined
                        ? route.params.pName
                        : "",
                    imagesURI: [...images],
                  };

                  editProject(editedProject);

                  navigation.setParams({
                    project: undefined,
                    pName: undefined,
                  });

                  navigation.navigate("Projects");
                }
              : () => {
                  const nanoid = customAlphabet(
                    "abcdefghijklmnopqrstuvwxyz0123456789",
                    10
                  );

                  let newProject: Project = {
                    id: nanoid(),
                    userEmail: email,
                    projectName:
                      route.params.pName !== undefined
                        ? route.params.pName
                        : "",
                    imagesURI: images,
                  };

                  addToProjects(newProject);

                  navigation.navigate("Projects");
                }
          }
        >
          + Create Project
        </RegularButton>
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
    width: 200,
    height: 150,
    padding: 10,
  },
});
