export interface UserStore {
  favoriteFilms: FavoiteFilms[]
}

export interface UserInfo {
  avatar: {
    gravatar: {
      hash: string
    }
  }
  id: number
  iso_639_1: string
  iso_3166_1: string
  name: string
  include_adult: boolean
  username: string
}
export interface FavoiteFilms {
  title: string
  overview: string
  id: number
  poster_path: string | null
  vote_average: number
}
