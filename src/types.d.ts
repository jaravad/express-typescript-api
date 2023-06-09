import { Weather, Visibility } from 'enums'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// Two recommended ways of excluding a property from an existing interface
// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

/*
  In contrast to regular ts types, interfaces are extendables:

  interface SpecialDiaryEntry extends DiaryEntry {
    flightNumber: number
  }
*/
