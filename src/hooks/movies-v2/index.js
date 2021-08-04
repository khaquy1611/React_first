import { useState, useEffect } from 'react';
import ListMovies from './components/list-movies';
import PaginationMovie from './components/pagination';
import SwitchLanguage from './components/switch-language';
import HeaderMovie from './components/header';
import UserProvider from './context/user-provider';
import { popularityMovies } from './services/api';
import { Row , Col } from 'antd';


const AppMovies = () => {
  const [loading, setLoading] = useState(false);
  const [moives, setListMovie] = useState([]);
  const [language, setLanguage] = useState('en-US');
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  // tuong duong nhu componentDidMount + componentDidUpDate trong class 
  useEffect(() => {
    const getDataFromApi = async () => {
      setLoading(true);
      const dataMovie = await popularityMovies(language, page);
      if(dataMovie){
        setListMovie(dataMovie.results);
        setTotalItems(dataMovie.total_results);
      }
      setLoading(false);
    }
    getDataFromApi();
  },[language, page]);

  const changeLanguage = (lang = 'en-US') => {
    setLanguage(lang);
  }

  const changePaging = (p = 1) => {
    setPage(p);
  }

  //console.log(moives);
  return (
    <>
      <Row>
        <Col span={20} offset={2}>
        
          <UserProvider>
            <HeaderMovie/>
          </UserProvider>

          <SwitchLanguage
            change={changeLanguage}
          />
          <ListMovies
            loading={loading}
            listMovie={moives}
          />

          { 
            moives.length > 0 && !loading && <PaginationMovie totalItems={totalItems} currentPage={page} change={changePaging} />
          }
        </Col>
      </Row>
    </>
  )
}
export default AppMovies;