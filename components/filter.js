import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";
import Checkbox from 'expo-checkbox';
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Ionicons } from "@expo/vector-icons";
import {
  RadioButton,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

import store from "../redux/store";


const community_data = [
    {
      name:"Vista del Campo",
      short:"VDC",
      checked:true,
    },
    {
      name:"Vista del Campo Norte",
      short:"VDCN",
      checked:true,
    },
    {
      name:"Camino del Sol",
      short:"CDS",
      checked:true,
    },
    {
      name:"Puerta del Sol",
      short:"PDS",
      checked:true,
    },
    {
      name:"Plaza Verde",
      short:"PV",
      checked:true,
    },
    {
      name:"Plaza Verde II",
      short:"PVII",
      checked:true,
    },
  
  ]
const filter = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10000);
  const [bed, setBed] = useState(10);
  const [bath, setBath] = useState(10);
  const [community, setCommunity] = useState(community_data);          
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    console.log('Community data has changed:', community);
  }, [community]);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#4f9deb",
      accent: "#f1c40f",
    },
  };
 

  function updatePriceMin(Min) {
    setMin(Min);
    let Int = parseInt(Min);
    store.dispatch({ type: "updatePriceMin", payload: Int });
  }

  function updatePriceMax(Max) {
    setMax(Max);
    let Int = parseInt(Max);
    store.dispatch({ type: "updatePriceMax", payload: Int });
  }

  function updateBeds(Bed) {
    setBed(Bed);
    let Int = parseInt(Bed);
    store.dispatch({ type: "updateBeds", payload: Int });
  }

  function updateBaths(Bath) {
    setBath(Bath);
    let Int = parseInt(Bath);
    store.dispatch({ type: "updateBaths", payload: Int });
  }

  const updateCommunityCheckbox = (idx, bool) => {
    setCommunity(prevCommunity => {
         const newCommunity = [...prevCommunity];
         newCommunity[idx].checked = bool;
         return newCommunity;
       });
  };
  
 
  const Submit = async () => {
    // store.dispatch({ type: "updateCommunityCheckbox", payload: community });
    setAnimation(true);
    try {
      const response = await axios.get("https://hack-at-uci-backend-maithyy.vercel.app/api/db?query=SELECT%20*%20FROM%20housing")
      console.log("this is response.data"+response.data.rows[0].image);
      // store.dispatch({ type: "updateListOfReviews", payload: response.data });
      
    }
    catch(error) {
        console.error(error);
    }
    finally {
        setAnimation(false);
        setShowFilterOptions(false);
    };
  };

  useEffect(() => {
    setCommunity(store.getState().filterReducer[0].community);
  });

  return (
    <PaperProvider theme={theme}>
        <View style={styles.subHeader}>

       
        <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setShowFilterOptions(true)}
            mode="outlined"
            color="#4f9deb"
        >
            <Ionicons name="filter-outline" size={30} color="#4f9deb" />
            <Text style={styles.buttonText}>Open Filter</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        style={styles.modal}
        visible={showFilterOptions}
        animationType="slide"
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Filter</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setShowFilterOptions(false)}
              >
                <MaterialIcons name="close" color="#2a2a33" size={22} />
              </TouchableOpacity>
            </View>

            <View style={styles.border}></View>

            <View style={styles.contentContainer}>
              <View style={styles.price}>
                <View style={styles.price_min}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Price Minimum
                  </Text>
                  <Picker
                    selectedValue={min}
                    onValueChange={(min) => {
                      updatePriceMin(min);
                    }}
                    style={{ width: 160, postion: "absolute", fontSize: 10 }}
                    mode="dropdown"
                    itemStyle={{
                      color: "#4f9deb",
                      fontWeight: "900",
                      fontSize: 18,
                      padding: 30,
                    }}
                  >
                    <Picker.Item
                      style={{ fontSize: 15 }}
                      label="No Min"
                      value="0"
                    />
                    <Picker.Item label="$200" value="200" />
                    <Picker.Item label="$400" value="400" />
                    <Picker.Item label="$600" value="800" />
                    <Picker.Item label="$800" value="800" />
                    <Picker.Item label="$1000" value="1000" />
                  </Picker>
                </View>
                <View style={styles.price_max}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Price Maximum
                  </Text>
                  <Picker
                    selectedValue={max}
                    onValueChange={(max) => {
                      updatePriceMax(max);
                    }}
                    style={{ width: 160, postion: "absolute", fontSize: 10 }}
                    mode="dropdown"
                    itemStyle={{
                      color: "#4f9deb",
                      fontWeight: "900",
                      fontSize: 18,
                      padding: 30,
                    }}
                  >
                    <Picker.Item label="No Max" value="10000" />
                    <Picker.Item label="$1200" value="1200" />
                    <Picker.Item label="$1400" value="1400" />
                    <Picker.Item label="$1600" value="1600" />
                    <Picker.Item label="$1800" value="1800" />
                    <Picker.Item label="$2000" value="2000" />
                    <Picker.Item label="$2200" value="2200" />
                  </Picker>
                </View>
              </View>

              <View style={styles.bed}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Beds</Text>
                <View style={styles.border}></View>
                <RadioButton.Group
                  onValueChange={(value) => updateBeds(value)}
                  value={bed}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <RadioButton value="10" />
                      <Text>Any</Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <RadioButton value="1" />
                      <Text>1+</Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <RadioButton value="1.5" />
                      <Text>1.5+</Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <RadioButton value="2" />
                      <Text>2+</Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <RadioButton value="3" />
                      <Text>3+</Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <RadioButton value="4" />
                      <Text>4+</Text>
                    </View>
                  </View>
                </RadioButton.Group>
              </View>

              <View style={styles.bath}>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginTop: 15 }}
                >
                  Bathrooms
                </Text>
                <View style={styles.border}></View>
                <RadioButton.Group
                  onValueChange={(value) => updateBaths(value)}
                  value={bath}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <RadioButton value="10" />
                      <Text>Any</Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <RadioButton value="1" />
                      <Text>1+</Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <RadioButton value="2" />
                      <Text>2+</Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <RadioButton value="3" />
                      <Text>3+</Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <RadioButton value="4" />
                      <Text>4+</Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <RadioButton value="5" />
                      <Text>5+</Text>
                    </View>
                  </View>
                </RadioButton.Group>
              </View>

              <View style={styles.communityContainer}>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginTop: 15 }}
                >
                  ACC Community
                </Text>
                <View style={styles.border}></View>
                <View>
                  {community.map((community, idx) => (
                    <View
                      key={idx}
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <Checkbox
                        color="#4f9deb"
                        style={styles.checkbox}
                        value={community.checked}
                        onValueChange={() => (updateCommunityCheckbox(idx,!community.checked))
                        }
                        
                      />
                      <Text style={styles.community_text}>
                        {community.name}
                        
                      </Text>
                     
                    </View>
                  ))}
                </View>
              </View>

              <View style={styles.submit}>
                <TouchableOpacity
                onPress={()=>{
                    Submit()
                }}
                  style={{
                    backgroundColor: "#4f9deb",
                    padding: 12,
                    borderRadius: 4,
                    marginTop: 60,
                  }}
                >
                  <View animating="false" style={{display:'flex',flexDirection:'row', justifyContent:"center", marginLeft:10}}>
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Apply Changes
                    </Text>
                    <ActivityIndicator
                      animating={animation}
                      size="small"
                      color="#f7f7f7"
                    ></ActivityIndicator>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </PaperProvider>
  );
};

export default filter;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "red",
  },

  subHeader:{
    width:'100%',
    backgroundColor:'rgb(247,247,248)'
  },
  filterButton: {
      flexDirection: "row",
      color: "#4f9deb",
      padding:5,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: "#4f9deb",
      paddingHorizontal:20,
      marginTop:10,
        backgroundColor:"rgb(255,255,255)"
  },
  buttonText:{
    justifyContent: "center",
      alignItems: "center",
      color: "#4f9deb",
      marginTop: 5,
      marginLeft: 5,
  },
  modalBackground: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContainer: {
    height: "90%",
    width: "100%",
    backgroundColor: "#fcfcfc",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
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
  border: {
    backgroundColor: "#ddd",
    width: "100%",
    height: 1,
  },
  contentContainer: {
    padding: 20,
    height: "100%",
  },
  price: {
    display: "flex",
    flexDirection: "row",
  },
  price_min: {
    width: "50%",
    alignItems: "center",
  },
  price_max: {
    width: "50%",
    alignItems: "center",
  },
  communityContainer: {
    height: 200,
  },
  checkbox:{
    marginTop:8,
    marginRight:8
  },
  community_text: {
    marginVertical: 9,
    fontSize: 13,
  },
  submit: {},
  submit_button: {},
});
