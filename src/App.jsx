import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import styled from 'styled-components'
import { useThemeCtx } from './theme/ThemeContext'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: ${({theme}) => theme.bgElevated};
  border-bottom: 1px solid ${({theme}) => theme.border};
  position: sticky;
  top: 0;
  z-index: 10;
`

const Brand = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.text};
  font-weight: 800;
  font-size: 1.25rem;
`

const Toggle = styled.button`
  border: 1px solid ${({theme}) => theme.border};
  background: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text};
  padding: .5rem .75rem;
  border-radius: .75rem;
  cursor: pointer;
`

export default function App(){
  const { theme, toggle } = useThemeCtx()
  return (
    <>
      <Header>
        <Brand to="/">PokeQuest</Brand>
        <Toggle onClick={toggle} aria-label="Alternar tema">
          {theme === 'light' ? '🌞 Claro' : '🌙 Escuro'}
        </Toggle>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<Details />} />
      </Routes>
    </>
  )
}