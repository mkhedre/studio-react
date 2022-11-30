import styled from '@emotion/styled';
import { trans } from '@mongez/localization';
import CSS from 'csstype';
import React from 'react';
import colors from 'shared/constants/colors';
import textFontResolver from 'shared/functions/textFontResolver';
import {
  ColorProperty,
  FontSizeProperty,
  WidthProperty,
} from 'shared/types/cssTypes';
import { TextWrapper } from './style';
type TextElementPropsType = {
  text: string | number;
  element?: 'paragraph' | 'heading' | 'subHeading';
  fontSize?: FontSizeProperty<string | 0>;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  color?: ColorProperty;
  textDecoration?: CSS.Property.TextDecoration;
  textAlign?: CSS.Property.TextAlign;
  truncationWidth?: WidthProperty<string | 0>;
  isPrice?: boolean;
  isLocales?: boolean;
  lineHeight?: number;
  startAdornment?: string;
  endAdornment?: string;
  hoverDecoration?: CSS.Property.TextDecoration;
  fontFamily?: 'Graphik Arabic' | 'Greta Arabic';
  style?: object;
  initialFontSize?: string;
  laptopFontSize?: string;
  ipadFontSize?: string;
  tabletFontSize?: string;
  largeMobileFontSize?: string;
  smallMobileFontSize?: string;
  children?: React.ReactNode;
};

const Text = ({
  text,
  element = 'paragraph',
  fontSize,
  weight,
  color,
  textDecoration,
  truncationWidth,
  textAlign,
  isPrice,
  isLocales,
  lineHeight,
  hoverDecoration,
  startAdornment,
  endAdornment,
  fontFamily,
  style,
  initialFontSize,
  laptopFontSize,
  ipadFontSize,
  tabletFontSize,
  largeMobileFontSize,
  smallMobileFontSize,
}: TextElementPropsType) => {
  let truncationConfig: CSS.Properties<string | number> = {};
  if (truncationWidth) {
    truncationConfig = {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: truncationWidth,
      direction: 'ltr',
    };
  }
  const adornamentHandler = React.useCallback(() => {
    let adornament = {};
    if (startAdornment) {
      const before = {
        '&::before': {
          content: `"${startAdornment}"`,
          position: 'relative',
          right: '0.2ch',
        },
      };
      adornament = { ...adornament, ...before };
    }
    if (endAdornment) {
      const after = {
        '&::after': {
          content: `"${endAdornment}"`,
          position: 'relative',
          left: '0.2ch',
        },
      };
      adornament = { ...adornament, ...after };
    }
    return adornament;
  }, [startAdornment, endAdornment]);

  const formatedPrice = new Intl.NumberFormat(`ar-SA`).format(+text);

  const Text = styled(
    element === 'heading' ? 'h1' : element === 'subHeading' ? 'h3' : 'p'
  )({
    ...textFontResolver(
      weight ? weight : 400,
      fontSize ? fontSize : '1.125rem',
      color ? color : colors.PRIMARY,
      fontFamily ? fontFamily : 'Graphik Arabic'
    ),
    textAlign,
    lineHeight,
    textDecoration: textDecoration ? textDecoration : 'none',
    ...truncationConfig,
    ...adornamentHandler(),
    '&:hover': {
      textDecoration: hoverDecoration,
    },
    ...style,
  } as any);

  return (
    <TextWrapper
      initialFontSize={initialFontSize}
      laptopFontSize={laptopFontSize}
      ipadFontSize={ipadFontSize}
      tabletFontSize={tabletFontSize}
      largeMobileFontSize={largeMobileFontSize}
      smallMobileFontSize={smallMobileFontSize}
    >
      <Text>
        {isPrice || isLocales ? formatedPrice : trans(text as string)}
      </Text>
    </TextWrapper>
  );
};

export default Text;
