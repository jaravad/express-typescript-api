import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveData())
})

router.get('/:id', (req, res) => {
  const entry = diaryServices.findById(+req.params.id)
  return (entry != null) ? res.send(entry) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    diaryServices.addEntry(
      newDiaryEntry
    )
    res.json(newDiaryEntry)
  } catch (error) {
    let message
    if (error instanceof Error) message = error.message
    else message = String(error)
    res.status(400).send(message)
  }
})

export default router
