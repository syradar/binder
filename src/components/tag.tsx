/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import React from 'react';

export interface TagProps {
  name: string;
}

export const Tag = ({ name }: TagProps) => {
  return (
    <div tw="bg-white bg-opacity-10 inline px-1 py-0.5 rounded text-teal-500">
      {name}
    </div>
  );
};
