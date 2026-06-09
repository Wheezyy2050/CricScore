import { FlatList, StyleSheet } from 'react-native';

import { ScoreCard, MatchScore } from '@/components/ScoreCard';
import { Text, View } from '@/components/Themed';
import { SA_TEAMS } from '@/constants/teams';

const SAMPLE_MATCHES: MatchScore[] = [
  {
    id: '1',
    homeTeam: SA_TEAMS[0],
    awayTeam: SA_TEAMS[2],
    homeScore: '245/6 (42.3)',
    awayScore: '198/4 (38)',
    status: 'live',
    venue: 'Wanderers, Johannesburg',
  },
  {
    id: '2',
    homeTeam: SA_TEAMS[1],
    awayTeam: SA_TEAMS[3],
    homeScore: '—',
    awayScore: '—',
    status: 'upcoming',
    venue: 'SuperSport Park, Centurion',
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Live Matches</Text>
      <FlatList
        data={SAMPLE_MATCHES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <ScoreCard match={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 24,
  },
  separator: {
    height: 12,
  },
});
