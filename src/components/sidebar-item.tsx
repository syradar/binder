/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import React from 'react';
import { NavLink } from 'react-router-dom';

export interface SidebarItemProps {
  name: string;
  active: boolean;
  id: string;
  nodes?: SidebarItemProps[];
  navigateTo: string;
  indentLevel: number;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  name,
  active,
  id,
  children,
  navigateTo,
  indentLevel,
}) => {
  const indentLevelClass = indentLevel === 0 ? tw`px-8` : tw`pl-12 pr-8`;

  return (
    <>
      <NavLink
        exact
        to={navigateTo}
        activeStyle={tw`font-bold bg-gray-700`}
        css={[
          tw`block py-1 hover:bg-gray-700 select-none`,
          indentLevelClass,
          'test',
        ]}
      >
        {name}
      </NavLink>
      {children}
    </>
  );
};
