import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function Latihan1() {
       const [count, setCount] = useState(0);
         return (
        <View style={styles.container}>
         <Text style={styles.judul}>Profil Mahasiswa</Text>
         <Text style={[styles.teks]}>Nama        : Zulfikar Hasan</Text>
         <Text style={[styles.teks]}>Nim           : 2410501016</Text>
         <Text style={[styles.teks]}>Prodi         : D3 Sistem Informasi</Text>
         <Text style={[styles.teks]}>Angkatan : 2024</Text>
         <Text style={styles.counter}>Tombol sapa ditekan : {count}</Text>
         <Button
            title="[SAPA SAYA]"
            onPress={() => setCount(count + 1)}
            color="blue"
         />
         </View>
     );
    }
const styles = StyleSheet.create({
 container: {
 backgroundColor: '#ffffff',
 flex: 1,
 alignItems: 'flex-start',
 justifyContent: 'flex-start',
 padding: 60,
 },
 judul: {
    marginLeft: 50, 
    fontSize: 24, 
    color: '#333333', 
    marginBottom: 36 
},
 teks: { 
    fontSize: 16,
    color: '#810202'  
},
 counter: {
    fontSize: 16, 
    marginTop: 40,
    marginBottom: 10 
},

});