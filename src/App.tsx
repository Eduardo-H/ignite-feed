import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import { posts } from './utils/seed';
import styles from './app.module.css';
import './global.css';


export interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Post {
  id: number;
  author: Author;
  content: {
    type: string;
    content: string;
  }[],
  publishedAt: Date;
}

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post 
              key={post.id} 
              author={post.author} 
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}