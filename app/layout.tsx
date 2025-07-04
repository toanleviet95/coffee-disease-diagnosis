import Image from 'next/image';
import type { ReactNode } from 'react';
import { StoreProvider } from './StoreProvider';

import './styles/globals.css';
import styles from './styles/layout.module.css';

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="vi">
        <body>
          <section className={styles.container}>
            <header className={styles.header}>
              <Image src="/logo.svg" className={styles.logo} alt="logo" width={100} height={100} />
              <h1>Coffee Disease Diagnosis</h1>
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
              <span>
                @AI-powered diagnosis using image analysis, weather data & knowledge graphs
              </span>
            </footer>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
