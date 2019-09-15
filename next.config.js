const path = require('path');

module.exports = {
  // Custom webpack config
  webpack(config) {
    // Absolute imports
    config.resolve.modules.push(path.resolve('./'));

    return config;
  }
};
