import { makeRequest, randomSleep } from "../../utils/helpers.js";
import { check } from "k6";
import { getConfig } from "../../config/config.js";


// Lấy loại test từ biến môi trường TEST_TYPE hoặc mặc định là 'load_test'
const testType = __ENV.TEST_TYPE || 'load_test';
const config = getConfig(testType);

// Xuất tùy chọn k6 dựa trên cấu hình đã chọn
export const options = config;


// Hàm chính mô phỏng hành vi người dùng
export default function () {
  const url = "https://jsonplaceholder.typicode.com"; // Gửi yêu cầu GET đến bài post ID 1
  const params = {
    tags: { test_type: testType },
  };
  const response = makeRequest("get", url, params);

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