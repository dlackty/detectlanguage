import { Config } from './config';
import { DetectLanguageError } from './index';
import axios, { AxiosInstance, AxiosError } from 'axios';

const { version } = require('../package.json');
const USER_AGENT = 'detectlanguage-node/' + version;

export class Client {
  private connection: AxiosInstance;

  constructor(apiKey: string, config: Config) {
    const timeout = (config.timeout || 60) * 1000;
    const protocol = config.protocol || 'https';
    const host = config.host || 'ws.detectlanguage.com';
    const apiVersion = config.apiVersion || '0.2';
    const baseURL = protocol + '://' + host + '/' + apiVersion + '/';

    const headers = {
      'User-Agent': USER_AGENT,
      'Authorization': 'Bearer ' + apiKey,
    }

    this.connection = axios.create({ baseURL, headers, timeout });
  }

  async get(path: string): Promise<any> {
    try {
      const response = await this.connection.get(path)

      return response.data;
    } catch(e) {
      this.handleError(e);
    }
  }

  async post(path: string, data: unknown): Promise<any> {
    try {
      const response = await this.connection.post(path, data);

      return response.data;
    } catch(e) {
      this.handleError(e);
    }
  }

  private handleError(error: AxiosError) {
    const message = error?.response?.data?.error?.message || error.message;
    const apiError = new DetectLanguageError(message);

    apiError.stack = error.stack;

    throw(apiError);
  }
}
