import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { getAbilityDescription, getPokemon } from '../services/pokeapi'
import { Badge, PokeImg } from '../components/Card'

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 1rem;
`

const Back = styled(Link)`
  display: inline-block;
  margin-bottom: 1rem;
  text-decoration: none;
  border: 1px solid ${({theme}) => theme.border};
  padding: .5rem .75rem;
  border-radius: .75rem;
`

const Section = styled.section`
  background: ${({theme}) => theme.card};
  border: 1px solid ${({theme}) => theme.border};
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem 0;
`

export default function Details(){
  const { name } = useParams()
  const [poke, setPoke] = useState(null)
  const [abilities, setAbilities] = useState([])

  useEffect(() => {
    if(!name) return
    getPokemon(name).then(async p => {
      setPoke(p)
      const abilityDescs = await Promise.all(p.abilities.map(async a => ({
        name: a.ability.name,
        desc: await getAbilityDescription(a.ability.url)
      })))
      setAbilities(abilityDescs)
    })
  }, [name])

  if(!poke) return <Container>Carregando...</Container>

  return (
    <Container>
      <Back to="/">← Voltar</Back>
      <Section style={{display:'grid',gridTemplateColumns:'160px 1fr', gap:'1rem', alignItems:'center'}}>
        <PokeImg alt={poke.name} src={poke.sprites.other?.['official-artwork']?.front_default || poke.sprites.front_default || ''} />
        <div>
          <h1 style={{margin:0, textTransform:'capitalize'}}>{poke.name}</h1>
          <div>{poke.types.map(t => <Badge key={t.type.name}>{t.type.name}</Badge>)}</div>
        </div>
      </Section>

      <Section>
        <h2 style={{marginTop:0}}>Habilidades</h2>
        <ul>
          {abilities.map(a => <li key={a.name}><strong>{a.name}</strong>: {a.desc}</li>)}
        </ul>
      </Section>

      <Section>
        <h2 style={{marginTop:0}}>Movimentos</h2>
        <details>
          <summary>Mostrar lista de movimentos ({poke.moves.length})</summary>
          <ul>
            {poke.moves.map(m => <li key={m.move.name}>{m.move.name}</li>)}
          </ul>
        </details>
      </Section>
    </Container>
  )
}