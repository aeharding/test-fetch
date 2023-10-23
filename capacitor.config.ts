import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'test-fetch',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
