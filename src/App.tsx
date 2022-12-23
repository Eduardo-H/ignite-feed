import { Header } from './components/Header';

import styles from './app.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}