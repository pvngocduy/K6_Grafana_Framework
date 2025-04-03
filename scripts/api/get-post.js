import { config } from "../../config/config.js";
import { makeRequest, randomSleep } from "../../utils/helpers.js";
import { check } from "k6";

// Cấu hình bài test từ config
export const options = {
  vus: config.vus,
  duration: config.duration,
  thresholds: config.thresholds,
};

// Hàm chính mô phỏng hành vi người dùng
export default function () {
  const url = `${config.baseUrl}/posts/1`; // Gửi yêu cầu GET đến bài post ID 1
  const response = makeRequest("get", url);

  // Kiểm tra thêm nội dung phản hồi
  check(response, {
    "response body is not empty": (r) => r.body.length > 0,
  });

  randomSleep(1, 3);
}
export function handleSummary(data) {
  return {
    '/results/result.json': JSON.stringify(data, null, 2),
  };
}