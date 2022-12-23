import { ThumbsUp, Trash } from 'phosphor-react';

import { Author } from '../../App';
import { Avatar } from '../Avatar';

import styles from './styles.module.css';

interface CommentProps {
  author: Author;
  content: string;  
  applauses: number;
}

export function Comment({ author, content, applauses }: CommentProps) {
  return (
    <div className={styles.container}>
      <Avatar avatarUrl={author.avatarUrl} hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time title="23 de dezembro às 08:10" dateTime="2022-12-24 08:10:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>{applauses}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}