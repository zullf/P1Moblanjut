import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Kalkulator() {
  const [angkaA, setAngkaA] = useState('');
  const [angkaB, setAngkaB] = useState('');
  const [hasil, setHasil] = useState(null);
  const [operasi, setOperasi] = useState('');

  const hitung = (op) => {
    const a = parseFloat(angkaA);
    const b = parseFloat(angkaB);
    let result = 0;

    switch (op) {
      case 'tambah':
        result = a + b;
        break;
      case 'kurang':
        result = a - b;
        break;
      case 'kali':
        result = a * b;
        break;
      case 'bagi':
        if (b === 0) {
          setHasil('Tidak bisa dibagi 0');
          return;
        }
        result = a / b;
        break;
      default:
        return;
    }

    setOperasi(op);
    setHasil(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Kalkulator Sederhana</Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan Angka A"
        keyboardType="numeric"
        onChangeText={setAngkaA}
        value={angkaA}
      />

      <TextInput
        style={styles.input}
        placeholder="Masukkan Angka B"
        keyboardType="numeric"
        onChangeText={setAngkaB}
        value={angkaB}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => hitung('tambah')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => hitung('kurang')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => hitung('kali')}>
          <Text style={styles.buttonText}>×</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => hitung('bagi')}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>

      {hasil !== null && (
        <Text style={styles.hasil}>
          {angkaA} {operasi} {angkaB} = {hasil}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  judul: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    width: 60,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  hasil: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
});
