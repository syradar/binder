/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

export interface AppTitleBarProps {
  campaignName?: string;
}

export const AppTitleBar = ({ campaignName }: AppTitleBarProps) => {
  return (
    <nav tw="flex justify-between p-4 bg-teal-900 text-teal-50">
      <NavLink to={'/'} exact tw="font-serif font-bold">
        Binder
      </NavLink>

      <div>{campaignName}</div>

      <div tw="">Autumn Summer</div>
    </nav>
  );
};
