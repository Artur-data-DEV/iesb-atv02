import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { RootTabScreenProps } from "../types";

export default function App({ navigation }: RootTabScreenProps<"TabOne">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [birthday, setBirthday] = useState("");
  const [favoriteTeam, setFavoriteTeam] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nome."
          placeholderTextColor="#003f5c"
          onChangeText={(nome) => setNome(nome)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Data de nascimento."
          placeholderTextColor="#003f5c"
          onChangeText={(birthday) => setBirthday(birthday)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Time Favorito."
          placeholderTextColor="#003f5c"
          onChangeText={(favorite_team) => setFavoriteTeam(favorite_team)}
        />
      </View>

      <TouchableOpacity>
        <Text
          style={styles.forgot_button}
          onPress={() => navigation.navigate("TabOne")}
        >
          J?? possui conta? Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>REGISTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "stretch",
    paddingTop: 5
  },

  TextInput: {
    height: 40,
    padding: 10,
    marginLeft: 20,
    marginRight: 20
  },

  forgot_button: {
    height: 30,
    display: "flex",
    flex: 3,
    justifyContent: "flex-end",
    marginBottom: 30
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493"
  },
  loginText: {
    alignItems: "center",
    justifyContent: "center"
  }
});
