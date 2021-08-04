import React, { useState } from 'react';
import { Row, Col, DatePicker } from 'antd';
import MasterLayoutMovie from '../../components/master-layout';
import { api } from '../../services/api';
import ListMovies from '../../components/list-movies';
import PaginationMovie from '../../components/pagination';
import { helpers } from '../../helpers/common';


const { RangePicker } = DatePicker;

const UpcomingMoviePage = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [tdate , setToDate] = useState('');
  const [fdate, setFromDate] = useState('');
  const [comingMovies, setComingMovies] = useState({});
  const [totalItems, setTotalItem] = useState(0);

  const getChooseDate = async (t1, t2, p = 1) => {
    setLoading(true);
    setPage(p);
    let fromDate = t2[0];
    let toDate = t2[1];
    let movies = await api.getDataUpcomingMovie(fromDate, toDate, page);
    if(movies.hasOwnProperty('results')){
      setComingMovies(movies.results);
      setTotalItem(movies.total_results);
      setFromDate(fromDate);
      setToDate(toDate);
    }
    setLoading(false);
  }
  //console.log(comingMovies);
  return(
    <MasterLayoutMovie>
      <Row>
        <Col span={24}>
          <RangePicker
            onChange={(d1,d2) => getChooseDate(d1,d2)}
          />
        </Col>
      </Row>
      {
        !helpers.isEmptyObject(comingMovies)
        && 
        <ListMovies
          loading={loading}
          movies={comingMovies}
        />
      }

      {
        !helpers.isEmptyObject(comingMovies)
        &&
        !loading 
        &&
        <PaginationMovie
          current={page}
          total={totalItems}
          fDate={fdate}
          tDate={tdate}
          change={getChooseDate}
        />
      }
      
    </MasterLayoutMovie>
  )
}
export default React.memo(UpcomingMoviePage);