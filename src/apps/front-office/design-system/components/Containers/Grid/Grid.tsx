import styled from '@emotion/styled';
import Is from '@flk/supportive-is';
import React from 'react';
import {
  AlignItemsProperty,
  JustifyContentProperty,
  WidthProperty,
} from 'shared/types/cssTypes';
type GridPropType = {
  /**
   *  @prop {React.ReactNode} children - the items that the grid is going to wrap
   */
  children: React.ReactNode;

  /**
   * @prop {WidthProperty<string | 0>} width - what is the wisth of the grid container
   * @default "100%"
   */
  width?: WidthProperty<string | 0>;

  /**
   * @prop {number | "auto-fill" | "auto-fit"} repeat - how many items to repeat per row ?
   */
  repeat?: number | 'auto-fill' | 'auto-fit';

  /**
   * @prop {min: WidthProperty<string | 0>; max: WidthProperty<string | 0>; } minmax - what is the minmax repeate value for grid item
   */
  minmax?: {
    min: WidthProperty<string | 0>;
    max: WidthProperty<string | 0>;
  };

  /**
   * @prop {String} repeatPattern - what is the gridTemplateColumns repeat pattern
   * @default "repeat(auto-fill, minmax(300px, 1fr))"
   */
  repeatPattern?: String;

  /**
   * @prop {FlexDirectionProperty} justifyContent - how would you like the items to justify inside the flex container
   * @default "flex-start"
   */
  justifyContent?: JustifyContentProperty;
  /**
   * @prop {AlignItemsProperty} align - how would you like the items to align inside the flex container
   * @default "center"
   */
  align?: AlignItemsProperty;

  /**
   * @prop {String} gap - the spacing between items
   * @default 0
   */
  gap?: number;

  /**
   * @prop {String} gapUnit - the spacing unit between items
   * @default rem
   */
  gapUnit?: 'rem' | 'px' | 'ch' | 'em';

  /**
   * @prop {[key: string]: string | number} styles - any custom style
   */

  styles?: { [key: string]: string | number };
};

export default function Grid({
  children,
  width,
  repeat,
  minmax,
  repeatPattern,
  justifyContent,
  align,
  gap,
  gapUnit,
  styles,
}: GridPropType) {
  const propertyReslover = (property: any, propertyUnit: any) => {
    if (propertyUnit) {
      return `${property}${propertyUnit}`;
    } else {
      return `${property}rem`;
    }
  };

  const resolvegridTemplateColumns = () => {
    let repeatProp;
    if (repeat && !Is.empty(minmax)) {
      repeatProp = `repeat(${repeat}, minmax(${minmax?.min}, ${minmax?.max}))`;
    } else if (repeat && repeatPattern) {
      repeatProp = `repeat(${repeat}, ${repeatPattern})`;
    } else {
      repeatProp = `repeat(auto-fill, minmax(300px, 1fr))`;
    }
    return repeatProp;
  };

  const Container = styled('div')({
    display: 'grid',
    gridTemplateColumns: resolvegridTemplateColumns(),
    gap: gap ? propertyReslover(gap, gapUnit ? gapUnit : null) : 0,
    alignItems: align && align,
    justifyContent: justifyContent && justifyContent,
    width: width ? width : '100%',
    ...styles,
  });

  return <Container>{children}</Container>;
}
