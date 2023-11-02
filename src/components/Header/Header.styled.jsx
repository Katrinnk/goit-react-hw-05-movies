import { styled } from 'styled-components';

export const Nav = styled('nav')(() => {
  return {
    marginBottom: 20,
    '& div': {
      padding: 15,
      '& a': {
        fontWeight: 600,
        fontSize: 20,
        marginLeft: 40,
        textDecoration: 'none',
        color: '#677bd6',
        '&.active': {
          textDecoration: 'underline',
          color: '#353fd0',
        },
      },
    },
  };
});
