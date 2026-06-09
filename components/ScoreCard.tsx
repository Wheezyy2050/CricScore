import { StyleSheet, Text, View } from 'react-native';

import { Team } from '@/constants/teams';
import { TeamBadge } from '@/components/TeamBadge';

export type MatchScore = {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: string;
  awayScore: string;
  status: 'live' | 'upcoming' | 'completed';
  venue?: string;
};

type ScoreCardProps = {
  match: MatchScore;
};

const STATUS_LABELS: Record<MatchScore['status'], string> = {
  live: 'LIVE',
  upcoming: 'Upcoming',
  completed: 'Final',
};

export function ScoreCard({ match }: ScoreCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={[styles.status, match.status === 'live' && styles.liveStatus]}>
          {STATUS_LABELS[match.status]}
        </Text>
        {match.venue ? <Text style={styles.venue}>{match.venue}</Text> : null}
      </View>

      <View style={styles.row}>
        <TeamBadge team={match.homeTeam} />
        <View style={styles.teamInfo}>
          <Text style={styles.teamName}>{match.homeTeam.name}</Text>
          <Text style={styles.score}>{match.homeScore}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <TeamBadge team={match.awayTeam} />
        <View style={styles.teamInfo}>
          <Text style={styles.teamName}>{match.awayTeam.name}</Text>
          <Text style={styles.score}>{match.awayScore}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textTransform: 'uppercase',
  },
  liveStatus: {
    color: '#E31837',
  },
  venue: {
    fontSize: 12,
    color: '#888',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  teamInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  score: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },
});
