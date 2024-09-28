import { TagContainer } from './styles'

export type Props = {
  children: JSX.Element
}

const Tag = ({ children }: Props) => <TagContainer>{children}</TagContainer>

export default Tag
