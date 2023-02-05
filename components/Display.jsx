import React from 'react';
import { ScrollView, Image, Text, View, StyleSheet } from 'react-native';

const DisplayResults = ({ results }) => {
  return (
    <ScrollView style={styles.container}>
      {results.map((result, index) => (
        <View key={index} style={styles.resultContainer}>
          <Image source={{ uri: result.imageUrl }} style={styles.image} />
          <Text style={styles.text}>{result.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    resultContainer: {
      marginBottom: 20,
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 10,
    },
    text: {
      fontSize: 20,
      marginTop: 10,
    },
  });

  export default DisplayResults;