import clsx, { ClassValue } from "clsx";

export default function withClassNames(
  props: any,
  ...classNames: ClassValue[]
) {
  return {
    ...props,
    className: clsx(...classNames, props.className),
  };
}
