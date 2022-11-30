import { Redirect } from "@mongez/react-router";
import user from "user";
import URLS from "app/utils/urls";

export function Guardian() {
  if (!user.isLoggedUser()) {
    return <Redirect to={URLS.auth.login} />;
  }

  return null;
}

export function ReverseGuardian() {
  if (user.isLoggedUser()) {
    return <Redirect to={URLS.home} />;
  }

  return null;
}
