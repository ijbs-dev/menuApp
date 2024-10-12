// src/screens/MenuScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import ResultModal from '../components/ResultModal';

const MenuScreen = () => {
  const [soma, setSoma] = useState<number | null>(null);
  const [percentuais, setPercentuais] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Função para obter a soma da Questão 1
  const obterSoma = () => {
    axios
      .get('http://10.0.2.2:3000/questao1')
      .then((response) => {
        setSoma(response.data.soma);
        setActiveModal('soma');
        setModalVisible(true); // Abre o modal
      })
      .catch((error) => console.error(error));
  };

  // Função para obter os percentuais da Questão 2
  const obterPercentuais = () => {
    axios
      .get('http://10.0.2.2:3000/questao2')
      .then((response) => {
        setPercentuais(response.data);
        setActiveModal('percentuais');
        setModalVisible(true); // Abre o modal
      })
      .catch((error) => console.error(error));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Menu de Desafios</Text>

      <TouchableOpacity style={styles.button} onPress={obterSoma}>
        <Text style={styles.buttonText}>Calcular Soma</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button1} onPress={obterPercentuais}>
        <Text style={styles.buttonText}>Calcular Percentual</Text>
      </TouchableOpacity>

      {/* Modal para exibir o resultado */}
      <ResultModal
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
        activeModal={activeModal}
        soma={soma}
        percentuais={percentuais}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#4285F4',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 20,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  button1: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 20,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default MenuScreen;
