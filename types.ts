export interface Config {
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
