// src/screens/HomeScreen.js
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import SvgImage from "../components/SvgImage";
import { LinearGradient } from "expo-linear-gradient";

// Import de Firebase
import appFirebase from '../accesoFireBase';
import { addDoc, collection, getFirestore } from "firebase/firestore";
const db = getFirestore(appFirebase)




export default function SingUp({navigation}) {

  //conector a base de datos
const RegistarUsuario = async(navigation)=>{
  try {
    await addDoc(collection(db, 'ModuloRU'),{...estado})

    Alert.alert('Alerta', 'El usuario se registró con éxito')

    navigation.navigate('SignIn')

  } catch  {
    console.error(error)
  }
}

  const inicioEstado = {
    nombreCompleto: "",
    correoElectronico: "",
    contrasenna:""
  };

  const [estado, setEstado] = useState(inicioEstado);

  const HandlerChangeText = (value, name) => {
    setEstado({ ...estado, [name]: value });
    console.log(estado);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerSvg}>
        <SvgImage />
      </View>
      <Text style={styles.txtTitulo}>Crear Cuenta</Text>
      <Text style={styles.txtSubtitulo}>Ingrese los datos solicitados:</Text>
      <TextInput
        onChangeText={(value) => HandlerChangeText(value, "nombreCompleto")}
        value={estado.nombreCompleto}
        placeholder="Nombre Completo"
        style={styles.txtInput}
      ></TextInput>
      <TextInput
       onChangeText={(value) => HandlerChangeText(value, "correoElectronico")}
       value={estado.correoElectronico}
        placeholder="Correo Electrónico"
        style={styles.txtInput}
      ></TextInput>
      <TextInput
       onChangeText={(value) => HandlerChangeText(value, "contrasenna")}
       value={estado.contrasenna}
        placeholder="Contraseña"
        style={styles.txtInput}
        secureTextEntry={true}
      ></TextInput>

      <TouchableOpacity onPress={() => navigation.popToTop()}>
        <Text style={styles.txtPass}>Inicio de Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.mainBtn}
        onPress={() => RegistarUsuario(navigation) }
      >
        <LinearGradient
          colors={["#00C1BB", "#005B58"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnLogin}
        >
          <Text style={styles.txtLogin}>Registrate</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.txtCuenta}>Ya tiene cuenta.</Text>
      <TouchableOpacity onPress={() => navigation.navigate("RecoverPassw")}>
        <Text style={styles.txtRegistrarse}>¿Has olvidado su contraseña?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
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
    width: 220,
    height: 55,
    marginTop: 35,
    padding: 10,
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
  mainBtn: {
    alignItems: "center",
  },
});
