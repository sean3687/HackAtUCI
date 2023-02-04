import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
const API_KEY = "pk.eyJ1Ijoic3ViaW5raW0zMjUiLCJhIjoiY2xkcHV4cjY3MDhzeDN2bGk2aDU5MjI0YSJ9.IjUdEKU69OMBCD0lSyUgiA";
const markers = [
  {
  coordinate: {
      latitude: 33.64618034205408,
      longitude: -117.82371334671456,
    },
      title: "Vista Del Campo Norte",
      description: "28700 Arroyo Dr, Irvine, CA 92617"
  },
  {
  coordinate: {
      latitude: 33.647942157503024,
      longitude: -117.83397822951994,
    },   
      title: "Puerta de Sol",
      description: "10000 Adobe Cir Rd, Irvine, CA 92617"
  },
  {
  coordinate: {
      latitude: 33.64769882685506,
      longitude: -117.82871174486353,
      },
      title: "Plaza Verde",
      description: "15000 Arroyo Dr, Irvine, CA 92617"
  },
  {
  coordinate: {
      latitude: 33.64499311793641,
      longitude: -117.82455741785823,
      },
      title: "Camino de Sol",
      description: "33000 Arroyo Dr, Irvine, CA 92617"
  },
  {
  coordinate: {
      latitude: 33.64061512585229,
      longitude: -117.82416991787886,
      },
      title: "Vista Del Campo",
      description: "62600 Arroyo Dr, Irvine, CA 92617"
  },
  {
  coordinate: {
      latitude: 33.648492,
      longitude: -117.826682,
      },
      title: "Plaze Verde II",
      description: "1022-1048 Arroyo Dr, Irvine, CA 92617"
  }
];


const Layout = ({ children, header, footer }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerText}>{header}</Text>
      </SafeAreaView>
      <View style={styles.contentContainer}>
        <ScrollView style={styles.content}>
          {children}
        </ScrollView>
      </View>
      <SafeAreaView style={styles.footer}>
        <MapView
            style={styles.map}
            initialRegion={{
              latitude: 33.643822263786646,
              longitude: -117.82784360225071,
              latitudeDelta: 0.0200,
              longitudeDelta: 0.0200
            }}
            accessToken={API_KEY}
        >
         {markers.map(marker => (
            <Marker
              key={marker.title}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    height: 120,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  footer: {
    height: 300,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
    height: 10,
    width: 450,
  },
});

export default Layout;

