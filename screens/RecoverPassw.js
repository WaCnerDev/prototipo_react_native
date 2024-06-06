// src/screens/HomeScreen.js
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SvgImage from '../components/SvgImage';
import { LinearGradient } from "expo-linear-gradient";

export default function RecoverPassw2({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerSvg}>
        <SvgImage />
      </View>
      <Text style={styles.txtTitulo}>Recuperar Contraseña</Text>
      <Text style={styles.txtSubtitulo}>Ingrese su corre electrónico para recuperar su cuenta:</Text>
      <TextInput
        placeholder="multimedios@gmail.com"
        style={styles.txtInput}
      ></TextInput>

      <TouchableOpacity onPress={() => navigation.popToTop()}>
        <Text style={styles.txtPass}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("RecoverPassw2")}>
        <LinearGradient
          colors={["#00C1BB", "#005B58"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnLogin}
        >
          <Text style={styles.txtLogin}>Continuar</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.txtCuenta}>No tiene cuenta?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.txtRegistrarse}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#ffffff",
    },
    containerSvg: {
      alignItems: "center",
    },
    txtTitulo: {
      fontSize: 50,
      fontWeight: "bold",
      color: "#34434D",
      textAlign: "left",
      paddingLeft: 30,
    },
    txtSubtitulo: {
      fontSize: 20,
      fontWeight: "light",
      color: "gray",
      textAlign: "left",
      paddingLeft: 30,
      marginTop: 20,
    },
    txtInput: {
      width: "80%",
      height: 50,
      borderRadius: 30,
      paddingLeft: 30,
      marginTop: 20,
      marginLeft: 30,
      borderColor: "gray",
      color: "#000000",
      backgroundColor: "#F5F5F5",
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 4,
      shadowRadius: 10,
      elevation: 10,
    },
    txtPass: {
      textAlign: "right",
      paddingTop: 10,
      marginRight: 50,
      color: "#00C1BB",
      fontSize: 15,
    },
    btnLogin: {
      borderRadius: 30,
      width: 219,
      height: 53,
      marginTop: 35,
      marginLeft: 80,
      paddingTop: 10,
    },
    txtLogin: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff",
      textAlign: "center",
    },
    txtCuenta: {
      textAlign: "center",
      paddingTop: 10,
      color: "#00C1BB",
      fontSize: 15,
      alignItems: "center",
    },
    txtRegistrarse: {
      textAlign: "center",
      color: "#00C1BB",
      fontSize: 15,
      alignItems: "center",
      fontWeight: "bold",
    },
  });
  
