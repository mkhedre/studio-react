import { endpointEvents } from "@mongez/http";
import { current } from "@mongez/react";
import { AxiosResponse } from "axios";
import user from "user";

endpointEvents.beforeSending((config: any) => {
  config.headers.OS = "wui";
  config.headers["LOCALE-CODE"] = current("localeCode");
});

endpointEvents.onSuccess((response: AxiosResponse) => {
  if (response.data) {
    response.data = response.data;
  }

  if (response.data.user) {
    user.update(response.data.user);
    user.setPermissions(user.get("group.permissions"));
  }
});
