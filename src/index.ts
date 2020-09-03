import { Config } from './config';
import { Client } from './client';
import { DetectionResult, Language, UserStatus } from './types';

export class DetectLanguageAPI {
  client: Client;

  constructor(apiKey: string, config: Config = {}) {
    this.client = new Client(apiKey, config);
  }

  async detect(text: string): Promise<DetectionResult[]> {
    const response = await this.client.post('detect', { q: text })

    return response.data.detections;
  }

  async detectCode(text: string): Promise<string | null> {
    const results = await this.detect(text);

    return results[0]?.language || null;
  }

  async detectBatch(texts: string[]): Promise<DetectionResult[][]> {
    const response = await this.client.post('detect', { q: texts })

    return response.data.detections;
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
