import {useState} from "react";
import {View, Text, TextInput, Pressable, ScrollView, StyleSheet} from "react-native";

import TripCard from "@/Components/TripCard";

interface Trip {
    id: string;
    title: string;
    destination: string;
    date: string;
    rating: number;
}

export default function HomeScreen() {
    const [trips, setTrips] = useState<Trip[]>([]);
    const [title, setTitle] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [rating, setRating] = useState('');

    const handleAddTrip = () => {
        if(!title.trim() || !destination.trim() ) return;
        const newTrip: Trip = {
            id: Date.now().toString(),
            title: title.trim(),
            destination: destination.trim(),
            date: date.trim() || 'Brak daty',
            rating: Number(rating) || 1,
        };

        setTrips([...trips, newTrip]);
        setTitle('');
        setDestination('');
        setDate('');
        setRating('');
    }


    const handleRatingChange = (value: string) => {
        if (value === "") {
            setRating("");
            return;
        }

        const parsedValue = parseInt(value, 10);

        if (parsedValue >= 1 && parsedValue <= 5) {
            setRating(parsedValue.toString());
        }
    };

    const isValidYearMonth = (value: string) => {
        const cleaned = value.replace(/[^0-9-]/g, "");

        if (cleaned.length <= 7) {
            setDate(cleaned);
        }
    };

    return (
      <ScrollView style={styles.container}>
          <TextInput
              style={styles.input}
              placeholder="Tytuł podróży..."
              value={title}
              onChangeText={setTitle}
          />
          <TextInput
              style={styles.input}
              placeholder="Destynacja"
              value={destination}
              onChangeText={setDestination}
          />
          <TextInput
              style={styles.input}
              placeholder="Data (e.g. 2026-07)..."
              value={date}
              onChangeText={isValidYearMonth}
          />
          <TextInput
              style={styles.input}
              placeholder="Ocena (e.g. 5)"
              value={rating}
              onChangeText={handleRatingChange}
              keyboardType="numeric"
          />

          <Pressable
              style={styles.addBtn}
              onPress={handleAddTrip}
              >
            <Text style={styles.addText}>+ Dodaj podróż</Text>
          </Pressable>

          <View>
              <Text style={styles.tripCounter}>Aktualna liczba podróży: {trips.length}</Text>
              {trips.map(trip => (
                  <TripCard key={trip.id} title={trip.title} destination={trip.destination} date={trip.date} rating={trip.rating} />
              ))}
          </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {flex:1, padding: 50, backgroundColor: '#f0f4f8'},
    heading: {fontSize: 28, fontWeight: 'bold', marginBottom: 16, marginTop: 48},
    input: {borderWidth: 1, borderColor: '#CED4DA', borderRadius: 8, padding: 12, fontSize: 16, backgroundColor: '#fff', marginBottom: 8},
    addBtn: {backgroundColor: '#61DAFB', padding: 14, borderRadius: 8, marginTop: 4, marginBottom: 16, alignItems: 'center'},
    addText: {fontSize: 16, fontWeight: 'bold', color: '#0A1628'},
    tripCounter: {fontSize: 16, fontWeight: 'bold', color: '#0A1628', marginTop: 16, padding: 16},
});