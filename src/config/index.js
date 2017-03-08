import devConfig from './dev';
import testConfig from './test';
import prodConfig from './prod';

let config = devConfig;

if (process.NODE_ENV === 'production') {
  config = prodConfig;
} else if (process.NODE_ENV === 'test') {
  config = testConfig;
}

export default config;