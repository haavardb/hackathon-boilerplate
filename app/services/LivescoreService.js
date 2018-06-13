import ApiService from './ApiService';

const LivescoreService = {

  // API DOCS
  // http://livescore-api.com/worldcup/

  getGroupIdForGroup: (group) => {
    switch (group) {
      case 'a':
        return 793;
      case 'b':
        return 794;
      case 'c':
        return 795;
      case 'd':
        return 796;
      case 'e':
        return 797;
      case 'f':
        return 798;
      case 'g':
        return 799;
      case 'h':
        return 800;
      default:
        return '';
    }
  },

  // What games comes next? On which date? On what time? Where?
  getFixturesForGroup: (group) => {
    const groupId = this.getGroupIdForGroup(group);
    const url = `http://livescore-api.com/api-client/fixtures/matches.json?league=${groupId}`;

    return ApiService.get({
      url,
    });
  },

  // Livescores
  // You can get the livescores for all games currently played or for specific group individually.
  getScoresForGroup: (group) => {
    const groupId = this.getGroupIdForGroup(group);
    const url = `http://livescore-api.com/api-client/scores/live.json?league=${groupId}`;

    return ApiService.get({
      url,
    });
  },

  getStandingsForGroup: (group) => {
    const groupId = this.getGroupIdForGroup(group);
    const url = `http://livescore-api.com/api-client/leagues/table.json?league=${groupId}`;

    return ApiService.get({
      url,
    });
  },
};

export default LivescoreService;
