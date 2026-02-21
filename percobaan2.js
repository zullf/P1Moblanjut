import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
   const [count, setCount] = useState(0);

 return (
 <View style={styles.container}>
 <Text style={styles.title}>Halo, React Native!</Text>
 <Text style={styles.counter}>Jumlah Klik: {count}</Text>
 <Button
 title="Tambah"
 onPress={() => setCount(count + 1)}
 />
 <Button
 title="Reset"
 color="red"
 onPress={() => setCount(0)}
 />
 <Button
 title="Kurang"
 color="green"
 onPress={() => setCount(count - 1)}
 />
 </View>
  );
}

const styles = StyleSheet.create({
 container: { flex: 1, backgroundColor: '#ffffff', alignItems: 'center',
 justifyContent: 'center', gap: 12 },
 title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
 counter: { fontSize: 18, color: '#555', marginBottom: 10 },
});