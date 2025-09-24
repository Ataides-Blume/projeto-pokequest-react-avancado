import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root { color-scheme: light dark; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji;
    background: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.text};
  }
  a { color: inherit; }
  button { font: inherit; }
`