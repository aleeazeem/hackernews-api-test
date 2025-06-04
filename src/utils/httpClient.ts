import axios, { AxiosResponse } from 'axios';

export class HttpClient {
  private host: string;

  constructor(host: string) {
    this.host = host;
  }

  /**
   * Generic GET method
   * @param endpoint API endpoint
   * @returns Response data typed with T
   */
  async get<T>(endpoint: string): Promise<T> {
    const url = `${this.host}/${endpoint}`;

    try {
      const response: AxiosResponse<T> = await axios.get(url, {
        timeout: 10000
      });

      if (process.env.DEBUG === 'true') {
        console.log(`GET ${url}`);
        console.log(`Status: ${response.status}`);
        console.log('Response Body:', response.data);
      }

      return response.data;

    } catch (error: any) {
      console.error(`GET ${url} failed:`, error.message || error);
      throw error;
    }
  }
}