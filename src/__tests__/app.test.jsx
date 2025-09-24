import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
import { ThemeContextProvider } from '../theme/ThemeContext'

describe('App renders header', () => {
  it('shows brand', () => {
    const { getByText } = render(
      <ThemeContextProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ThemeContextProvider>
    )
    expect(getByText('PokeQuest')).toBeInTheDocument()
  })
})