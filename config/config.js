import { loadTestConfig } from "./load-test-config.js";
import { stressTestConfig } from "./stress-test-config.js";
import { spikeTestConfig } from "./spike-test-config.js";
import { soakTestConfig } from "./soak-test-config.js";


const testConfigs = {
  load_test: loadTestConfig,
  stress_test: stressTestConfig,
  spike_test: spikeTestConfig,
  soak_test: soakTestConfig,
};

export function getConfig(testType) {
  return testConfigs[testType] || loadTestConfig;
}
