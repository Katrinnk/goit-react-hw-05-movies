import { styled } from 'styled-components';

export const Title = styled('p')(() => {
  return {
    color: 'black',
    textAlign: 'center',
    fontSize: '18px',
    marginBottom: 0,
    marginTop: '5px',
  };
});

export const Wrap = styled('div')(() => {
  return {
    '& a': {
      textDecoration: 'none',
      '& img': {
        width: '40vh',
      },
    },
  };
});
