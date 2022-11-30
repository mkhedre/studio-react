import { atom } from "@mongez/react-atom";
import { Obj } from "@mongez/reinforcements";

const defaultData: any = {
  contact: {
    phoneNumber: "055512321312",
    email: "support@gam3yat.com",
  },
};

const settingsAtom = atom({
  name: "settings",
  // beforeUpdate: (settingsRecords: any) => {
  //   const settings = {};

  //   for (const record of Object.keys(settingsRecords)) {
  //     const setting = settingsRecords[record];

  //     Obj.set(settings, `${setting.group}.${setting.name}`, setting.value);
  //   }

  //   return { ...defaultData, ...settings };
  // },
  default: {},
});

export default settingsAtom;

export const cartItemAtom = atom({
  name: "cartItem",
  default: {
    options: [],
    quantity: 1,
    notes: "",
  },
});