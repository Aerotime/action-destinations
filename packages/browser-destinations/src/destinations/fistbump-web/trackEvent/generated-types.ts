// Generated file. DO NOT MODIFY IT BY HAND.

export interface Payload {
  /**
   * An anonymous identifier
   */
  anonymousId?: string | null
  /**
   * The ID associated with the user
   */
  userId?: string | null
  /**
   * email associated with user
   */
  email?: string | null
  /**
   * The group id
   */
  groupId?: string | null
  /**
   * Event Name
   */
  eventName: string | null
  /**
   * Properties to associate with an event
   */
  properties?: {
    [k: string]: unknown
  }
  /**
   * The timestamp of the event
   */
  timestamp?: string
  /**
   * The Segment messageId
   */
  messageId?: string
  /**
   * The name of the campaign
   */
  campaignName?: string
  /**
   * The source of the campaign
   */
  campaignSource?: string
  /**
   * The title of the page
   */
  pageTitle?: string
  /**
   * The url of the page
   */
  pagePath?: string
  /**
   * The name of the app
   */
  appName?: string
  /**
   * The namespace of the app
   */
  appNamespace?: string
  /**
   * The version of the app
   */
  appVersion?: string
  /**
   * The build of the app
   */
  appBuild?: string
  /**
   * The name of the operating system
   */
  osName?: string
  /**
   * The version of the operating system
   */
  osVersion?: string
  /**
   * The type of device
   */
  deviceType?: string
  /**
   * The name of the device
   */
  deviceName?: string
  /**
   * The country of the user
   */
  country?: string
  /**
   * The city of the user
   */
  city?: string
  /**
   * The language of the user
   */
  language?: string
  /**
   * The user agent of the user
   */
  userAgent?: string
}
