import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { RadioButton } from "react-native-paper";
import store from "../redux/store";

const filter = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10000);
  const [bed, setBed] = useState(10);
  const [bath, setBath] = useState(10);








  return (
    <View>
      <Text>filter</Text>
      <TouchableOpacity onPress={() => setShowFilterOptions(true)}>
        <Text style={styles.button}>Open Filter</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        style={styles.modal}
        visible={showFilterOptions}
        animationType="slide"
      >
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
                    setMin(min);
                    console.log(min);
                  }}
                  style={{ width: 160, postion: "absolute", fontSize: 10 }}
                  mode="dropdown"
                  itemStyle={{
                    color: "red",
                    fontWeight: "900",
                    fontSize: 18,
                    padding: 30,
                  }}
                >
                  <Picker.Item label="No Min" value="0" />
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
                    setMax(max);
                    console.log(max);
                  }}
                  style={{ width: 160, postion: "absolute", fontSize: 10 }}
                  mode="dropdown"
                  itemStyle={{
                    color: "red",
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
              <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 15 }}>
                Beds
              </Text>
              <RadioButton.Group
                onValueChange={(value) => setBed(value)}
                value={bed}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>Any</Text>
                    <RadioButton value="Any" />
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>1+</Text>
                    <RadioButton value="1" />
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>2+</Text>
                    <RadioButton value="2" />
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>3+</Text>
                    <RadioButton value="3" />
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>4+</Text>
                    <RadioButton value="4" />
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>5+</Text>
                    <RadioButton value="5" />
                  </View>
                </View>
              </RadioButton.Group>
            </View>

            <View style={styles.bath}>
              <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 15 }}>
                Bathrooms
              </Text>
              <RadioButton.Group
                onValueChange={(value) => setBath(value)}
                value={bath}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>Any</Text>
                    <RadioButton value="Any" />
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>1+</Text>
                    <RadioButton value="1" />
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>2+</Text>
                    <RadioButton value="2" />
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>3+</Text>
                    <RadioButton value="3" />
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>4+</Text>
                    <RadioButton value="4" />
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>5+</Text>
                    <RadioButton value="5" />
                  </View>
                </View>
              </RadioButton.Group>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default filter;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "red",
  },
  modalContainer: {
    height: "80%",
    width: "100%",
    backgroundColor: "#fcfcfc",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    backgroundColor: "#fcfcfc",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    height: 20,
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
  },
  price: {
    display: "flex",
    flexDirection: "row",
  },
  price_min: {
    width: "50%",
  },
  price_max: {
    width: "50%",
  },
});
