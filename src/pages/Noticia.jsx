import { useParams } from 'react-router-dom';

const noticiasMock = [
  {
    id: '1',
    titulo: 'Tesla anuncia novo modelo com 800km de autonomia',
    conteudo: 'A Tesla apresentou hoje o novo Model Z...'
  },
  {
    id: '2',
    titulo: 'BYD lidera vendas de carros elétricos no Brasil',
    conteudo: 'Em 2025, a BYD se consolidou como líder...'
  }
];

function Noticia() {
  const { id } = useParams();
  const noticia = noticiasMock.find(n => n.id === id);

  if (!noticia) return <div className="p-4">Notícia não encontrada.</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{noticia.titulo}</h2>
      <p>{noticia.conteudo}</p>
    </div>
  );
}

export default Noticia;
