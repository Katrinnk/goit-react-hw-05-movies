import { getTrending } from 'api/movies';
import { Notify } from 'notiflix';
// import { Notify } from 'notiflix';
// import { useEffect } from 'react';

const Home = () => {
  //   useEffect(() => {
  //     const fetchTrending = async () => {
  //       try {
  //         const data = await getTrending();
  //         console.log('data', data);
  //       } catch (e) {
  //         Notify.failure(e);
  //       }
  //     };
  //     fetchTrending();
  //   }, []);

  const fetchTrending = async () => {
    try {
      const data = await getTrending();
      console.log('data', data);
    } catch (e) {
      Notify.failure(e);
    }
  };

  fetchTrending();

  return (
    <>
      <h2>Home</h2>
    </>
  );
};
export default Home;
