import styled from '@emotion/styled';
import React from 'react';
import {
  AlignItemsProperty,
  FlexDirectionProperty,
  FlexProperty,
  HeightProperty,
  JustifyContentProperty,
  WidthProperty,
} from 'shared/types/cssTypes';

type FlexWrapperProps = {
  /**
   *  @prop {React.ReactNode} children - the items that the flex is going to wrap
   */
  children: React.ReactNode;
  /**
   * @prop {WidthProperty<string | 0> | "fullWidth"} width - what is the width of the flex container
   * @default "fit-content"
   */
  width?: WidthProperty<string | 0>;
  /**
   * @prop {HeightProperty<string | 0>} height - what is the height of the flex container
   * @default "fit-content"
   */
  height?: HeightProperty<string | 0>;
  /**
   * @prop {FlexDirectionProperty} direction - what is direction of the flex container
   * @default "row"
   */
  direction?: FlexDirectionProperty;
  /**
   * @prop {FlexDirectionProperty} justifyContent - how would you like the items to justify inside the flex container
   * @default "flex-start"
   */
  justifyContent?: JustifyContentProperty;
  /**
   * @prop {AlignItemsProperty} align - how would you like the items to align inside the flex container
   * @default "center"
   */
  alignItems?: AlignItemsProperty;
  gap?: number;
  /**
   * @prop {String} gapUnit - the spacing unit between items
   * @default rem
   */
  gapUnit?: 'rem' | 'px' | 'ch' | 'em';
  /**
   * @prop {[key: string]: string | number} styles - any custom style
   */
  style?: { [key: string]: string | number };

  flex?: FlexProperty<string | 0>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement> | any) => void;
  ref?: any;
};

const Flex = ({
  gap,
  alignItems,
  direction,
  gapUnit,
  justifyContent,
  width,
  flex,
  children,
  style,
  height,
  onClick,
  ref,
}: FlexWrapperProps) => {
  const Container = styled('div')({
    display: 'flex',
    flexDirection: direction ? direction : 'row',
    alignItems: alignItems ? alignItems : 'flex-start',
    justifyContent: justifyContent ? justifyContent : 'flex-start',
    gap: gap,
    flex: flex ? flex : 'unset',
    width: width ? width : 'fit-content',
    height: height && height,
  });
  //   const gapReslover = (gap :any, gapUnit:any) => {
  //     if (gapUnit) {
  //       return `${gap}${gapUnit}`;
  //     } else {
  //       return `${gap}rem`;
  //     }
  //   };

  return (
    <Container style={style} onClick={onClick} ref={ref}>
      {children}
    </Container>
  );
};

export default Flex;
