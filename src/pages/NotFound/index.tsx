import Styles from './NotFound.module.scss';
import { ReactComponent as NotFoudImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import StyleTema from 'styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={classNames({
      [Styles.container]: true,
      [StyleTema.container]: true
    })}>
      <div className={Styles.voltar}>
        <button onClick={() => navigate(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <NotFoudImage />
    </div>
  );
}