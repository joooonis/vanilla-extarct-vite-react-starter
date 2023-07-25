import { Outlet } from 'react-router-dom';
import * as styles from './layout.css';

export default function Layout() {
  return (
    <body className={styles.container}>
      <header className={styles.header}>i'm header</header>
      <main>
        <Outlet />
      </main>
      <footer className={styles.footer}>i'm footer.</footer>
    </body>
  );
}
