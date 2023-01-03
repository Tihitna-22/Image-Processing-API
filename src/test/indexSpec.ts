import supertest from 'supertest'
import app from '../index'

const request = supertest(app)
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api')
    expect(response.status).toBe(200)
  })
  it('gets the images endpoint', async () => {
    const response = await request.get('/api/images')
    expect(response.status).toBe(200)
  })
  it('gets the images endpoint response', async () => {
    const response = await request.get('/api/images')
    expect(response.text).toBe(
      'Provide url that conains filename, height and width'
    )
  })
})

describe('test response on invalid input', () => {
  const filename = 'ethiopia'
  const width = '-100'
  const height = '-200'

  it('test the response when invalid height and width provided ', async () => {
    const response = await request.get(
      `/api/images?filename=${filename}&width=${width}&height=${height}`
    )
    expect(response.text).toBe('Provide valid width and height')
  })
  const w = '100'
  const h = '-200'
  it('test the response when invalid height provided ', async () => {
    const response = await request.get(
      `/api/images?filename=${filename}&width=${w}&height=${h}`
    )
    expect(response.text).toBe('Provide valid height')
  })
  const widt = '-100'
  const hig = '200'
  it('test the response when invalid width provided ', async () => {
    const response = await request.get(
      `/api/images?filename=${filename}&width=${widt}&height=${hig}`
    )
    expect(response.text).toBe('Provide valid width')
  })
})

describe('test response on invalid input', () => {
  const filename = 'ethiopia'
  const width = '-100'
  const height = '-200'

  it('test path', async () => {
    const response = await request.get(
      `/api/images?filename=${filename}&width=${width}&height=${height}`
    )
    expect(response.text).toBe('Provide valid width and height')
  })
})
