import endpoint from "@mongez/http";

export function getNews() {
  return endpoint.get("/news");
}

export function getNewsByClassification(classification: string) {
  return endpoint.get(`/news?newsClassification=${classification}`);
}
