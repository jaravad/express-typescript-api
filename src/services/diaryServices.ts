import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryEntries from './diaryEntries.json'

const entries: DiaryEntry[] = diaryEntries as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => entries

export const getEntryWithoutSensitiveData = (): NonSensitiveInfoDiaryEntry[] => entries

export const addEntry = (): null => null
