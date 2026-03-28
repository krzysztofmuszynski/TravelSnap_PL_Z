import { StyleSheet, Text, ScrollView } from 'react-native';
import TripCard from "@/Components/TripCard";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.heading}>Travel Snap</Text>
        <TripCard title={'Zimowa przygoda w snieznej Norwegii'} destination={'Oslo'} date={'15.04.2026'} rating={4} imageURI={'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'} />
        {/*<TripCard title={'Kultura i sztuka w paryskim Louvre'} destination={'Francja'} date={'12.09.2026'} rating={5} imageURI={'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'} />*/}
        <TripCard title={'Kultura i sztuka w paryskim Louvre'} destination={'Francja'} date={'12.09.2026'} rating={5}/>
        <TripCard title={'Safari przez afrykańskie sawanny'} destination={'Tanzania'} date={'22.07.2026'} rating={3} imageURI={'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'} />
        <TripCard title={'Pieszą trasą przez szwajcarskie Alpy'} destination={'Szwajcaria'} date={'28.10.2026'} rating={4} imageURI={'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'} />
        <TripCard title={'Odkrywanie greckich wysp'} destination={'Grecja'} date={'03.07.2026'} rating={5} imageURI={'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'} />
        <TripCard title={'Pitoreskowe wioski na Santorini'} destination={'Grecja'} date={'08.09.2026'} rating={2} imageURI={'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'} />
        <TripCard title={'Turystyka w Amsterdamie i kanałach'} destination={'Holandia'} date={'21.06.2026'} rating={4} imageURI={'https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'} />
        <TripCard title={'Przygoda na islandzkich lodowcach'} destination={'Islandia'} date={'05.01.2027'} rating={0} imageURI={'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {flex:1, backgroundColor: '#f0f4f8'},
    heading: {fontSize: 28, fontWeight: 'bold', padding: 16, marginTop: 48},
});