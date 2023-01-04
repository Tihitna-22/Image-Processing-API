import express, { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import processImg from '../../utilities/utilities'

const images = express.Router()

images.get('/', async (req: Request, res: Response) => {
  const filename = (req.query.filename as string) || null
  const height = (req.query.height as unknown as string) || null
  const width = (req.query.width as unknown as string) || null

  if (!filename || !height || !width) {
    return res.send('Provide url that conains filename, height and width')
  }

  if (filename && height && width) {
    if (Number(height) < 1 && Number(width) < 1) {
      return res.send('Provide valid width and height')
    }
    if (Number(height) < 1 || !Number.isInteger(Number(width))) {
      return res.send('Provide valid height')
    }
    if (Number(width) < 1 || !Number.isInteger(Number(width))) {
      return res.send('Provide valid width')
    }
    // code is from stack overflow to get image names only with out .jpg extention
    const imgp = path.join(__dirname, '../../images/full')

    const img = fs
      .readdirSync(imgp, { withFileTypes: true })
      .filter((item) => !item.isDirectory())
      .map((item) => item.name)
    const nameOnly = img.map((i) => {
      return i.split('.')[0]
    })
    console.log(nameOnly)

    console.log(filename)
    if (!nameOnly.includes(filename)) {
      return res.status(400).send('filename doesnt exist')
    }
    if (nameOnly.includes(filename)) {
      processImg(filename, width, height)

      setTimeout(() => {
        res.sendFile(
          path.join(
            __dirname,
            `..\\..\\images\\thumb\\${filename}${width}x${height}.jpg`
          )
        )
      }, 500)
    }
  }
})

export default images
