import { styled } from 'styled-components';

export const InfoWrap = styled('div')(() => {
  return {
    marginBottom: '20px',
    '& a': {
      textDecoration: 'none',
      color: 'black',
      fontSize: '20px',
      marginLeft: '20px',
      '&.active': {
        textDecoration: 'underline',
      },
    },
  };
});
