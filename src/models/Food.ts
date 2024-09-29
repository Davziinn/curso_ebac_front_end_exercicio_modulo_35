class Food {
  description: string
  image: string
  title: string
  infos: string[]
  id: number

  constructor(
    description: string,
    image: string,
    title: string,
    infos: string[],
    id: number
  ) {
    this.description = description
    this.image = image
    this.title = title
    this.infos = infos
    this.id = id
  }
}

export default Food
