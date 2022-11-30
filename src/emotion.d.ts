import "@emotion/react";
import { ThemeType } from "design-system/system-styles/types";

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeType {}
}
