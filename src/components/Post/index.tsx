import { FormEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Author } from '../../App';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import styles from './styles.module.css';

interface Comment {
  id: number;
  author: Author;
  content: string;  
  applauses: number;
}

interface PostProps {
  author: Author;
  content: {
    type: string;
    content: string;
  }[];
  publishedAt: Date;  
}

export function Post({ author, publishedAt, content }: PostProps) {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handlePublishComment(event: FormEvent) {
    event.preventDefault();

    const newComment: Comment = {
      id: comments.length + 1,
      author: {
        name: 'Eduardo Oliveira',
        role: 'Web Developer',
        avatarUrl: 'https://github.com/Eduardo-H.png'
      },
      content: commentText,
      applauses: 0
    }
    
    setCommentText('');
    setComments([...comments, newComment]);
  }

  return (
    <article className={styles.container}>
      <header>
        <div className={styles.author}>
          <Avatar avatarUrl={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handlePublishComment}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Escreva um comentário" 
          onChange={e => setCommentText(e.target.value)}
          value={commentText}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => 
          <Comment 
            key={comment.id}
            author={comment.author}
            content={comment.content}
            applauses={comment.applauses}
          />  
        )}
      </div>
    </article>
  );
}