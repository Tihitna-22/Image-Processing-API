# Image-processing-API

## Table of content

- [Description](#Description)
- [Technology](#technology)
- [Installation](#installation)

## Description

This is API is as a library to serve properly scaled versions of images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout the site, the API will handle resizing and serving stored images for you.

## Technology

- Typescript
- Jasmine
- Node.js
- Express

## Installation

To install it, simply clone this repository. You can start the app locally by downloading the neccessary dependencies and start the app using the command "npm run start".

```
git clone https://github.com/Tihitna-22/Image-Processing-API.git
```

install dependencies

```
npm install
```

Start the dev server

```
npm run start
```

eslint

```
npm run lint
```

prettier

```
npm run format
```

test

```
npm run test
```

Avaliable filename to use

```
encenadaport

fjord

icelandwaterfall

palmtunnel

santamonica
```

End Point

```
http://localhost:3000/api/images?filename=santamonica&width=200&height=300
```
