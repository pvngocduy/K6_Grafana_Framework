import http from "k6/http";
import { check, sleep } from "k6";

export function makeRequest(method, url, body = null, params = {}) {
  const response = http[method](url, body, params);
  check(response, {
    "status is 200": (r) => r.status === 200,
  });
  return response;
}

export function randomSleep(min, max) {
  const time = Math.random() * (max - min) + min;
  sleep(time);
}