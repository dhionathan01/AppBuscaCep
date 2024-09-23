import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import api from './src/services/api';
import { useState } from 'react';

export default function App() {
  const [cep, setCep] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Digite o cep desejado</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: 79003241'
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType='numeric'
        ></TextInput>
      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#1d75cd' }]}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, {backgroundColor: '#cd3e1d' }]}>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <View   style={styles.resultado}>
        <Text style={styles.itemText}>CEP: 7900000</Text>
        <Text style={styles.itemText}>Logradouro: Rua react native</Text>
        <Text style={styles.itemText}>Bairro: Centro</Text>
        <Text style={styles.itemText}>Cidade: São Paulo</Text>
        <Text style={styles.itemText}>Estado: SP</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  botao: {
    height: 60,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 15,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 22,
    color: '#FFF'
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 22,
  }
});
