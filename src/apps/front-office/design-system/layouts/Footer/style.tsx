import styled from '@emotion/styled';
import mediaQueries from 'shared/constants/mediaQueries';

const { laptop, tablet, smallmobile } = mediaQueries;
export const FooterElement = styled('footer')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  margin: '2.2rem 0',
  [laptop]: {
    marginTop: '1.8rem ',
  },
  [tablet]: {
    marginTop: '1.25rem',
    flexDirection: 'column',
    textAlign: 'center',
  },
});

export const SiteMapElement = styled('div')({
  padding: '30px',
  [tablet]: {
    padding: '0',
  },
});
