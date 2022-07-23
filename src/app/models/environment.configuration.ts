export interface EnvironmentConfiguration {
  env_name: string;
  production: boolean;
  apiUrl: string;
  apiEndPoints: {
    category: string;
    product: string;
    wishlist: string;
    owner: string;
  };
  cacheTimeInMinutes: number;
}
