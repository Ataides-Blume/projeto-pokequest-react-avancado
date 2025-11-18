import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { ThemeContextProvider, useThemeCtx } from './theme/ThemeContext'
import { GlobalStyle } from './theme/global'
import { light, dark } from './theme/theme'

const Root = () => {
  const { theme } = useThemeCtx()
  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter basename="/projeto-pokequest-react-avancado/">
        <Root />
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
)