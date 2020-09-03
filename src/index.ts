import { Config } from './config';
import { Client } from './client';
import { Language, UserStatus } from './types';

export class DetectLanguageAPI {
  client: Client;

  constructor(apiKey: string, config: Config = {}) {
    this.client = new Client(apiKey, config);
  }

  async languages(): Promise<Language[]> {
    return this.client.get('languages');
  }

  async userStatus(): Promise<UserStatus> {
    return this.client.get('user/status');
  }
}

export default (apiKey: string, config: Config = {}): DetectLanguageAPI => {
  return new DetectLanguageAPI(apiKey, config);
}
