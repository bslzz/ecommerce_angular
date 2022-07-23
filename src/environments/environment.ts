import { EnvironmentConfiguration } from 'src/app/models/environment.configuration';

export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: false,
  apiUrl: 'https://lsc-essential-products.azurewebsites.net/api',
  apiEndPoints: {
    category: 'category',
    product: 'product',
    wishlist: 'wishlist',
    owner: 'owner',
  },
  cacheTimeInMinutes: 30,
};
