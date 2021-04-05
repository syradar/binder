/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import React from 'react';
import { Campaign, CampaignRole } from '../models/campaign.model';
import {
  HashRouter as Router,
  NavLink,
  Route,
  RouteComponentProps,
  Switch,
  useRouteMatch,
  withRouter,
} from 'react-router-dom';
import { Sidebar, SidebarProps } from './sidebar';
import { PlacePage } from './place-page';
import { PlaceOverview } from './place-overview';
import { CampaignOverview } from './campaign-overview';

interface RouterProps {
  campaignId: string;
}

export interface CampaignProps extends RouteComponentProps<RouterProps> {
  campaign: Campaign;
}

const CampaignPage: React.FC<CampaignProps> = ({ campaign }) => {
  const createSideBarItems = (
    campaign: Campaign,
    url: string
  ): SidebarProps => {
    console.log(url);

    return {
      url,
      items: [
        {
          name: 'Overview',
          active: false,
          id: 'overview',
          navigateTo: `${url}`,
          indentLevel: 0,
        },
        {
          name: 'Place',
          active: false,
          id: 'place',
          navigateTo: `${url}/place`,
          indentLevel: 0,
          nodes: campaign.sections.places.map((p) => ({
            id: p.placeId,
            name: p.name,
            active: false,
            navigateTo: `${url}/place/${p.placeId}`,
            indentLevel: 1,
          })),
        },
      ],
      activeId: 'overview',
    };
  };

  const { url, path } = useRouteMatch();
  console.log('path', path);
  console.log('url', url);

  return (
    <Router>
      <div tw="flex">
        <Sidebar {...createSideBarItems(campaign, url)}></Sidebar>
        <div tw="p-8 w-full">
          <Switch>
            <Route exact path={path}>
              <CampaignOverview></CampaignOverview>
            </Route>
            <Route
              exact
              path={`${path}/place/:placeId`}
              render={(props) => {
                const place = campaign.sections.places.find(
                  (p) => p.placeId === props.match.params.placeId
                );

                if (!place) {
                  return null;
                }

                return <PlacePage name={place.name}></PlacePage>;
              }}
            />

            <Route exact path={`${path}/place/`}>
              <PlaceOverview></PlaceOverview>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default withRouter(CampaignPage);
