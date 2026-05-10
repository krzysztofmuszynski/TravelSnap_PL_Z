import {View, Text, StyleSheet} from 'react-native';
import {Colors} from "@/Components/Colors";

interface Trip {
    rating: number;
    destination: string;
    [key: string]: any;
}

interface TripStatsProps {
    trips: Trip[];
}

export default function TripStats({trips}: TripStatsProps) {

    const tripsCount = trips.length;
    const averageRating = trips.length > 0
        ? (trips.reduce((sum, trip) => sum + trip.rating, 0) / trips.length).toFixed(1)
        : '0.0';
    const countriesCount = new Set(trips.map(trip => trip.destination)).size;

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>Podróże</Text>
                <Text style={styles.label}>{tripsCount}</Text>
            </View>
            <View>
                <Text style={styles.label}>Śr.ocena</Text>
                <Text style={styles.label}>{averageRating}</Text>
            </View>
            <View>
                <Text style={styles.label}>Kraje</Text>
                <Text style={styles.label}>{countriesCount}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: Colors.card,
        padding: 12,
        gap: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.textPrimary,
    }
});