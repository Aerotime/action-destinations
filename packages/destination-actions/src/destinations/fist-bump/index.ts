import type { DestinationDefinition } from '@segment/actions-core'
import type { Settings } from './generated-types'
import trackEvent from './trackEvent'

const destination: DestinationDefinition<Settings> = {
  name: 'Fist Bump',
  slug: 'actions-fist-bump',
  mode: 'cloud',
  authentication: {
    scheme: 'custom',
    fields: {
      apiKey: {
        label: 'API Key',
        description: 'Fist Bump project secret.',
        type: 'string',
        required: true
      }
    },
    testAuthentication: (request, { settings }) => {
      // Return a request that tests/validates the user's credentials.
      // If you do not have a way to validate the authentication fields safely,
      // you can remove the `testAuthentication` function, though discouraged.
      return request(
        `https://d4a8-2406-7400-56-c5b7-b9d1-a13-52b2-398.ngrok-free.app/continuum/segment/authorization`,
        {
          method: 'post',
          headers: {
            Authorization: settings.apiKey
          }
        }
      )
    }
  },

  actions: { trackEvent }
}

export default destination
