import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';;

const CustomButton = ({ title, onPress, backgroundColor, textColor, width, height, position, zIndex, marginBottom, borderRadius, display, justifyContent, alignItems }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, width, height, position, zIndex, marginBottom, borderRadius, display, justifyContent, alignItems }]}
      onPress={onPress}
    >

      <View style={styles.buttonContent}>
        <Image
          source={require('../assets/arrowLeft.png')} // Reemplaza con la ruta correcta de tu icono PNG
          style={styles.icon}
        />
        <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

function JuegoScreen({ navigation }) {


  const [cintaImg, setCintaImg] = useState()
  const [cintaTxt, setCintaTxt] = useState()
  const [cintaBkg, setCintaBkg] = useState()
  const [gymImg, setGymImg] = useState()
  const [gymTxt, setGymTxt] = useState()
  const [gymBkg, setGymBkg] = useState()

  const handleButtonPress = () => {
    navigation.navigate('Home')

  };

  const handlePressCinta = () => {
    navigation.navigate('CintaPage')
  };
  
  const handlePressPesas = () => {
    navigation.navigate('CintaPage')    
  };

  return (
    <View style={styles.container} >

      {/* <View style={{ width:'100 %',height:'10 %', position:'absolute',zIndex:15,top:'65 %', display:'flex',justifyContent:'center',alignItems:'center'}}> */}
      <View style={{ width: '100 %', height: '10 %', zIndex: 15, top: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>SELECT THE ACTIVITY</Text>
        <Text style={styles.text2}>TO START</Text>
      </View>

      <View style={{ width: '40 %', height: '47 %', zIndex: 15, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <TouchableOpacity onPress={handlePressCinta}>
          <View style={styles.buttomSeleccion}>
            <Image
              source={require('../assets/cinta_white.png')} // Reemplaza con la ruta correcta de tu imagen
              style={styles.image}>
            </Image>
            <Text style={styles.text3}>Treadmill Count</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePressPesas}>
          <View style={styles.buttomSeleccion}>
            <Image
              source={require('../assets/pesa_white.png')} // Reemplaza con la ruta correcta de tu imagen
              style={styles.image}>
            </Image>
            <Text style={styles.text3}>Gym Routine</Text>
          </View>
        </TouchableOpacity>

      </View>

      <CustomButton
        title="GO BACKS"
        onPress={handleButtonPress}
        backgroundColor="#D0FD3E"
        textColor="#000"
        marginBottom={'5 %'}
        borderRadius={30}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        zIndex={1000}
        width={'40 %'}
        height={'6 %'}
        position={'relative'}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    height: '100 %',
    backgroundColor: '#1C1C1E',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonContent: {
    flexDirection: 'row', // Alinea el icono y el texto en una fila
    alignItems: 'center', // Alinea verticalmente el contenido
  },
  icon: {
    width: 20, // Ajusta el ancho del icono según tus necesidades
    height: 20, // Ajusta la altura del icono según tus necesidades
    // marginRight: 10, // Espacio entre el icono y el texto
  },
  buttomSeleccion: {
    width: 200,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#2C2C2E',
  },
  polygono: {
    zIndex: 10,
    position: 'absolute',
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
  },
  text2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  image: {
    width: 80,
    height: 80,
    paddingBottom: '3%',

  },
  text3: {
    paddingTop: '3%',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  button: {
    backgroundColor: 'red'
  },

});

export default JuegoScreen;
