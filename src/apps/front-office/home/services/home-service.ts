import endpoint from "@mongez/http";

// for dummy purpose only
export function getHome() {
  return endpoint.get("/home");
}
