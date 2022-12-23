import igniteLogo from '../../assets/ignite-logo.svg';

import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.container}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
}