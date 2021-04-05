/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';
import React, { useState } from 'react';
import './App.css';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { AppTitleBar } from './components/app-titlebar';
import { AppStart } from './components/app-start';
import { Campaign, CampaignRole } from './models/campaign.model';
import CampaignPage, { CampaignProps } from './components/campaign';

export const campaigns: Campaign[] = [
  {
    campaignId: '1238n1kjnfdjknwef',
    name: 'Game of Trudvang',
    game: 'Drakar och Demoner Trudvang',
    tag: CampaignRole.GameMaster,
    sections: {
      overview: {
        id: 'overview',
        players: 'test',
        todos: 'test',
      },
      places: [
        {
          name: 'Kopparboda',
          placeId: 'opweabaoda',
        },
        {
          name: 'Lovsala',
          placeId: 'lovasala',
        },
      ],
    },
  },
  {
    campaignId: '1mkl12lkmfw',
    name: 'City of Broken Dreams',
    game: 'Mutant 2089',
    tag: CampaignRole.Player,
    sections: {
      overview: {
        id: 'overview',
        players: 'test Mutent',
        todos: 'test muteant',
      },
      places: [
        {
          name: 'Smith Guns',
          placeId: 'smiehtguyns',
        },
        {
          name: 'Nightclub',
          placeId: 'nichclub',
        },
      ],
    },
  },
];

function App() {
  const [campaign, setCampaign] = useState<Campaign>();

  const updateActiveCampaign = (newCampaign: Campaign | undefined) =>
    setCampaign(newCampaign);

  return (
    <Router>
      <div tw="flex flex-col min-h-screen bg-gray-900 text-gray-200">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return (
                <>
                  <AppTitleBar campaignName={undefined}></AppTitleBar>
                  <AppStart campaigns={campaigns}></AppStart>
                </>
              );
            }}
          ></Route>
          <Route
            path="/campaign/:campaignId"
            render={(props) => {
              const campaign = campaigns.find(
                (c) => c.campaignId === props.match.params.campaignId
              );

              if (!campaign) {
                return null;
              }

              const campaignProps: CampaignProps = {
                campaign,
                ...props,
              };

              return (
                <>
                  <AppTitleBar
                    campaignName={campaignProps.campaign.name}
                  ></AppTitleBar>
                  <CampaignPage {...campaignProps}></CampaignPage>;
                </>
              );
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
