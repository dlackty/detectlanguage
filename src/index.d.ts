import Client from "./client";

export interface Options {
  timeout?: number,
  protocol?: string,
  host?: string,
  apiVersion?: string,
}

export interface DetectionResult {
  language: string,
  isReliable: boolean,
  confidence: number,
}

export interface Language {
  code: string,
  name: string,
}

export interface UserStatus {
  status: string,
  date: string,
  requests: number,
  bytes: number,
  plan: string,
  plan_expires?: string,
  daily_rquests_limit: number,
  daily_bytes_limit: number,
}

export interface Client {
  get(path: string): Promise<any>;
  post(path: string, data: any): Promise<any>;
}

export interface APIInstance {
  client: Client;
  detect(text: (string | string[])): (Promise<DetectionResult[]> | Promise<DetectionResult[][]>);
  detectCode(text: string): (Promise<string> | Promise<null>);
  languages(): Promise<Language[]>;
  userStatus(): Promise<UserStatus>;
}

export interface APIStatic {
  (apiKey: string, options?: Options): APIInstance;
}

declare const API: APIStatic;

export default API;
