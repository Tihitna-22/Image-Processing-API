import sharp from 'sharp'
import path from 'path'

  const processImg =  async (
    filename: string,
    width: string,
    height: string,
  ): Promise<boolean> => {
    const pathToImg = path.join(
        __dirname,
        `../images/full/${filename}.jpg`
      )
      const pathToThumbImg = path.join(
        __dirname,
        `../images/thumb/${filename}${width}x${height}.jpg`
      )
      
        await sharp(pathToImg)
          .resize(Number(width), Number(height))
          .toFile(pathToThumbImg)
        // console.log(pathToImg)
        return true
  }

   export default processImg