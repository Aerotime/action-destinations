export interface FistBump {
  (...args: unknown[]): unknown
  envId?: string
  debugMode?: boolean
  _queue?: unknown[]
}
