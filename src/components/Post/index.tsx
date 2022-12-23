import styles from './styles.module.css';

export function Post() {
  return (
    <article className={styles.container}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/Eduardo-H.png" className={styles.avatar} />

          <div className={styles.authorInfo}>
            <strong>Eduardo Oliveira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="23 de dezembro às 08:10" dateTime="2022-12-24 08:10:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala pessoal!</p>
        <p>Hoje eu comecei a estudar a base do React para poder reforçar meus conhecimentos. Espero que seja uma experiência gratificante.</p>
        <p>Vou atualizando vocês por esse link: <a href="#">meusite.com.br</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
    </article>
  );
}