import { createTestIntegration } from '@segment/actions-core'
import FistBump from '../../index'
import nock from 'nock'

const testDestination = createTestIntegration(FistBump)

describe('FistBump', () => {
  describe('track', () => {
    it('should validate action fields', async () => {
      try {
        await testDestination.testAction('track', {
          settings: { apiKey: 'random-api-key' }
        })
      } catch (err) {
        expect(err.message).toContain("missing the required field 'event'.")
      }
    })

    it('should work', async () => {
      nock('https://d4a8-2406-7400-56-c5b7-b9d1-a13-52b2-398.ngrok-free.app/continuum').post('/segment').reply(200, {})

      const responses = await testDestination.testAction('trackEvent', {
        mapping: { userId: 'user-id', eventName: 'event-name', properties: { property1: true } },
        settings: { apiKey: 'random-api-key' }
      })

      expect(responses.length).toBe(1)
      expect(responses[0].status).toBe(200)
      expect(responses[0].data).toMatchObject({})
      expect(responses[0].options.body).toContain('user-id')
      expect(responses[0].options.body).toContain('event-name')
    })
  })
})
