import endpoint from "@mongez/http";
import { AxiosResponse } from "axios";
import user from "user";

export function login(form: any) {
  return endpoint.post("/login", form);
}

export function register(form: any) {
  return endpoint.post("/register", form);
}

export function logout() {
  return endpoint.get("/logout");
}

export function forgetPassword(form: any) {
  return endpoint.post("/forgot-password", form);
}

export function resetPassword(form: any) {
  return endpoint.post("/reset-password", form);
}

export function verifyForgotEmailCode(email: string, code: string | number) {
  return endpoint.get(`/forgot-password/verify/${email}/${code}`);
}

export function updateProfile(form: any) {
  return endpoint.post("/profile", form);
}

export function getWallet() {
  return endpoint.get("/wallet");
}

export function getGuestToken() {
  return endpoint.post("/login/guests");
}

export function fetchAuthToken(): Promise<AxiosResponse> {
  if (user.isLoggedIn()) {
    return Promise.resolve({
      data: user.all(),
    }) as Promise<AxiosResponse>;
  }

  return new Promise((resolve, reject) => {
    getGuestToken()
      .then((response) => {
        user.login({
          ...response.data.data.authorization,
          ...response.data.data.record,
        });

        resolve(response);
      })
      .catch(reject);
  });
}
