import { Link } from 'react-router-dom';

const noticiasMock = [
  {
    id: '1',
    titulo: 'Tesla anuncia novo modelo com 800km de autonomia',
    resumo: 'O novo modelo da Tesla promete revolucionar o mercado com sua autonomia estendida.'
  },
  {
    id: '2',
    titulo: 'BYD lidera vendas de carros elétricos no Brasil',
    resumo: 'Marca chinesa supera concorrentes com ampla oferta e custo-benefício.'
  }
];

function Home() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Últimas Notícias</h2>
      <div className="grid gap-4">
        {noticiasMock.map(noticia => (
          <Link to={`/noticia/${noticia.id}`} key={noticia.id} className="border p-4 rounded-xl shadow hover:bg-gray-100">
            <h3 className="text-xl font-bold">{noticia.titulo}</h3>
            <p>{noticia.resumo}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
