import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryEntries from './diaryEntries.json'

const entries: DiaryEntry[] = diaryEntries as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => entries

export const getEntriesWithoutSensitiveData = (): NonSensitiveInfoDiaryEntry[] => {
  return entries.map(({ id, date, weather, visibility }) => {
    return { id, date, weather, visibility }
  })
}

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = entries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfEntry } = entry
    return restOfEntry
  }
  return undefined
}

export const addEntry = (): null => null
