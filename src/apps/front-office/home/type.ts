import { FC } from "react";

export type ModuleProp = {
  record: { [key: string]: any };
};

export type ModulesType = {
  [key: string]: FC<ModuleProp>;
};
