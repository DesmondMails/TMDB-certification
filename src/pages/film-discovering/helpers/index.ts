import { discoverMoviesFX, discoverTvShowsFX } from '@/store/discover/effects'

export const discoverQuery = (
  type: number,
  generes: string,
  startDate: string,
  endDate: string
) => {
  if (type === 0) {
    discoverMoviesFX({
      with_genres: generes,
      'primary_release_date.gte': startDate,
      'primary_release_date.lte': endDate,
    })
  } else if (type === 1) {
    discoverTvShowsFX({
      with_genres: generes,
      'primary_release_date.gte': startDate,
      'primary_release_date.lte': endDate,
    })
  }
}
