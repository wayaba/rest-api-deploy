import express, { json } from 'express'

import { corsMiddleware } from './middlewares/cors.js'
import { moviesRouter } from './routes/movies.js'
// asi no anda en EMSModules
// import movies from './movies.json'

// esto se soluciona de esta forma
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

// pero la forma recomendada en EMSModules es la siguiente
// import { createRequire } from 'node:module'
// const require = createRequire(import.meta.url)
// const movies = require('./movies.json')

// mejor aun, me lo llevo a utils y solo importo la funcion
// const movies = readJSON('./movies.json')

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.json({ message: 'hola mundo' })
})

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
