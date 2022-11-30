import styled from '@emotion/styled';
import mediaQueries from 'shared/constants/mediaQueries';
import { FlexDirectionProperty } from 'shared/types/cssTypes';

interface ContainerPropType {
  containerWidth?: 'normal' | 'medium' | 'wide' | 'extraWide' | 'fullScreen';
  direction?: FlexDirectionProperty;
  children: React.ReactNode;
  style?: { [key: string]: string | number };
}

const { laptop, ipad, tablet, largmobile, smallmobile, midscreens } =
  mediaQueries;

const handleContainerWidth = (
  containerWidth: ContainerPropType['containerWidth']
) => {
  switch (containerWidth) {
    case 'fullScreen':
      return {
        largScreen: '100%',
        laptop: '100%',
        ipad: '100%',
        tablet: '100%',
        largMobile: '100%',
      };
    case 'extraWide':
      return {
        largScreen: '1860px',
        laptop: '1250px',
        ipad: '960px',
        tablet: '660px',
        largMobile: '480px',
      };
    case 'wide':
      return {
        largScreen: '1660px',
        laptop: '1220px',
        ipad: '920px',
        tablet: '660px',
        largMobile: '480px',
      };
    case 'medium':
      return {
        largScreen: '1520px',
        laptop: '1200px',
        ipad: '900px',
        tablet: '640px',
        largMobile: '460px',
      };
    case 'normal':
      return {
        largScreen: '1150px',
        laptop: '1150px',
        ipad: '840px',
        tablet: '600px',
        largMobile: '420px',
      };
    default:
      return {
        largScreen: 'inherit',
        ipad: 'inherit',
        tablet: 'inherit',
        largMobile: 'inherit',
      };
  }
};
// function GridContainer(props: any): JSX.Element;

export default function Container({
  containerWidth = 'normal',
  direction,
  children,
  style,
}: ContainerPropType) {
  const maxWidth = handleContainerWidth(containerWidth);
  const StyledContainer = styled('div')({
    flexDirection: direction ? direction : 'row',
    maxWidth: maxWidth.largScreen,
    boxSizing: 'border-box',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: '15px',
    paddingLeft: '15px',
    [ipad]: {
      maxWidth: maxWidth.ipad,
    },
    [tablet]: {
      maxWidth: maxWidth.tablet,
    },
    [largmobile]: {
      maxWidth: maxWidth.largMobile,
      paddingRight: '10px',
      paddingLeft: '10px',
    },
  });
  return <StyledContainer style={{ ...style }}>{children}</StyledContainer>;
}
