import { Button, ButtonProps as BaseButtonProps } from '@mantine/core';
import clsx from 'clsx';
import { useMemo } from 'react';
import withClassNames from '../../../utils/withClassNames';

export { Button };

export type ButtonProps = BaseButtonProps & {
  size?: 'sm' | 'md' | 'lg' | 'xs';
  gradient?: boolean;
  bordered?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  animated?: boolean;
  loadable?: boolean;
  icon?: React.ReactNode;
  variant?: 'filled' | 'outline' | 'ghost' | 'soft';
};

export const BaseButton = ({
  animated,
  gradient,
  size,
  bordered,
  variant,
  loadable,
  icon,
  color,
  rounded,
  shadow,
  ...props
}: ButtonProps) => {
  const additionalClasses = useMemo(() => {
    return clsx(`btn-${size}`, {
      'btn-animation': animated === true,
      'bg-gradient': gradient === true,
      'btn-load': loadable === true,
      [`btn-soft-${color}`]: variant === 'filled',
      'btn-ghost': variant === 'outline',
      'btn-border': bordered,
      'btn-icon': icon !== undefined,
      'rounded-pill': rounded === true,
      'shadow-none': shadow === false,
    });
  }, [animated, size, variant, gradient]);

  return (
    <Button
      color={color}
      {...withClassNames(props, additionalClasses)}
      outline={variant === 'outline'}
    />
  );
};

BaseButton.defaultProps = {
  animated: false,
  size: 'sm',
  variant: 'filled',
  gradient: false,
  loadable: false,
  bordered: false,
  rounded: false,
  shadow: true,
};

// export const PrimaryButton = styled(Button)((props) => ({
//   color: `${colors.PRIMARY}`,
// }));
export const LightButton = (props: ButtonProps) => (
  <BaseButton {...props} color="light" />
);
export const PurpleButton = (props: ButtonProps) => (
  <BaseButton {...props} color="purple" />
);
export const DarkButton = (props: ButtonProps) => (
  <BaseButton {...props} color="dark" />
);

export const InfoButton = (props: ButtonProps) => (
  <BaseButton {...props} color="info" />
);

export const WarningButton = (props: ButtonProps) => (
  <BaseButton {...props} color="warning" />
);
export const DangerButton = (props: ButtonProps) => (
  <BaseButton {...props} color="danger" />
);

export const SuccessButton = (props: ButtonProps) => (
  <BaseButton {...props} color="success" />
);

export const SuccessIconButton = ({ ...props }: ButtonProps) => (
  <BaseButton {...withClassNames(props)} color="success" />
);

export const IconButton = ({
  children,
  additionalClasses,
  icon,
  size,
  ...props
}: any) => {
  const sizeClass = `btn-${size}`;

  return (
    <Button
      {...withClassNames(
        props,
        sizeClass,
        children && 'btn-label',
        additionalClasses
      )}
    >
      <span className="label-icon align-middle">{icon} </span>
      {children}
    </Button>
  );
};

IconButton.defaultProps = {
  size: 'sm',
};
