import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React from "react";

export default function Map() {
  const location = {
    latitude: 57.72543315497602,
    longitude: 12.937011100316834,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
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
        <Text style={{ fontSize: 24 }}>Map</Text>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          mapType="hybrid"
          region={location}
        >
          <Marker
            coordinate={{
              latitude: 57.72543315497602,
              longitude: 12.937011100316834,
            }}
          />
        </MapView>
      </SafeAreaView>
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
