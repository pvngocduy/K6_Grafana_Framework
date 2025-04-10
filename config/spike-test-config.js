// Spike Test – Đột ngột tăng tải để xem hệ thống phản ứng thế nào.
//Mục tiêu: Kiểm tra độ đàn hồi và khả năng phục hồi khi có tải bất ngờ.

export const spikeTestConfig = {
    scenarios: {
      spike_test: {
        executor: 'ramping-arrival-rate',
        startRate: 0,
        timeUnit: '1s',
        preAllocatedVUs: 200,
        stages: [
          { duration: '30s', target: 50 },
          { duration: '30s', target: 200 },
          { duration: '1m', target: 10 },
        ],
        exec: 'default',
      }
    },
    thresholds: {
      http_req_duration: ['p(95)<2000'],
      http_req_failed: ['rate<0.01'],
    }
  };
  