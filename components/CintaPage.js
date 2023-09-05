// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';

// import { TouchableOpacity } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// function HomeScreen({ navigation }) {
//     const [contador, setContador] = useState(0);
//     const [mostrarNumero, setMostrarNumero] = useState(true);

//     useEffect(() => {
//         const intervalo = setInterval(() => {
//             setContador((prevContador) => prevContador + 1);
//         }, 1000);

//         if (contador === 4) {
//             clearInterval(intervalo); // Detener el contador en 3
//             setMostrarNumero(false); // Ocultar el número cuando el contador llegue a 3
//         }

//         return () => clearInterval(intervalo);
//     }, [contador]);

//     return (
//         <View style={styles.container}>
//             <View style={styles.buttomSeleccion}>
//                 {mostrarNumero && <Text style={styles.text}>{contador}</Text>}
//                 {!mostrarNumero && <Text style={styles.text}>start</Text>}

//             </View>

//             <StatusBar style="auto" />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#1C1C1E',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     buttomSeleccion: {
//       width: 200,
//       height: 200,
//       position: 'relative',
//       borderRadius: 100,
//       backgroundColor: '#2C2C2E',
//       justifyContent: 'center', // Centra verticalmente
//     },
//     text: {
//       fontSize: 30,
//       color: '#ffffff',
//       alignSelf: 'center', // Centra horizontalmente
//     },
//   });
  
  
// export default HomeScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function HomeScreen({ navigation }) {
  const [contador, setContador] = useState(3);
  const [mostrarNumero, setMostrarNumero] = useState(true);
  const [fondoBoton, setFondoBoton] = useState('#2C2C2E'); // Color inicial del botón

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador((prevContador) => prevContador - 1);
      setFondoBoton('#bb0000');
        setInterval(()=>{
            setFondoBoton('#2C2C2E'); // Volver al color original
        },300)
    }, 1000);

    if (contador === 0) {
      clearInterval(intervalo); // Detener el contador en 3
      setMostrarNumero(false); // Ocultar el número cuando el contador llegue a 3
    }

    // Cambiar el color de fondo del botón a rojo cuando cambie el número
    // if (contador % 2 === 0) {
    //     setFondoBoton('#2C2C2E'); // Volver al color original
    // } else {
    //     setFondoBoton('red');
    //     setInterval(()=>{
    //         setFondoBoton('#2C2C2E'); // Volver al color original
    //     },300)
    // }

    return () => clearInterval(intervalo);
  }, [contador]);

  return (
    <View style={styles.container}>
      <View style={[styles.buttomSeleccion, { backgroundColor: fondoBoton }]}>
        {mostrarNumero && <Text style={styles.text}>{contador}</Text>}
        {!mostrarNumero && <Text style={styles.text}>start</Text>}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttomSeleccion: {
    width: 200,
    height: 200,
    position: 'relative',
    borderRadius: 100,
    justifyContent: 'center', // Centra verticalmente
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
    alignSelf: 'center', // Centra horizontalmente
  },
});

export default HomeScreen;
