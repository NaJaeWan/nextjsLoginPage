// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default function loginHandler(id, password) {
  axios
    .get(`http://localhost:3001/account?id=${id}&password=${password}`)
    .then((res) => {
      if (res.data.length === 1) {
        alert(`안녕하세요 ${id}님`);
      } else {
        alert('로그인에 실패했습니다.');
      }
    })
    .catch((error) => {
      alert('로그인이 정상적으로 성공하지 못했습니다.', error);
    });
}
