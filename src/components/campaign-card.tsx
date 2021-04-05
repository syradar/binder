/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import React from 'react';
import { h3Style } from '../styles';
import { Tag } from './tag';
import { CampaignRole } from '../models/campaign.model';
import { NavLink } from 'react-router-dom';

export interface CampaignCardProps {
  name: string;
  campaignId: string;
  game: string;
  tag: CampaignRole;
}

const tagName = (tag: CampaignRole) => {
  switch (tag) {
    case CampaignRole.Player:
      return 'Player';
    case CampaignRole.GameMaster:
      return 'Game Master';
  }
};

export const CampaignCard = ({
  name,
  campaignId,
  game,
  tag,
}: CampaignCardProps) => {
  return (
    <NavLink
      to={`campaign/${campaignId}`}
      tw="block rounded-2xl p-4 bg-gray-800 hover:bg-gray-700 text-left"
    >
      <h2 css={h3Style()}>{name}</h2>
      <div tw="mb-2">{game}</div>
      <Tag name={tagName(tag)}></Tag>
    </NavLink>
  );
};
