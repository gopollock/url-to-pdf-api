// Pins a Chrome newer than the one bundled with Puppeteer 25.16.0 (156.0.8078.47) to get the
// eMudhra root CA distrust shipped in 156.0.8078.73. Remove the pin once Puppeteer bundles Chrome >= 157.
module.exports = {
  chrome: {
    version: '156.0.8078.80',
  },
  'chrome-headless-shell': {
    skipDownload: true,
  },
};
