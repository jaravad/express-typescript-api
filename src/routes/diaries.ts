import express from 'express'
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveData())
})

router.get('/:id', (req, res) => {
  const entry = diaryServices.findById(+req.params.id)
  return (entry != null) ? res.send(entry) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body
  const newDiaryEntry = diaryServices.addEntry(
    {
      date,
      weather,
      visibility,
      comment
    }
  )
  res.json(newDiaryEntry)
})

export default router
