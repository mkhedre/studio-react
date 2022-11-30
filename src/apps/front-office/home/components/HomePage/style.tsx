import styled from '@emotion/styled';
import mediaQueries from 'shared/constants/mediaQueries';
const {
  ipad,
  laptop,
  largescreens,
  largmobile,
  midscreens,
  miniLaptop,
  smallmobile,
  tablet,
} = mediaQueries;
interface WrapperProps {
  cover?: string;
  height?: string;
  width?: string;
}
interface LandingContentProps {
  maxWidth?: string;
}
interface WhyUsContainerProps {
  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
}
export const WithOverlay = styled('div')((Props: WrapperProps) => ({
  backgroundImage: `url(${Props.cover})`,
  backgroundSize: 'cover',
  // backgroundColor:var
  backgroundRepeat: 'no-repeat',
  minHeight: '90vh',
  width: '100%',
  position: 'relative',
}));
// export const WhyUsContainer = styled(Container)
export const LandingContent = styled('div')((Props: LandingContentProps) => ({
  position: 'absolute',
  top: '20%',
  [tablet]: {
    top: '10%',
  },
  right: '18%',
  maxWidth: `${Props.maxWidth ? Props.maxWidth : '35%'}`,
}));

export const WhyUsContainer = styled('div')((Props: WhyUsContainerProps) => ({
  position: 'relative',
  paddingTop: `${Props.paddingTop}`,
  paddingBottom: `${Props.paddingBottom}`,
  paddingLeft: `${Props.paddingLeft}`,
  paddingRight: `${Props.paddingRight ? Props.paddingRight : '96px'}`,
  alignContent: 'center',
}));
