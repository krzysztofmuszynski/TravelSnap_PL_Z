import {useState, useEffect} from "react";
import {View, Text, TextInput, Pressable, ScrollView, StyleSheet} from "react-native";

import TripCard from "@/Components/TripCard";
import ScreenHeader from "@/Components/ScreenHeader";
import {Colors} from "@/Components/Colors";
import EmptyState from "@/Components/EmptyState";
import TripStats from "@/Components/TripStats";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {Link, useLocalSearchParams, useRouter} from "expo-router";

interface Trip {
    id: string;
    title: string;
    destination: string;
    date: string;
    rating: number;
    onDelete?: () => void;
}

export default function HomeScreen() {
    const router = useRouter();

    const params = useLocalSearchParams<{
        newTripId?: string;
        newTripTitle?: string;
        newTripDestination?: string;
        newTripDate?: string;
        newTripRating?: string;
    }>();

    const [trips, setTrips] = useState<Trip[]>([]);
    const [title, setTitle] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [rating, setRating] = useState('');

    useEffect(() => {
        if(
            !params.newTripId ||
            !params.newTripTitle ||
            !params.newTripDestination ||
            !params.newTripDate ||
            !params.newTripRating
        ) return;

        const newTrip: Trip = {
            id: params.newTripId,
            title: params.newTripTitle,
            destination: params.newTripDestination,
            date: params.newTripDate || 'Brak daty',
            rating: Number(params.newTripRating) || 1,
        };

        setTrips((currentTrips) => {
            const tripAlreadyExists = currentTrips.some(
                (trip) => trip.id === newTrip.id
            );

            if(tripAlreadyExists) return currentTrips;

            return [...currentTrips, newTrip];
        });
    }, [
        params.newTripId,
        params.newTripTitle,
        params.newTripDestination,
        params.newTripDate,
        params.newTripRating,
    ]);

    const handleDeleteTrip = (id: string) => {
        setTrips(trips.filter(trip => trip.id !== id));
    }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
          <StatusBar style="light"/>
          <ScrollView style={styles.container}>
              <ScreenHeader tripCount={trips.length} />
              <Pressable
                  style={styles.fab}
                  onPress={() => router.push("/addTrip")}
              >
                  <Text style={styles.fabText}>+</Text>
              </Pressable>
              <TripStats trips={trips} />
              <View>
                  <Text style={styles.tripCounter}>Aktualna liczba podróży: {trips.length}</Text>
                  {trips.length === 0 ? <EmptyState /> : trips.map(trip => (
                      <Link
                          key={trip.id}
                          asChild
                          href={{
                              pathname: "/trip/[id]",
                              params: {
                                  id: trip.id,
                                  title: trip.title,
                                  destination: trip.destination,
                                  date: trip.date,
                                  rating: trip.rating.toString(),
                              },
                          }}
                      >
                          <TripCard
                              key={trip.id}
                              title={trip.title}
                              destination={trip.destination}
                              date={trip.date}
                              rating={trip.rating}
                              onDelete={() => handleDeleteTrip(trip.id)}
                          />
                      </Link>
                  ))}
              </View>
          </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {flex:1, padding: 50, backgroundColor: Colors.background},
    heading: {fontSize: 28, fontWeight: 'bold', marginBottom: 16, marginTop: 48},
    input: {borderWidth: 1, borderColor: Colors.inputBorder, borderRadius: 12, padding: 12, fontSize: 16, backgroundColor: Colors.background, marginBottom: 8, color: '#fff'},
    addBtn: {backgroundColor: Colors.accent, padding: 14, borderRadius: 12, marginTop: 4, marginBottom: 16, alignItems: 'center'},
    addText: {fontSize: 16, fontWeight: 'bold', color: '#fff'},
    tripCounter: {fontSize: 16, fontWeight: 'bold', color: '#0A1628', marginTop: 16, padding: 16},
    fab: { position: "absolute", top: -40, right: 20, width: 30, height: 30, borderRadius: 30, backgroundColor: Colors.accent, alignItems: "center", justifyContent: "center", elevation: 6, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6},
    fabText: { color: "#fff", fontSize: 20, fontWeight: "bold", lineHeight: 21},
});