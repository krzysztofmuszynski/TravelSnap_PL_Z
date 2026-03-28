import { StyleSheet, Text, ScrollView } from 'react-native';
import TripCard from "@/Components/TripCard";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.heading}>Travel Snap</Text>
        <TripCard title={'Wypad na weekend do słonecznej Hiszpanii'} destination={'Barcelonaм'} date={'25.04.2026'} rating={5} />
        <TripCard title={'Zimowa przygoda w snieznej Norwegii'} destination={'Oslo'} date={'15.02.2026'} rating={4} />
        <TripCard title={'Romantyczna podróż do Wenecji'} destination={'Włochy'} date={'10.05.2026'} rating={5} />
        <TripCard title={'Eksploracja starożytnych grobowców w Egipcie'} destination={'Kair'} date={'20.03.2026'} rating={4} />
        <TripCard title={'Relaks na egzotycznych plażach Bali'} destination={'Indonezja'} date={'07.06.2026'} rating={5} />
        <TripCard title={'Kultura i sztuka w paryskim Louvre'} destination={'Francja'} date={'12.09.2026'} rating={5} />
        <TripCard title={'Przygoda w japońskich górach'} destination={'Japonia'} date={'01.11.2026'} rating={4} />
        <TripCard title={'Safari przez afrykańskie sawanny'} destination={'Tanzania'} date={'22.07.2026'} rating={5} />
        <TripCard title={'Zwiedzanie gotyckich zamków w Czechach'} destination={'Praga'} date={'14.08.2026'} rating={4} />
        <TripCard title={'Morskie przygody na Karaibach'} destination={'Dominikana'} date={'19.12.2026'} rating={5} />
        <TripCard title={'Pieszą trasą przez szwajcarskie Alpy'} destination={'Szwajcaria'} date={'28.10.2026'} rating={4} />
        <TripCard title={'Odkrywanie greckich wysp'} destination={'Grecja'} date={'03.07.2026'} rating={5} />
        <TripCard title={'Wakacje w słonecznym Marakeszu'} destination={'Maroko'} date={'30.05.2026'} rating={4} />
        <TripCard title={'Nowoczesny Dubaj i pustynia'} destination={'UAE'} date={'16.04.2026'} rating={5} />
        <TripCard title={'Pitoreskowe wioski na Santorini'} destination={'Grecja'} date={'08.09.2026'} rating={5} />
        <TripCard title={'Turystyka w Amsterdamie i kanałach'} destination={'Holandia'} date={'21.06.2026'} rating={4} />
        <TripCard title={'Wyprawy w labiryncie medyn Fez'} destination={'Maroko'} date={'12.03.2026'} rating={3} />
        <TripCard title={'Przygoda na islandzkich lodowcach'} destination={'Islandia'} date={'05.01.2027'} rating={5} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {flex:1, backgroundColor: '#f0f4f8'},
    heading: {fontSize: 28, fontWeight: 'bold', padding: 16, marginTop: 48},
});