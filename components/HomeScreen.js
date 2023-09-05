import React, { useState } from 'react';
import { View, Text,TouchableOpacity, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Svg, { Polygon } from 'react-native-svg';


const CustomButton = ({ title, onPress, backgroundColor, textColor, width, height ,position ,zIndex,marginBottom,borderRadius,display,justifyContent,alignItems}) => {
  return (
    <TouchableOpacity
    style={[styles.button, { backgroundColor, width, height,position ,zIndex,marginBottom,borderRadius,display,justifyContent,alignItems}]}
    onPress={onPress}
    >
<View style={styles.buttonContent}>
      <View></View>
  <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
        <Image
          source={require('../assets/arrowRight.png')} // Reemplaza con la ruta correcta de tu icono PNG
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

function HomeScreen({ navigation }) {


  const handleButtonPress = () => {
    navigation.navigate('Juego')
    
  };

  return (
    <View style={styles.container} >
     
     <Image
        source={require('../assets/prueba1.jpg')} // Reemplaza con la ruta correcta de tu imagen
        style={styles.image}
      />
      <Svg width="100%" height="100%" style={styles.polygono} viewBox="0 0 100 100">
        <Polygon
          points="0 76, 100 50, 100 100, 0 100, 0 48"
          fill="#1C1C1E"
        />
      </Svg>
      <View style={{ width:'100 %',height:'10 %', position:'absolute',zIndex:15,top:'65 %', display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.text}>CREATE A WORKOUT PLAN</Text>
      <Text style={styles.text2}>TO STAY FIT</Text>
      </View>
      <CustomButton
        title="NEXT"
        onPress={handleButtonPress}
        backgroundColor="#D0FD3E"
        textColor="#000"
        marginBottom={'20 %'}
        borderRadius={30}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        zIndex={1000}
        width={'40 %'} 
        height={'6 %'}  
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  buttonContent: {
    flexDirection: 'row', // Alinea el icono y el texto en una fila
    alignItems: 'center', // Alinea verticalmente el contenido
  },
  icon: {
    width: 20, // Ajusta el ancho del icono según tus necesidades
    height: 20, // Ajusta la altura del icono según tus necesidades
    // marginRight: 100, // Espacio entre el icono y el texto
  },
  polygono:{
    zIndex:10,
    position:'absolute',
  },
  text: {
    fontSize: 30,
    // fontFamily: 'fantasy',
    // fontWeight: 'bold',
    color: '#ffffff',
  },
  text2: {
    fontSize: 30,
    // fontFamily: 'fantasy',
    fontWeight: 'bold',
    color: '#ffffff',
  },
   image: {
    top:0,
    height: '70 %', // Alto de la imagen
    resizeMode: 'contain', // Cambia el modo de redimensionamiento según tus necesidades
  },
  
});

export default HomeScreen;

