import { useState } from 'react';
import InputSearch from './components/input';
import ListMovies from './components/list-movie';
import { Pagination, Row, Col } from 'antd';
import { searchMovies } from './services/api';

const AppMovie = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);

  const searchMovieByKey = async (nameMovie, p = 1) => {
    if(nameMovie !== ''){
      await setKeyword(nameMovie);
      await setPage(p);
      
      // call api tim kiem phim 
      await setLoading(true);
      const dataMovie = await searchMovies(nameMovie, p);
      if(dataMovie){
        await setMovies(dataMovie.results);
        await setTotalItems(dataMovie.total_results);
      }
      await setLoading(false);
    }
  }

  //console.log(movies);

  return(
    <>
      <InputSearch
        search={searchMovieByKey}
        loading={loading}
      />
      <ListMovies
        listMovies={movies}
        loading={loading}
      />

      {movies.length !== 0 && (
        <Row>
          <Col span={20} offset={2}>
            <div style={{ textAlign: 'center', margin: '30px 0px'}}>
              <Pagination
                pageSize={20}
                current={page}
                total={totalItems}
                showSizeChanger={false}
                onChange={ pages => searchMovieByKey(keyword, pages)}
              />
            </div>
          </Col>
        </Row>
      )}
    </>
  )
}
export default AppMovie;