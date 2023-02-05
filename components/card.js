import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import icon from "../assets/icon.png";
import store from "../redux/store";
import safety from "../redux/safety";

//plaza verde: #246842

let map = new Map();
let color = ["#5F668C", "#4e3d59", "#c73d3e", "#c99b2b", "#5fa182", "#307255"];
map.set("Vista del Campo", color[0]);
map.set("Vista del Campo Norte", color[1]);
map.set("Puerta del Sol", color[2]);
map.set("Camino del Sol", color[3]);
map.set("Plaza Verde I", color[4]);
map.set("Plaza Verde II", color[5]);

function addon(community_name) {
  return map.get(community_name);
}

const card = (props) => {

  return (
   
   <View style={styles.card}>
      <Text
        style={{
          width: 140,
          borderRadius: 10,
          borderWidth: 1,
          paddingVertical: 10,
          textAlign: "center",
          borderColor: addon(props.community),
          borderRadius: 10,
          fontWeight: "bold",
          color: addon(props.community),
          marginBottom: 10,
        }}
      >
        {props.community}
      </Text>
      <Image source={{ uri: route.image }} style={styles.image}></Image>
      <View style={styles.border}></View>
      <View style={styles.container}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text
            style={{
              width: "80%",
              textAlign: "left",
              borderColor: "#246842",
              fontSize: 20,
              paddingVertical: 0,
            }}
          >
            {props.title}
          </Text>
        </View>

        <View style={{ display: "flex" }}>
          <Text style={styles.price}>${props.price}</Text>
          <Text style={styles.price_sub}>PER INSTALLMENT/PER PERSON</Text>
        </View>
      </View>
    </View>
  );
};

export default card;

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    marginVertical: 10,
    marginLeft: 22,
    justifyContent: 'center'
  },

  border: {
    height: 1,
    marginTop: 10,
    backgroundColor: "#f1f1f4",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 5,
  },

  title_floor: {
    width: "80%",
    textAlign: "left",
    borderColor: "#246842",
    fontSize: 20,
    paddingVertical: 0,
  },

  price: {
    fontSize: 20,
    fontWeight: "500",
    color: "#727373",
  },
  price_sub: {
    fontSize: 10,
    fontWeight: "800",
    color: "#727373",
    margin: 3,
  },
  size: {
    marginTop: 2,
    color: "#727373",
    fontSize: 15,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
    alignItems: "center",
  },
});
