import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // middleware to convert req.body to json

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!')
  res.send('pong')
})

app.use('/api/diary/', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
