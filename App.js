import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState } from 'react';

export default function Latihan1() {
       const [motivasi, setMotivasi] = useState('');
       const tampilkanMotivasi = () => {
         setMotivasi("Apapun yang terjadi, terjadilah");
        };
         return (
        <View style={styles.container}>
         <Text style={styles.judul}>Profil Diri</Text>
          <Image
         source={require('./assets/profil.jpg')}
         style={styles.image}
         />
         <Text style={[styles.teks]}>Nama: Zulfikar Hasan</Text>
         <Text style={[styles.teks]}>Nim: 2410501016</Text>
         <Text style={[styles.teks]}>Prodi: D3 Sistem Informasi</Text>
         <Text style={[styles.teks]}>Angkatan: 2024</Text>
         <Text style={styles.judul}>Bio Singkat</Text>
         <Text style={[styles.bio]}>Saya adalah seorang mahasiswa Fakultas Ilmu komputer yang berfokus
         pada pengembangan website serta mobile untuk kedepannya, saya menguasai figma dan react dasar 
         untuk pengembangan website</Text>
         <Text style={styles.counter}>Motivasi : {motivasi}</Text>
         <Button
            title="Tampilkan Motivasi"
            onPress={tampilkanMotivasi}
            color="blue"
         />
         </View>
     );
    }
const styles = StyleSheet.create({
 container: {
 backgroundColor: '#ffffff',
 flex: 1,
 alignItems: 'center',
 justifyContent: 'flex-start',
 padding: 60,
 },
 judul: {
    fontSize: 24, 
    color: '#333333', 
    fontWeight: 'bold',
    marginBottom: 16, 
    marginTop: 20
},
image: {
  width: 150,
  height: 150,
  marginTop: 20,
  marginBottom: 40
},
 teks: { 
    fontSize: 16,
    color: '#810202',  
},
 bio: {
    fontsize: 16,
    lineHeight: 24,
    marginBottom: 10
},
 counter: {
    fontSize: 16, 
    marginTop: 40,
    marginBottom: 10 
},

});