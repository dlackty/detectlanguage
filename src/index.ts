import { Config } from './config';
import { Client } from './client';
import { Language } from './types';

export class DetectLanguageAPI {
  client: Client;

  constructor(apiKey: string, config: Config = {}) {
    this.client = new Client(apiKey, config);
  }

  async languages(): Promise<Language[]> {
    return this.client.get('languages');
  }
}

export default (apiKey: string, config: Config = {}): DetectLanguageAPI => {
  return new DetectLanguageAPI(apiKey, config);
}
