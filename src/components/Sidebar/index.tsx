import { PencilSimpleLine } from 'phosphor-react';

import { Avatar } from '../Avatar';

import styles from './styles.module.css';

export function Sidebar() {
  return (
    <aside className={styles.container}>
      <img 
        src="https://images.unsplash.com/photo-1617900906639-cab7adceb499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/Eduardo-H.png" />

        <strong>Eduardo Oliveira</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} weight="regular" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}