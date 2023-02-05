import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Layout from './components/Layout.jsx'
import Filter from './components/filter'

export default function App() {
  return (
    <Layout header = "ZotHome" >
      <SafeAreaView style={styles.container}>
        
        <Filter/>
        <StatusBar style="auto" />
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});