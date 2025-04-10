//Soak Test (Endurance Test) – Kiểm thử kéo dài để phát hiện rò rỉ bộ nhớ, tài nguyên.
//Mục tiêu: Xem hệ thống hoạt động ổn định trong thời gian dài không.
export const soakTestConfig = {
    scenarios: {
      soak_test: {
        executor: 'constant-vus',
        vus: 20,                // 20 VUs cùng chạy
        duration: '5m',        // chạy liên tục trong 5 phút
        exec: 'default',        // hàm entrypoint chính
      },
    },
  
    thresholds: {
      http_req_duration: ['p(95)<200'], // 95% request phải dưới 2s
      http_req_failed: ['rate<0.01'],    // tỷ lệ lỗi < 1%
    },
  };
  