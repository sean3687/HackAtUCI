import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

const Layout = ({ children, header }) => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerText}>{header}</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.content}>
        {children}
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Layout;

