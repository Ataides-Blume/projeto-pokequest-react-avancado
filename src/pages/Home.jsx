import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { listPokemons, getPokemon, listTypes } from "../services/pokeapi";
import { Grid, Card, PokeImg, Badge } from "../components/Card";

const Toolbar = styled.div`
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
  align-items: center;
`;

const LoadMore = styled.button`
  display: block;
  margin: 1rem auto 2rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.bgElevated};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

export default function Home() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState([]);
  const [typeFilter, setTypeFilter] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    listTypes()
      .then(setTypes)
      .catch(() => {});
  }, []);

  useEffect(() => {
    loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadMore() {
    if (loading) return; // Evita carregamento duplicado
    setLoading(true);
    const res = await listPokemons(10, page * 10);
    const detailed = await Promise.all(
      res.results.map((r) => getPokemon(r.name))
    );
    setItems((prev) => {
      // Evita duplicados caso o usuário clique rápido
      const names = new Set(prev.map((p) => p.name));
      const novos = detailed.filter((p) => !names.has(p.name));
      return [...prev, ...novos];
    });
    setPage((p) => p + 1);
    setLoading(false);
  }

  const filtered = useMemo(() => {
    if (typeFilter === "all") return items;
    return items.filter((p) => p.types.some((t) => t.type.name === typeFilter));
  }, [items, typeFilter]);

  return (
    <div>
      <Toolbar>
        <label>
          Filtrar por tipo:{" "}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="all">Todos</option>
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </Toolbar>
      <Grid>
        {filtered.map((p) => (
          <Card
            key={p.name}
            onClick={() => navigate(`/pokemon/${p.name}`)}
            role="button"
            aria-label={`Ver detalhes de ${p.name}`}
          >
            <PokeImg
              alt={p.name}
              src={
                p.sprites.other?.["official-artwork"]?.front_default ||
                p.sprites.front_default ||
                ""
              }
            />
            <h3 style={{ margin: "0.5rem 0 0" }}>{p.name}</h3>
            <div>
              {p.types.map((t) => (
                <Badge key={t.type.name}>{t.type.name}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </Grid>

      <LoadMore onClick={loadMore} disabled={loading}>
        {loading ? "Carregando..." : "Carregar mais"}
      </LoadMore>
    </div>
  );
}
