import React from 'react';
import { Table , Skeleton } from 'antd';
import CoronaContext from '../context/MyContext';

const columns = [
  {
    title: "Country",
    dataIndex: "Country",
    key: "Country"
  },
  {
    title: "New Confirmed",
    dataIndex: "NewConfirmed",
    key: "NewConfirmed"
  },
  {
    title: "Total Confirmed",
    dataIndex: "TotalConfirmed",
    key: "TotalConfirmed"
  },
  {
    title: "New Deaths",
    dataIndex: "NewDeaths",
    key: "NewDeaths"
  },
  {
    title: "Total Deaths",
    dataIndex: "TotalDeaths",
    key: "TotalDeaths"
  },
  {
    title: "New Recovered",
    dataIndex: "NewRecovered",
    key: "NewRecovered"
  },
  {
    title: "Total Recovered",
    dataIndex: "TotalRecovered",
    key: "TotalRecovered"
  }
];


class Countries extends React.PureComponent {

  render() {
    return(
      <CoronaContext.Consumer>
        {context => {
          if(context.loading || context.virus.length === 0){
            return <Skeleton active />
          }
          return (
            <div style={{ marginTop: '20px'}}>
              <Table rowKey="CountryCode" columns={columns} dataSource={context.virus.Countries} />
            </div>
          )
        }}
      </CoronaContext.Consumer>
    )
  }
}
export default Countries;