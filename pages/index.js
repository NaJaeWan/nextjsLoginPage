import Head from 'next/head';
import Box from '@mui/material/Box';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>로그인 페이지</title>
      </Head>

      <Box component="form" className={styles.loginForm}>
        <h1>로그인 페이지</h1>
      </Box>
    </div>
  );
}
