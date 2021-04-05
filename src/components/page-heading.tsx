/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css, TwStyle } from 'twin.macro';
import { h2Style } from '../styles';

export function PageHeading({ children }: React.PropsWithChildren<{}>) {
  return <h2 css={h2Style()}>{children}</h2>;
}
