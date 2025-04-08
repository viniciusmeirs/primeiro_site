import { Link } from 'react-router-dom';

const noticiasMock = [
  {
    id: '1',
    titulo: 'Tesla anuncia novo modelo com 800km de autonomia',
    resumo: 'O novo modelo da Tesla promete revolucionar o mercado com sua autonomia estendida.',
    imagem: 'https://source.unsplash.com/800x400/?tesla,carro-eletrico'
  },
  {
    id: '2',
    titulo: 'BYD lidera vendas de carros elétricos no Brasil',
    resumo: 'Marca chinesa supera concorrentes com ampla oferta e custo-benefício.',
    imagem: 'https://source.unsplash.com/800x400/?byd,carro-eletrico'
  }
];

function Home() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-4xl font-semibold mb-8">Últimas Notícias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {noticiasMock.map(noticia => (
          <Link to={`/noticia/${noticia.id}`} key={noticia.id} className="block rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300">
            <img src={noticia.imagem} alt={noticia.titulo} className="w-full h-48 object-cover" />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2">{noticia.titulo}</h3>
              <p className="text-gray-600">{noticia.resumo}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
