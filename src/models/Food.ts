class Food {
  description: string
  image: string
  title: string
  infos: string[]
  id: number
  rating: number

  constructor(
    description: string,
    image: string,
    title: string,
    infos: string[],
    id: number,
    rating: number
  ) {
    this.description = description
    this.image = image
    this.title = title
    this.infos = infos
    this.id = id
    this.rating = rating
  }
}

export default Food
