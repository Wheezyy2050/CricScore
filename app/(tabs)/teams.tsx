import { FlatList, StyleSheet } from 'react-native';

import { TeamBadge } from '@/components/TeamBadge';
import { Text, View } from '@/components/Themed';
import { SA_TEAMS } from '@/constants/teams';

export default function TeamsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SA Teams</Text>
      <FlatList
        data={SA_TEAMS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <TeamBadge team={item} size="lg" />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.shortName}>{item.shortName}</Text>
            </View>
          </View>
        )}
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 8,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  shortName: {
    fontSize: 14,
    opacity: 0.6,
    marginTop: 2,
  },
  separator: {
    height: 1,
    opacity: 0.1,
  },
});
