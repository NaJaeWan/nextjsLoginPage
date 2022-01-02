import Head from 'next/head';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.scss';
import { useState } from 'react';

export default function Home() {
  const [userID, setUserID] = useState('');
  const [userPW, setUserPW] = useState('');

  const changeUserID = (e) => {
    setUserID(e.target.value);
  };
  const changeUserPW = (e) => {
    setUserPW(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>로그인 페이지</title>
      </Head>

      <Box className={styles.loginForm}>
        <h1>Touch Class</h1>
        <Box component="form" onSubmit={handleSubmit}>
          <div className={styles.loginFormInput}>
            <TextField
              className={styles.idFiled}
              label="아이디"
              variant="outlined"
              onChange={changeUserID}
            />
            <TextField
              className={styles.pwFiled}
              label="비밀번호"
              variant="outlined"
              onChange={changeUserPW}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ display: 'inline' }}
            >
              login
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
}
