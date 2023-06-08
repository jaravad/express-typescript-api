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

router.post('/', (_req, res) => {
  res.send('Saving an entry!')
})

export default router
