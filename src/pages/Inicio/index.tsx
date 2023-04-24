import Menu from 'components/menu';
import cardapio from 'data/cardapio.json';
import Item from 'pages/Cardapio/Itens/Item';
import Styles from './Inicio.module.scss';
import StylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

export default function Inicio() {
  let pratosRecomendado = [...cardapio];
  pratosRecomendado = pratosRecomendado.sort(() => 0.5 - Math.random()).splice(0, 3);
  const navigate = useNavigate();

  function redirecionarParaDetalhes(prato: Prato) {
    navigate(`/prato/${prato.id}`, { state: { prato }, replace: true });
  }
  return (
    <section>
      <h3 className={StylesTema.titulo}>
        Recomendações da conzinha
      </h3>
      <div className={Styles.recomendados}>
        {pratosRecomendado.map(Item => (
          <div key={Item.id} className={Styles.recomendado}>
            <div className={Styles.recomendado__imagem}>
              <img src={Item.photo} alt={Item.title} />
            </div>
            <button
              className={Styles.recomendado__botao}
              onClick={() => redirecionarParaDetalhes(Item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={StylesTema.titulo}>Nossa casa</h3>
      <div className={Styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <div className={Styles.nossaCasa__endereco}>
          Rua vergueiro, 3185 <br /><br /> Vila mariana - SP
        </div>
      </div>
    </section>
  );
}







