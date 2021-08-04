import { Pagination, Row, Col } from 'antd';

const PaginationMovies = (props) => {
  return(
    <>
      <Row>
          <Col span={20} offset={2}>
            <div style={{ textAlign: 'center', margin: '30px 0px'}}>
              <Pagination
                pageSize={20}
                current={props.currentPage}
                total={props.totalItems}
                showSizeChanger={false}
                onChange={ p => props.change(p)}
              />
            </div>
          </Col>
        </Row>
    </>
  )
}
export default PaginationMovies;