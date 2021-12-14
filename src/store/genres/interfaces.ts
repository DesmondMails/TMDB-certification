export interface GenresStore {
  filmGenres: Genre[]
  tvShowGenres: Genre[]
}

export interface Genre {
  id: number
  name: string
}
