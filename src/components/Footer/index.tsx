import Styles from './Footer.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg'; 

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <Logo />
    </footer>

  );
}