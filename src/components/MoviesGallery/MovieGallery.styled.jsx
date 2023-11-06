import { styled } from 'styled-components';

export const MoviesGalleryWrap = styled('div')(() => {
  return {
    display: 'flex',
    '& div': {
      padding: '10px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
    },
  };
});
