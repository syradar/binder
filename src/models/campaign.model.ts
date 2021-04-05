import { Place } from './place.model';

export enum CampaignRole {
  Player,
  GameMaster,
}

export interface Overview {
  id: string;
  players: string;
  todos: string;
}

export interface Campaign {
  name: string;
  campaignId: string;
  game: string;
  tag: CampaignRole;
  sections: {
    overview: Overview;
    places: Place[];
  };
}
