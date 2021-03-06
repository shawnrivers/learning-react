/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import Link from 'next/link';
import { BLUE_1 } from '../../../constants/colors';

type LinkProps = React.ComponentProps<typeof Link>;

export const StyledLink: React.FC<LinkProps> = (props) => {
  const { children, ...restProps } = props;

  return (
    <Link {...restProps}>
      <a
        css={css`
          font-size: 1.2rem;
          color: ${BLUE_1};

          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        `}
      >
        {children}
      </a>
    </Link>
  );
};
