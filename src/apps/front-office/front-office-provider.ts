import { endpointEvents } from "@mongez/http";
import { current } from "@mongez/react";
import { navigateTo } from "@mongez/react-router";
import { AxiosResponse } from "axios";
import user from "user";
import "./utils/locales";
import URLS from "./utils/urls";

endpointEvents.beforeSending((config: any) => {
  config.headers["translation-localeCode"] = current("localeCode");
});

endpointEvents.onSuccess((response: AxiosResponse) => {
  if (response.data.customer) {
    user.login({ ...user.all(), ...response.data.customer });
  }

  if (response.data.guest) {
    user.login({ ...user.all(), ...response.data.guest });
  }
});

endpointEvents.onError((response: AxiosResponse) => {
  if (response.status === 401) {
    user.logout();

    navigateTo(URLS.auth.login);
  }
});

endpointEvents.onResponse((response: AxiosResponse) => {
  if (response.data.data) {
    response.data = response.data.data;
  }
});
