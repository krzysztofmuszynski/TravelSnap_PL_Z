import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Ionicons, AntDesign} from '@expo/vector-icons';
import {Colors} from "@/Components/Colors";
import Star from "@/Components/Star";

interface TripCardProps {
    title: string;
    destination: string;
    date: string;
    rating: number;
    imageURI?: string;
    onDelete: () => void;
}

export default function TripCard({title, destination, date, rating, imageURI, onDelete} : TripCardProps) {

    return (
        <View style={styles.card}>
           <View style={styles.header}>
               <Ionicons name="location" size={20} color="#E94560" />
               <View>
                   <Text style={styles.title}>{title}</Text>
                   <Text style={styles.destination}>{destination}</Text>
               </View>
           </View>
           <View>
               <View style={styles.dateRow}>
                   <Ionicons name="calendar" size={14} color="#61DAFB" />
                   <Text style={styles.dateText}>
                       {date}
                   </Text>
               </View>
               <View style={styles.stars}>
                   {Array.from({length: rating}).map((_, index) => (
                       <Star key={index}/>
                   ))}
               </View>
               <Pressable onPress={onDelete}>
                   <Text style={styles.deleteBtn}>Delete</Text>
               </Pressable>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.card,
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        //Cień iOS
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 8,
        //Cień Android
        elevation: 4,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    title: {fontSize: 18, fontWeight: 'bold', color: Colors.textPrimary},
    destination: {fontSize: 13, color: Colors.textPrimary, marginTop: 2},
    dateRow: {flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
    dateText: {fontSize: 12, color: Colors.primary, marginLeft: 6},
    stars: {flexDirection: 'row', gap: 2},
    deleteBtn: {alignSelf: 'flex-end', backgroundColor: Colors.accent, padding: 6, borderRadius: 12},
});