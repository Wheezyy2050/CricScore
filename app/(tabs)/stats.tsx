import { FlatList, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

type PlayerStat = {
  id: string;
  name: string;
  team: string;
  runs: number;
  wickets: number;
  average: number;
};

const SAMPLE_STATS: PlayerStat[] = [
  { id: '1', name: 'Quinton de Kock', team: 'Titans', runs: 482, wickets: 0, average: 48.2 },
  { id: '2', name: 'Kagiso Rabada', team: 'Lions', runs: 86, wickets: 24, average: 22.5 },
  { id: '3', name: 'Aiden Markram', team: 'Titans', runs: 391, wickets: 6, average: 39.1 },
  { id: '4', name: 'Tabraiz Shamsi', team: 'Warriors', runs: 42, wickets: 18, average: 19.8 },
];

export default function StatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Player Stats</Text>
      <FlatList
        data={SAMPLE_STATS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.playerHeader}>
              <Text style={styles.playerName}>{item.name}</Text>
              <Text style={styles.team}>{item.team}</Text>
            </View>
            <View style={styles.statsRow}>
              <Stat label="Runs" value={item.runs} />
              <Stat label="Wickets" value={item.wickets} />
              <Stat label="Avg" value={item.average} />
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
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
  card: {
    paddingVertical: 12,
  },
  playerHeader: {
    marginBottom: 8,
  },
  playerName: {
    fontSize: 16,
    fontWeight: '600',
  },
  team: {
    fontSize: 13,
    opacity: 0.6,
    marginTop: 2,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 24,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 12,
    opacity: 0.6,
    marginTop: 2,
  },
  separator: {
    height: 1,
    opacity: 0.1,
  },
});
