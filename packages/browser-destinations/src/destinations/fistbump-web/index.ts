import { FistBump } from './types'
import type { Settings } from './generated-types'
import type { BrowserDestinationDefinition } from '../../lib/browser-destinations'
import { browserDestination } from '../../runtime/shim'
import { defaultValues } from '@segment/actions-core'
import trackEvent from './trackEvent'

declare global {
  interface Window {
    FistBump: FistBump
    UserIdentity: FistBump
  }
}

export const destination: BrowserDestinationDefinition<Settings, FistBump> = {
  name: 'Fist Bump',
  slug: 'fistbump-web',
  mode: 'device',
  presets: [
    {
      name: 'Track Event',
      subscribe: 'type = "track"',
      partnerAction: 'trackEvent',
      mapping: defaultValues(trackEvent.fields)
    }
  ],
  settings: {
    apiKey: {
      description: 'This is used to determine the organization for which to send data.',
      label: 'API Key',
      type: 'string',
      required: true
    },
    debugMode: {
      description: 'Enable debug mode for testing purposes.',
      label: 'Debug mode',
      type: 'boolean',
      required: false,
      default: false
    }
  },
  initialize: async ({ settings }, deps) => {
    console.log('[FistBump] initialize', settings.apiKey)
    if (!window.FistBump || !window.FistBump.envId) {
      window.FistBump = function (...args) {
        S._queue && S._queue.push(args)
      }
      const S = window.FistBump
      S.envId = settings.apiKey
      S.debugMode = !!settings.debugMode
      S._queue = []
      window.UserIdentity = S
      console.log('[FistBump] trackEvent', settings.apiKey)
      await deps.loadScript('http://c27b-103-113-228-11.ngrok-free.app/segment.js')
    }
    return window.FistBump
  },

  actions: {
    trackEvent
  }
}

export default browserDestination(destination)
