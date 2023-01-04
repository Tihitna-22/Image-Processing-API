import express, { Response } from 'express'
import images from './routes/api/images'
import logger from './utilities/logger'

const app = express()
const port = 3000

app.use('/api/images', logger, images)

app.get('/api', logger, (res: Response) => {
  res.send('image processing!')
})

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})

export default app
