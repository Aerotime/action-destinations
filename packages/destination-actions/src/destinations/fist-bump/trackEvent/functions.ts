import type { Payload } from './generated-types'

export function getEventFromPayload(payload: Payload) {
  return {
    userId: payload.userId,
    email: payload.email,
    eventName: payload.eventName,
    anonymousId: payload.anonymousId,
    groupId: payload.groupId,
    messageId: payload.messageId,
    properties: payload.properties,
    timestamp: payload.timestamp ?? new Date(),
    campaignName: payload.campaignName,
    campaignSource: payload.campaignSource,
    pageTitle: payload.pageTitle,
    pagePath: payload.pagePath,
    appName: payload.appName,
    appNamespace: payload.appNamespace,
    appVersion: payload.appVersion,
    appBuild: payload.appBuild,
    osName: payload.osName,
    osVersion: payload.osVersion,
    deviceType: payload.deviceType,
    deviceName: payload.deviceName,
    country: payload.country,
    city: payload.city,
    language: payload.language,
    userAgent: payload.userAgent
  }
}
