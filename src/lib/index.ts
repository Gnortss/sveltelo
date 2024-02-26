// place files you want to import through the `$lib` alias in this folder.
export type Player = {
  id: string,
  name: string,
  rating: number
}

export type Match = {
  id: string,
  p1_id: string,
  p2_id: string,
  p1_wins: number,
  p2_wins: number,
  p1_rating_diff: number,
  p2_rating_diff: number,
  created_at: number
}