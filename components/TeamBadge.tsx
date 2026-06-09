import { StyleSheet, Text, View } from 'react-native';

import { Team } from '@/constants/teams';

type TeamBadgeProps = {
  team: Team;
  size?: 'sm' | 'md' | 'lg';
};

const SIZES = {
  sm: { container: 32, text: 10 },
  md: { container: 44, text: 12 },
  lg: { container: 56, text: 14 },
} as const;

export function TeamBadge({ team, size = 'md' }: TeamBadgeProps) {
  const dimensions = SIZES[size];

  return (
    <View
      style={[
        styles.badge,
        {
          width: dimensions.container,
          height: dimensions.container,
          borderRadius: dimensions.container / 2,
          backgroundColor: team.primaryColor,
        },
      ]}>
      <Text style={[styles.shortName, { fontSize: dimensions.text }]}>{team.shortName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  shortName: {
    color: '#fff',
    fontWeight: '700',
  },
});
