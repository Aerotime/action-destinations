import type { BrowserActionDefinition } from '../../../lib/browser-destinations'
import type { Settings } from '../generated-types'
import type { Payload } from './generated-types'
import type { FistBump } from '../types'

const action: BrowserActionDefinition<Settings, FistBump, Payload> = {
  title: 'Track Event',
  description: '',
  platform: 'web',
  defaultSubscription: 'type = "track"',
  fields: {
    anonymousId: {
      type: 'string',
      allowNull: true,
      description: 'An anonymous identifier',
      label: 'Anonymous ID',
      default: { '@path': '$.anonymousId' }
    },
    userId: {
      type: 'string',
      allowNull: true,
      description: 'The ID associated with the user',
      label: 'User ID',
      default: { '@path': '$.userId' }
    },
    email: {
      type: 'string',
      allowNull: true,
      description: 'email associated with user',
      label: 'Email',
      default: { '@path': '$.email' }
    },
    groupId: {
      type: 'string',
      allowNull: true,
      description: 'The group id',
      label: 'Group ID',
      default: { '@path': '$.context.groupId' }
    },
    eventName: {
      type: 'string',
      allowNull: true,
      description: 'Event Name',
      label: 'Event Name',
      required: true,
      default: { '@path': '$.event' }
    },
    properties: {
      type: 'object',
      label: 'properties',
      description: 'Properties to associate with an event',
      required: false,
      default: { '@path': '$.properties' }
    },
    timestamp: {
      type: 'string',
      format: 'date-time',
      required: false,
      description: 'The timestamp of the event',
      label: 'Timestamp',
      default: { '@path': '$.timestamp' }
    },
    messageId: {
      type: 'string',
      required: false,
      description: 'The Segment messageId',
      label: 'MessageId',
      default: { '@path': '$.messageId' }
    },
    campaignName: {
      type: 'string',
      required: false,
      description: 'The name of the campaign',
      label: 'Campaign Name',
      default: { '@path': '$.context.campaign.name' }
    },
    campaignSource: {
      type: 'string',
      required: false,
      description: 'The source of the campaign',
      label: 'Campaign Source',
      default: { '@path': '$.context.campaign.source' }
    },
    pageTitle: {
      type: 'string',
      required: false,
      description: 'The title of the page',
      label: 'Page Title',
      default: { '@path': '$.context.page.title' }
    },
    pagePath: {
      type: 'string',
      required: false,
      description: 'The url of the page',
      label: 'Page URL',
      default: { '@path': '$.context.page.path' }
    },
    appName: {
      type: 'string',
      required: false,
      description: 'The name of the app',
      label: 'App Name',
      default: { '@path': '$.context.app.name' }
    },
    appNamespace: {
      type: 'string',
      required: false,
      description: 'The namespace of the app',
      label: 'App Namespace',
      default: { '@path': '$.context.app.namespace' }
    },
    appVersion: {
      type: 'string',
      required: false,
      description: 'The version of the app',
      label: 'App Version',
      default: { '@path': '$.context.app.version' }
    },
    appBuild: {
      type: 'string',
      required: false,
      description: 'The build of the app',
      label: 'App Build',
      default: { '@path': '$.context.app.build' }
    },
    osName: {
      type: 'string',
      required: false,
      description: 'The name of the operating system',
      label: 'OS Name',
      default: { '@path': '$.context.os.name' }
    },
    osVersion: {
      type: 'string',
      required: false,
      description: 'The version of the operating system',
      label: 'OS Version',
      default: { '@path': '$.context.os.version' }
    },
    deviceType: {
      type: 'string',
      required: false,
      description: 'The type of device',
      label: 'Device Type',
      default: { '@path': '$.context.device.type' }
    },
    deviceName: {
      type: 'string',
      required: false,
      description: 'The name of the device',
      label: 'Device Name',
      default: { '@path': '$.context.device.name' }
    },
    country: {
      type: 'string',
      required: false,
      description: 'The country of the user',
      label: 'Country',
      default: { '@path': '$.context.location.country' }
    },
    city: {
      type: 'string',
      required: false,
      description: 'The city of the user',
      label: 'City',
      default: { '@path': '$.context.location.city' }
    },
    language: {
      type: 'string',
      required: false,
      description: 'The language of the user',
      label: 'Language',
      default: { '@path': '$.context.locale' }
    },
    userAgent: {
      type: 'string',
      required: false,
      description: 'The user agent of the user',
      label: 'User Agent',
      default: { '@path': '$.context.userAgent' }
    }
  },
  perform: (FistBump, event) => {
    const payload = event.payload
    if (!payload || typeof payload !== 'object') {
      console.warn('[FistBump] received invalid payload (expected name to be present); skipping trackEvent', payload)
      return
    }
    FistBump('trackEvent', payload)
  }
}

export default action
