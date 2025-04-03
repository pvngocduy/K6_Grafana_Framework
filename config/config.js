export const config = {
    baseUrl: "https://jsonplaceholder.typicode.com",
    vus: 50, 
    duration: "30s", 
    thresholds: {
      "http_req_duration": ["p(95)<200"], 
      "http_req_failed": ["rate<0.01"], 
    },
  };