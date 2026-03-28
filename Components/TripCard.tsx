import {View, Text, StyleSheet, Image, Pressable, Alert} from 'react-native';
import Star from "@/Components/Star";

interface TripCardProps {
    title: string;
    destination: string;
    date: string;
    rating: number;
    imageURI?: string;
}

export default function TripCard({title, destination, date, rating, imageURI} : TripCardProps) {

    return (
        <View style={styles.card}>
            <Pressable onPress={() => {Alert.alert("Wykup wycieczke")}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.destination}>{destination}</Text>
                <Text style={styles.date}>{date}</Text>
                {imageURI && (
                    <Image
                        style={{width: 100, height: 100, borderRadius: 5, marginTop: 8}}
                        source={{
                            uri: imageURI
                        }}
                    />
                )}
                <Text style={styles.rating}>
                    {Array.from({length: rating}).map((el, index) => (
                        <Star key={index} />
                    ))}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 2},
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    destination: {
        fontSize: 14,
        color: '#61DAFB',
        marginTop: 4,
    },
    date: {
        fontSize: 12,
        color: '#8B95A5',
        marginTop: 4,
    },
    rating: {
        fontSize: 16,
        color: '#FFB86C',
        marginTop: 8,
    }
});