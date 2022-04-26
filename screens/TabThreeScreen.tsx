import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image
} from "react-native";

const Item = ({ title, status, rodada_atual, fase_atual }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>Status: {status}</Text>
    <Text style={styles.title}>Rodada Atual: {rodada_atual}</Text>
    <Text style={styles.title}>Fase Atual: {fase_atual}</Text>
  </View>
);

const App = () => {
  const [campeonato, setCampeonato] = useState([]);

  useEffect(() => {
    async function getCampeonato() {
      try {
        const resposta = await fetch(
          "https://api.api-futebol.com.br/v1/campeonatos",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer live_8f52968d02ad7d589b472cc80dcf48"
            }
          }
        );
        const resultado = await resposta.json();
        setCampeonato(resultado);
      } catch (error) {
        console.error(error);
      }
    }
    getCampeonato();
  }, []);

  const renderItem = ({ item }) => (
    <>
      <Item
        title={item.nome}
        status={item.status ? item.status : "N/A"}
        rodada_atual={
          item.rodada_atual
            ? `${item.rodada_atual.nome} - ${item.rodada_atual.status} (${item.tipo})`
            : "N/A"
        }
        fase_atual={item.fase_atual.nome ? item.fase_atual.nome : "N/A"}
      />
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={campeonato}
        renderItem={renderItem}
        keyExtractor={(item) => item.campeonato_id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});

export default App;
