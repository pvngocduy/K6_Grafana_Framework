//Stress Test – Kiểm tra hệ thống hoạt động thế nào khi vượt mức tải bình thường
//Mục tiêu: Tìm điểm giới hạn và theo dõi hành vi khi vượt quá ngưỡng
export const stressTestConfig = {
    scenarios: {
      stress_test: {
        executor: 'ramping-vus',
        startVUs: 0,
        stages: [
          { duration: '10s', target: 50 },
          { duration: '30s', target: 100 },
          { duration: '30s', target: 150 },
          { duration: '30s', target: 200 },
          { duration: '1m', target: 0 },
        ],
        exec: 'default',
      }
    },
    thresholds: {
      http_req_duration: ['p(95)<2000'],
      http_req_failed: ['rate<0.01'],
    }
  };
  