const evaluateSystemConfig = (configuredTimeout, customMaxRetries) => 
{
  // Business Rule: Fallback to 30 seconds if timeout is missing, fallback to 3 retries if retries missing
  const timeout = configuredTimeout ?? 30;
  const retries = customMaxRetries ?? 3;

  if (timeout <= 30 && retries <= 3) {
    return `System running under Safe Mode parameters. Expiry: ${timeout}s`;
  }
  return `System running under high-performance profile.`;
};

// Edge Case Production Log:
// The DevOps engineer explicitly configures a zero-delay timeout (0) and zero retries (0) for an internal worker.
console.log(evaluateSystemConfig(0, 0)); 
// Unexpected Output: "System running under Safe Mode parameters. Expiry: 30s"
