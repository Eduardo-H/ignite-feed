import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './styles.module.css';

export function Comment() {
  return (
    <div className={styles.container}>
      <img src="https://github.com/Eduardo-H.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jania Martins</strong>
              <time title="23 de dezembro às 08:10" dateTime="2022-12-24 08:10:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito legal Eduardo!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}