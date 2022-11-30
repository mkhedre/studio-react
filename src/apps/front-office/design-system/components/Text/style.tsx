import styled from '@emotion/styled';
import mediaQueries from 'shared/constants/mediaQueries';

const { ipad, tablet, largmobile, laptop, smallmobile } = mediaQueries;

interface Iprops {
  initialFontSize: string | any;
  laptopFontSize?: string;
  ipadFontSize?: string;
  tabletFontSize?: string;
  largeMobileFontSize?: string;
  smallMobileFontSize?: string;
}

export const TextWrapper = styled('div')(
  ({
    initialFontSize,
    laptopFontSize,
    ipadFontSize,
    tabletFontSize,
    largeMobileFontSize,
    smallMobileFontSize,
  }: Iprops) => ({
    '& p, & h1': {
      fontsize: initialFontSize,
      [laptop]: {
        fontSize: laptopFontSize
          ? laptopFontSize
          : `calc(${initialFontSize}*0.9)`,
      },
      [ipad]: {
        fontSize: ipadFontSize
          ? ipadFontSize
          : `calc(${initialFontSize}*0.9*0.9)`,
      },
      [tablet]: {
        fontSize: tabletFontSize
          ? tabletFontSize
          : `calc(${initialFontSize}*0.9*0.9)`,
      },
      [largmobile]: {
        fontSize: largeMobileFontSize
          ? largeMobileFontSize
          : `calc(${initialFontSize}*0.9*0.9*0.9)`,
      },
      [smallmobile]: {
        fontSize: smallMobileFontSize
          ? smallMobileFontSize
          : `calc(${initialFontSize}*0.9*0.9)`,
      },
    },
  })
);
