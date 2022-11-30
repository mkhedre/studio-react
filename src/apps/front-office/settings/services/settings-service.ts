import endpoint from "@mongez/http";

export function getSettings() {
  return endpoint.get("/settings");
}
