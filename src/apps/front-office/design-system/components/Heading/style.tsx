import styled from '@emotion/styled';
import mediaQueries from 'shared/constants/mediaQueries';

const { smallmobile, tablet } = mediaQueries;
export const HeadingTitle = styled('h1')((props) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2.5rem',
  [tablet]: {
    fontSize: '1rem',
  },
}));

export const HeadingWrapper = styled('div')({
  position: 'relative',
});
