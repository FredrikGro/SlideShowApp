import { AntDesign, Entypo } from "@expo/vector-icons";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as ImagePicker from "expo-image-picker";
import { customAlphabet } from "nanoid/non-secure";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, View } from "react-native";
import "react-native-get-random-values";
import RegularButton from "../components/Button/RegularButton";
import GlobalButton from "../components/GlobalButton";
import { Project } from "../components/Models";
import BigText from "../components/Texts/BigText";
import { useProject } from "../contexts/ProjectContext";
import { DrawerParamList } from "../Navigation/Drawer/DrawerNagivator";

type Props = NativeStackScreenProps<DrawerParamList, "NewProject">;

export default function NewProject({ navigation, route }: Props) {
  const [images, setImages] = useState<string[]>([]);
  const [project, setProject] = useState<Project>();

  const { projects, addToProjects, editProject, email } = useProject();

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = () => {
        setImages([]);
      };
      return unsubscribe;
    }, [])
  );

  useEffect(() => {
    if (route.params?.projectId !== undefined) {
      let result = projects.find((p) => p.id === route.params.projectId);

      if (result !== undefined) {
        setImages(result.imagesURI);
        setProject(result);
      }
    }
  }, [route.params]);

  const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

  const newRoute = useRoute();

  const { projectName } = newRoute.params as {
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
        <BigText>{projectName}</BigText>
        <FlatList
          data={images}
          style={{ paddingTop: 10 }}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.images} />
          )}
        />
        <RegularButton
          onPress={
            route.params.projectId !== undefined
              ? () => {
                  if (project !== undefined) {
                    let editedProject: Project = {
                      id: project.id,
                      userEmail: project.userEmail,
                      projectName: projectName,
                      imagesURI: [...images],
                    };
                    editProject(editedProject);
                  }
                  setProject(undefined);

                  navigation.navigate("Projects");
                }
              : () => {
                  let newProject: Project = {
                    id: nanoid(),
                    userEmail: email,
                    projectName: projectName,
                    imagesURI: images,
                  };

                  addToProjects(newProject);

                  setImages([]);

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
