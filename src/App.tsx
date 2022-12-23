import { Header } from './components/Header';

import styles from './app.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          post
        </main>
      </div>
    </>
  );
}