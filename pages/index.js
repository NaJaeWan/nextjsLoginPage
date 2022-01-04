import Head from 'next/head';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.scss';
import loginHandler from './api/loginHandler';
import Image from 'next/image';
import logo from '../public/logo.png';
import { useInput } from '../hooks/useInput';

export default function Home() {
  const regExp = /^[0-9a-zA-Z]{6,16}$/;
  const userID = useInput('아이디','',regExp);
  const userPW = useInput('비밀번호','',regExp);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!userID.checkValid() || !userPW.checkValid()){
      return;
    }
    loginHandler(userID.value,userPW.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>로그인 페이지</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Narrow&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Box className={styles.loginForm}>
        <h1>Touch Class</h1>
        <Image
          src={logo}
          width={100}
          height={100}
          className={styles.loginLogo}
        />
        <Box component="form" onSubmit={handleSubmit}>
          <div className={styles.loginFormInput}>
            <TextField
              className={styles.idFiled}
              label="아이디"
              variant="outlined"
              onChange={userID.onChange}
              error={userID.error}
              helperText={
                userID.error && '아이디는 6~16자 숫자, 영어만 가능합니다.'
              }
            />
            <TextField
              type="password"
              className={styles.pwFiled}
              label="비밀번호"
              variant="outlined"
              onChange={userPW.onChange}
              error={userPW.error}
              helperText={
                userPW.error && '비밀번호는 6~16자 숫자, 영어만 가능합니다.'
              }
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
