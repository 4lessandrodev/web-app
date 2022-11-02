import type { NextPage } from 'next';
import Title from '../components/atoms/Title';
import style from '../styles/home.module.css';

const Home: NextPage = () => {
  return (
    <div className={style.main}>
      <Title value='Welcome to template' size='LARGE'/>
    </div>
  )
}

export default Home
