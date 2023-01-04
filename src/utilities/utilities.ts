import sharp from 'sharp'
import path from 'path'

// interface Query {
//     filename?: string;
//     width?: string;
//     height?: string;
//   }

  const processImg =  async (
    filename: string,
    width: string,
    height: string,
    // outputFileName: string
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
//   const processImg = async (value:Query) : Promise<void> => {

//     const pathToImg = path.join(
//         __dirname,
//         `../../images/full/${value.filename}.jpg`
//       )
//       const pathToThumbImg = path.join(
//         __dirname,
//         `../../images/thumb/${value.filename}${value.width}x${value.height}.jpg`
//       )
      
//         await sharp(pathToImg)
//           .resize(Number(value.width), Number(value.height))
//           .toFile(pathToThumbImg)
//         // console.log(pathToImg)
     
//    }
   export default processImg