import React, { useState, useEffect } from 'react';
import { Row, Col, Skeleton, Image, Button } from 'antd';
import { useParams } from 'react-router-dom';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.min.css';
import MasterLayoutMovie from '../../components/master-layout';
import { api } from '../../services/api';
import { helpers } from '../../helpers/common';

const DetailMovie = () => {
  const [isOpen, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [detailMovie, setDetailMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await api.getDetailMovieById(id);
      if(!helpers.isEmptyObject(data)){
        setDetailMovie(data);
      }
      setLoading(false);
    }
    getData();
  }, [id])

  if(loading || helpers.isEmptyObject(detailMovie)) {
    return (
      <MasterLayoutMovie>
        <Skeleton active />
      </MasterLayoutMovie>
    )
  }
  return (
    
    <MasterLayoutMovie>
      <Row style={{ margin: '30px 0px'}}>
        <Col span={8}>
          <Image
            src={`https://image.tmdb.org/t/p/w300${detailMovie.poster_path}`}
          />
          <h1>{detailMovie.original_title}</h1>
          <p>release date: {detailMovie.release_date}</p>
        </Col>
        <Col span={8}>
          <p>
            {detailMovie.overview}
          </p>
          <p>Vote average : {detailMovie.vote_average}</p>
          <p>Vote count : {detailMovie.vote_count}</p>
          <Button
              type="primary"
              onClick={()=> setOpen(true)}
            > View trailer</Button>
          {
            detailMovie.videos.hasOwnProperty('results') 
            &&
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={detailMovie.videos.results[0].key} onClose={() => setOpen(false)} />
          }
          
        </Col>
        <Col span={8}>
          {detailMovie.images.backdrops.map((item, index) => (
            <Image key={index} src={`https://image.tmdb.org/t/p/w300${item.file_path}`} />
          ))}
        </Col>
      </Row>
    </MasterLayoutMovie>
  )
}

export default React.memo(DetailMovie);