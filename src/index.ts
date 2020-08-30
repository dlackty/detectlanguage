import { Config } from './config';
import { Client } from './client';

export class DetectLanguageInstance {
  client: Client;

  constructor(apiKey: string, config: Config = {}) {
    this.client = new Client(apiKey, config);
  }

  async languages() {
    return this.client.get('languages');
  }
}

export default (apiKey: string, config: Config = {}): DetectLanguageInstance => {
  return new DetectLanguageInstance(apiKey, config);
}
