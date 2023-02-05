import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Button,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import Cardlist from"./card"
import store from "../redux/store";
import Card from "./card";
import Filter from "./filter";

const API_KEY =
  "pk.eyJ1Ijoic3ViaW5raW0zMjUiLCJhIjoiY2xkcHV4cjY3MDhzeDN2bGk2aDU5MjI0YSJ9.IjUdEKU69OMBCD0lSyUgiA";
const markers = [
  {
    coordinate: {
      latitude: 33.64618034205408,
      longitude: -117.82371334671456,
    },
    title: "Vista Del Campo Norte",
    description: "28700 Arroyo Dr, Irvine, CA 92617",
  },
  {
    coordinate: {
      latitude: 33.647942157503024,
      longitude: -117.83397822951994,
    },
    title: "Puerta de Sol",
    description: "10000 Adobe Cir Rd, Irvine, CA 92617",
  },
  {
    coordinate: {
      latitude: 33.64769882685506,
      longitude: -117.82871174486353,
    },
    title: "Plaza Verde",
    description: "15000 Arroyo Dr, Irvine, CA 92617",
  },
  {
    coordinate: {
      latitude: 33.64499311793641,
      longitude: -117.82455741785823,
    },
    title: "Camino de Sol",
    description: "33000 Arroyo Dr, Irvine, CA 92617",
  },
  {
    coordinate: {
      latitude: 33.64061512585229,
      longitude: -117.82416991787886,
    },
    title: "Vista Del Campo",
    description: "62600 Arroyo Dr, Irvine, CA 92617",
  },
  {
    coordinate: {
      latitude: 33.648492,
      longitude: -117.826682,
    },
    title: "Plaze Verde II",
    description: "1022-1048 Arroyo Dr, Irvine, CA 92617",
  },
];

const Layout = ({ children, header, footer }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const [objRedux, setobjRedux] = useState(store.getState().filterReducer[0].objJSON)
  // const [objJSON, setobjJSON] = useState(safety)
    
  useEffect(()=>{
    setobjRedux(store.getState().filterReducer[0].objJSON)
    console.log(objRedux)
    }
  )
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerText}>ZotHome</Text>
        
        <Filter style={{height:"20%",}}/>
        
      </SafeAreaView>
      
      <View style={styles.contentContainer}>
      
        <FlatList data={objRedux} renderItem={({item}) =><Card title={item.title} price={item.price} image={item.image} community={item.community}/>}
          style={styles.content} 
        >{children}<TouchableOpacity><Text>text</Text></TouchableOpacity>
        </FlatList>
      </View>
      <SafeAreaView style={styles.footer}>
        <TouchableOpacity
          style={styles.footerMap}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Ionicons name="map-outline" size={20} color="#4f9deb" style={{}} />
          <Text style={styles.footerMapText}>Maps</Text>
        </TouchableOpacity>
        <Modal
          style={styles.modal}
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <SafeAreaView>
            <View style={styles.modalContainer}>
              <View style={styles.headerContainer}>
                <Text style={styles.title}>ACC Apartments</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Ionicons
                    style={{}}
                    name="close-outline"
                    size={30}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.mapContainer}>
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: 33.643822263786646,
                    longitude: -117.82784360225071,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                  }}
                  accessToken={API_KEY}
                >
                  {markers.map((marker) => (
                    <Marker
                      key={marker.title}
                      coordinate={marker.coordinate}
                      title={marker.title}
                      description={marker.description}
                    />
                  ))}
                </MapView>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    height: 120,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    marginTop:20,
    fontSize: 45,
    fontWeight: "bold",
    display:"flex",
    
  },
  footerMap:{
      flexDirection: "row",
      justifyContent: "center",
      color: "#4f9deb",
      paddingVertical: 8,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: "#4f9deb",
      paddingHorizontal:30
  
  },
  footerMapText:{
      justifyContent: "center",
      alignItems: "center",
      color: "#4f9deb",
      marginTop:0,
      marginLeft: 5,
  },

  modalContainer: {
    height: "100%",
    bottom: 0,
  },
  headerContainer: {
    height: "10%",
    backgroundColor: "#fcfcfc",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    alignItems: "center",
    color: "#2a2a33",
    fontSize: 28,
    marginVertical: 10,
    fontWeight: "bold",
  },

  mapContainer: {
    height: "80%",
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    height:'80%'
    
  },
  content: {
    display:"flex",
    flexDirection:"column",
    width:"100%",
    backgroundColor:'rgb(247,247,248)',
    
  },
  footer: {
    height: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerText: {
    fontSize: 30,
    fontWeight: "bold",
  },

  map: {
    flex: 1,
    height: 10,
    width: 450,
  },
  modal: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 20,
    borderRadius: 40,
    height: "60%",
    bottom: 0,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
  },
});

export default Layout;
