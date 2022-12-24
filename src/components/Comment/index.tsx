import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';

import { Author } from '../../App';
import { Avatar } from '../Avatar';

import styles from './styles.module.css';

interface CommentProps {
  id: string;
  author: Author;
  content: string;
  onDeleteComment: (id: string) => void;
}

export function Comment({ id, author, content, onDeleteComment }: CommentProps) {
  const [applausesCount, setApplausesCount] = useState(0);

  function handleApplaudComment() {
    setApplausesCount((state) => {
      return state + 1;
    });
  }

  function handleDeleteComment() {
    onDeleteComment(id);
  }

  return (
    <div className={styles.container}>
      <Avatar src={author.avatarUrl} hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time title="23 de dezembro às 08:10" dateTime="2022-12-24 08:10:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleApplaudComment}>
            <ThumbsUp />
            Aplaudir <span>{applausesCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}