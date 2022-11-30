import endpoint from "@mongez/http";

export function sendNewsletter(form: any) {
  return endpoint.post("/newsletters", form);
}
