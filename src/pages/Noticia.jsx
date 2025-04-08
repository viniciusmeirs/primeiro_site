import { useParams } from 'react-router-dom';

const noticiasMock = [
  {
    id: '1',
    titulo: 'Tesla anuncia novo modelo com 800km de autonomia',
    conteudo: 'A Tesla apresentou hoje o novo Model Z, que promete uma autonomia inédita de 800 km. O carro será lançado no segundo semestre com foco no mercado europeu.',
    imagem: 'https://source.unsplash.com/800x400/?tesla,carro-eletrico'
  },
  {
    id: '2',
    titulo: 'BYD lidera vendas de carros elétricos no Brasil',
    conteudo: 'Em 2025, a BYD se consolidou como líder de mercado em carros elétricos no Brasil, com ampla presença em todas as capitais e novas fábricas no país.',
    imagem: 'https://source.unsplash.com/800x400/?byd,carro-eletrico'
  }
];

function Noticia() {
  const { id } = useParams();
  const noticia = noticiasMock.find(n => n.id === id);

  if (!noticia) return <div className="p-4">Notícia não encontrada.</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">{noticia.titulo}</h2>
      <img src={noticia.imagem} alt={noticia.titulo} className="w-full h-64 object-cover rounded-xl mb-6" />
      <p className="text-lg text-gray-800 leading-relaxed">{noticia.conteudo}</p>
    </div>
  );
}

export default Noticia;
