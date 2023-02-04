import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import icon from "./assets/icon.png"

//plaza verde: #246842

const card = () => {
  return (
    <View style={styles.card}>
        <Text style={styles.commnunity}>PlazaVerde</Text>
        <Image source={icon} style={styles.image}></Image>
        <View style={styles.border}></View>
        <View style={styles.container}>
            <Text style={styles.title_floor}>2 bed - 2 bath</Text>
            
            <Text style={styles.price}>$600</Text>
            
            <Text style={styles.address}>15000 Arroyo Dr, Irvine, CA 92617</Text>
        </View>
    </View>
  )
}

export default card

const styles = StyleSheet.create({
    card: {
        width: '90%', 
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        marginVertical: 10,
      },
      commnunity:{
        width:100,
        borderRadius:10,
        borderWidth: 1,
        paddingVertical: 10,
        textAlign: 'center',
        borderColor: '#246842',
        borderRadius: 10,
        fontWeight:'bold',
        color:'#246842',
        marginBottom:10
      },
      border:{
        height:1,
        marginTop:10,
        backgroundColor:'#f1f1f4'
      },

      container:{
        display:'flex',
        flexDirection:'column',
        marginTop:10
        
      },

      title_floor: {
        width:'80%',
        textAlign:'left',
        borderColor:'#246842',
        fontSize: 32, 
        paddingVertical:0,
       
      },

      price:{
        width:'20%',
        fontSize:22,
        paddingVertical:5

      },
      image:{
        width:'100%',
        height:200,
        alignItems:'center'

      }
})