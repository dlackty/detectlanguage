import { Config } from './config';
import axios, { AxiosInstance } from 'axios';

const { version } = require('../package.json');
const USER_AGENT = 'detectlanguage-node/' + version;

export class Client {
  public connection: AxiosInstance;

  constructor(apiKey: string, config: Config) {
    const protocol = config.protocol || 'https';
    const host = config.host || 'ws.detectlanguage.com';
    const apiVersion = config.apiVersion || '0.2';
    const baseURL = protocol + '://' + host + '/' + apiVersion + '/';
    const timeout = config.timeout || 60;

    const headers = {
      'User-Agent': USER_AGENT,
      'Authorization': 'Bearer ' + apiKey,
    }

    this.connection = axios.create({
      baseURL,
      headers,
      timeout: timeout * 1000,
    })
  }

  async get(path: string): Promise<any> {
    const response = await this.connection.get(path)

    return response.data;
  }
}
