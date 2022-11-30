import endpoint from "@mongez/http";

export function getCities(params: any = {}) {
  return endpoint.get("/cities", {
    params: {
      ...params,
    },
  });
}

export function getCountries(params: any = {}) {
    return endpoint.get("/countries", {
      params: {
        ...params,
      },
    });
  }
