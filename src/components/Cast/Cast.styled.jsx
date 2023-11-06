import { styled } from 'styled-components';

export const CastWrap = styled('div')(() => {
  return {
    '& ul': {
      display: 'flex',
      listStyle: 'none',
      flexWrap: 'wrap',
      gap: '15px',
      padding: '20px',

      '& li': {
        width: '30vh',
      },
    },
  };
});
