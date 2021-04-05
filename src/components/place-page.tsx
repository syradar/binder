/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import React from 'react';
import {
  HashRouter as Router,
  Route,
  RouteComponentProps,
  Switch,
  useRouteMatch,
  withRouter,
} from 'react-router-dom';
import { PageHeading } from './page-heading';

interface PlacePageProps {
  name: string;
}

export const PlacePage = ({ name }: PlacePageProps) => {
  return <PageHeading>{name}</PageHeading>;
};
