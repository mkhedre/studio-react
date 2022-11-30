import endpoint from "@mongez/http";

export function getOrders() {
    return endpoint.get("/orders");
}

export function getOrder(orderId: any) {
    return endpoint.get("/orders/" + orderId);
}

export function reOrder(orderId: any) {
    return endpoint.get("/orders/" + orderId + "/re-order");
}

export function getNotifications() {
    return endpoint.get("/notifications");
}

export function getRejectionReasons() {
    return endpoint.get("/rejection-reasons");
}



export function addComment(form: any) {
    return endpoint.post("/reviews", form);
  }