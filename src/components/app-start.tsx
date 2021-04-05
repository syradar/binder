/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import React from 'react';
import { CampaignCard, CampaignCardProps } from './campaign-card';
import { PageHeading } from './page-heading';

export interface AppStartProps {
  campaigns: CampaignCardProps[];
}

export const AppStart = ({ campaigns }: AppStartProps) => {
  return (
    <div tw="p-8">
      <PageHeading>My campaigns</PageHeading>
      <div tw="flex gap-8">
        {campaigns.map((campaign) => (
          <div key={campaign.campaignId} tw="w-1/4">
            <CampaignCard {...campaign}></CampaignCard>
          </div>
        ))}
      </div>
    </div>
  );
};
