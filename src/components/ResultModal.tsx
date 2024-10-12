import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ResultModalProps {
  modalVisible: boolean;
  closeModal: () => void;
  activeModal: string | null;
  soma: number | null;
  percentuais: any;
}

const ResultModal: React.FC<ResultModalProps> = ({
  modalVisible,
  closeModal,
  activeModal,
  soma,
  percentuais,
}) => {
  const [detailsVisible, setDetailsVisible] = useState<boolean>(false);

  const logicExplanation = {
    soma: 'A lógica da soma é simples: somamos números consecutivos de 1 a 13.',
    percentuais:
      'O percentual é calculado dividindo o faturamento de cada estado pelo faturamento total e multiplicando por 100.',
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {activeModal === 'soma' && soma !== null && (
            <View>
              <Text style={styles.resultTitle}>Resultado da Soma</Text>
              <Text style={styles.resultText}>{soma}</Text>
            </View>
          )}

          {activeModal === 'percentuais' && percentuais && (
            <View>
              <Text style={styles.resultTitle}>Percentuais de Faturamento</Text>
              <Text style={styles.resultItem}>SP: {percentuais.SP.toFixed(2)}%</Text>
              <Text style={styles.resultItem}>RJ: {percentuais.RJ.toFixed(2)}%</Text>
              <Text style={styles.resultItem}>MG: {percentuais.MG.toFixed(2)}%</Text>
              <Text style={styles.resultItem}>ES: {percentuais.ES.toFixed(2)}%</Text>
              <Text style={styles.resultItem}>OUTROS: {percentuais.OUTROS.toFixed(2)}%</Text>
            </View>
          )}

          
          <TouchableOpacity
            style={styles.detailsIcon}
            onPress={() => setDetailsVisible(true)}
          >
            <Icon name="info" size={28} color="#000" />
          </TouchableOpacity>

          
          <Modal
            animationType="slide"
            transparent={true}
            visible={detailsVisible}
            onRequestClose={() => setDetailsVisible(false)}
          >
            <View style={styles.detailsModalContainer}>
              <View style={styles.detailsModalContent}>
                <Text style={styles.detailsTitle}>Lógica do Desafio</Text>
                <Text style={styles.detailsText}>
                  {activeModal === 'soma'
                    ? logicExplanation.soma
                    : logicExplanation.percentuais}
                </Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setDetailsVisible(false)}
                >
                  <Text style={styles.buttonText}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.buttonText}>Voltar ao Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  resultTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  resultText: {
    fontSize: 24,
    color: '#333',
    marginVertical: 10,
    textAlign: 'center',
  },
  resultItem: {
    fontSize: 18,
    color: '#555',
    marginVertical: 3,
  },
  closeButton: {
    backgroundColor: '#f44336',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  detailsIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  detailsModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  detailsModalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  detailsTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  detailsText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ResultModal;
