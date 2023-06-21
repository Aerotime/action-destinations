import nock from 'nock'
import { createTestIntegration } from '@segment/actions-core'
import Definition from '../index'

const testDestination = createTestIntegration(Definition)

describe('Fist Bump', () => {
  describe('testAuthentication', () => {
    it('should validate authentication inputs', async () => {
      nock('https://d4a8-2406-7400-56-c5b7-b9d1-a13-52b2-398.ngrok-free.app')
        .post('/continuum/segment/authorization')
        .reply(200, {})

      // This should match your authentication.fields
      const authData = { apiKey: 'random-key-id' }

      await expect(testDestination.testAuthentication(authData)).resolves.not.toThrowError()
    })
  })
})
