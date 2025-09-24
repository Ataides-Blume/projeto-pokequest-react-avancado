const BASE = 'https://pokeapi.co/api/v2'

export async function listPokemons(limit=10, offset=0){
  const res = await fetch(`${BASE}/pokemon?limit=${limit}&offset=${offset}`)
  if(!res.ok) throw new Error('Falha ao listar pokémons')
  const data = await res.json()
  return data
}

export async function getPokemon(name){
  const res = await fetch(`${BASE}/pokemon/${name}`)
  if(!res.ok) throw new Error('Pokémon não encontrado')
  return res.json()
}

export async function getAbilityDescription(url){
  const res = await fetch(url)
  if(!res.ok) throw new Error('Falha ao obter habilidade')
  const data = await res.json()
  const entry = data.effect_entries.find((e) => e.language.name === 'en')
  return entry?.short_effect || entry?.effect || 'No description'
}

export async function listTypes(){
  const res = await fetch(`${BASE}/type`)
  if(!res.ok) throw new Error('Falha ao obter tipos')
  const data = await res.json()
  return data.results.map((t) => t.name)
}