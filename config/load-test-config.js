// Load Test – Kiểm tra hệ thống hoạt động ổn định dưới tải dự kiến
// Mục tiêu: Đảm bảo hệ thống xử lý tốt với lượng người dùng bình thường.
export const loadTestConfig = {
    scenarios: {
      load_test: {
        executor: 'ramping-vus',
        startVUs: 0,
        stages: [
          { duration: '30s', target: 20 },
          { duration: '1m', target: 20 },
          { duration: '30s', target: 0 },
        ],
        exec: 'default',
      }
    },
    thresholds: {
      http_req_duration: ['p(95)<2000'],
      http_req_failed: ['rate<0.01'],
    }
  };
  