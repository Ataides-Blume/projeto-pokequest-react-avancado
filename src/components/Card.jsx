import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  padding: 1rem;
`

export const Card = styled.div`
  background: ${({theme}) => theme.card};
  border: 1px solid ${({theme}) => theme.border};
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform .12s ease;
  &:hover { transform: translateY(-2px) }
`

export const PokeImg = styled.img`
  width: 120px;
  height: 120px;
  image-rendering: pixelated;
`

export const Badge = styled.span`
  padding: .25rem .5rem;
  border-radius: .5rem;
  border: 1px solid ${({theme}) => theme.border};
  font-size: .75rem;
  margin: .125rem;
`