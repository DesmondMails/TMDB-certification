// export interface SingleFilmStore {
//   details: SingleFilmDetail
// }

export interface SingleFilmDetail {
  adult: boolean
  backdrop_path: string | null
  belongs_to_collection: any
  budget: number
  genres: Genre[]
  homepage: string | null
  id: number
  imdb_id: string | null
  original_language: string
  original_title: string
  overview: string | null
  popularity: number
  poster_path: string | null
  production_companies: ProductionCompanies[]
  production_countries: ProductionCountries[]
  release_date: string
  revenue: number
  runtime: number | null
  spoken_languages: SpokenLanguages
  status: string
  tagline: string | null
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Genre {
  id: number
  name: string
}
interface ProductionCompanies {
  name: string
  id: number
  logo_path: string | null
  origin_country: string
}
export interface ProductionCountries {
  iso_3166_1: string
  name: string
}
interface SpokenLanguages {
  iso_639_1: string
  name: string
}
