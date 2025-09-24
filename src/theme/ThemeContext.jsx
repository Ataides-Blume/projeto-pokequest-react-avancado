import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeCtx = createContext(null)

export function ThemeContextProvider({children}){
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'))

  return <ThemeCtx.Provider value={{theme, toggle}}>{children}</ThemeCtx.Provider>
}

export function useThemeCtx(){
  const ctx = useContext(ThemeCtx)
  if(!ctx) throw new Error('useThemeCtx must be used within ThemeContextProvider')
  return ctx
}