/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import React from 'react';
import { SidebarItem, SidebarItemProps } from './sidebar-item';

export interface SidebarProps {
  items: SidebarItemProps[];
  activeId: string;
  url: string;
}

export const Sidebar = ({ items, activeId, url }: SidebarProps) => {
  return (
    <nav tw="flex flex-col gap-y-1 min-h-screen py-8 bg-gray-800 text-gray-200 min-width[256px]">
      <ul>
        {items.map(({ name, id, nodes, indentLevel, navigateTo }) => (
          <li key={id}>
            <SidebarItem
              name={name}
              active={id === activeId}
              id={id}
              navigateTo={navigateTo}
              indentLevel={indentLevel}
            >
              {console.log(nodes)}
              {nodes && (
                <ul>
                  {nodes.map((c) => (
                    <li key={c.id}>
                      <SidebarItem
                        name={c.name}
                        active={c.id === activeId}
                        id={c.id}
                        navigateTo={c.navigateTo}
                        indentLevel={c.indentLevel}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </SidebarItem>
          </li>
        ))}
      </ul>
    </nav>
  );
};
