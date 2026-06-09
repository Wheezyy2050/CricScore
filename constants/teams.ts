export type Team = {
  id: string;
  name: string;
  shortName: string;
  primaryColor: string;
};

export const SA_TEAMS: Team[] = [
  { id: 'proteas', name: 'Proteas', shortName: 'RSA', primaryColor: '#007A4D' },
  { id: 'titans', name: 'Titans', shortName: 'TIT', primaryColor: '#003366' },
  { id: 'lions', name: 'Lions', shortName: 'LIO', primaryColor: '#C8102E' },
  { id: 'dolphins', name: 'Dolphins', shortName: 'DOL', primaryColor: '#00A3E0' },
  { id: 'cape-cobras', name: 'Cape Cobras', shortName: 'CC', primaryColor: '#FFB81C' },
  { id: 'knights', name: 'Knights', shortName: 'KNI', primaryColor: '#582C83' },
  { id: 'warriors', name: 'Warriors', shortName: 'WAR', primaryColor: '#E31837' },
];

export function getTeamById(id: string): Team | undefined {
  return SA_TEAMS.find((team) => team.id === id);
}
