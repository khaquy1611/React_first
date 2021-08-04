import React from 'react';
import CoronaContext from './MyContext';
import { getDataVirusCorona } from '../services/Virus';

class CoronaProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      virus: []
    }
  }

  async componentDidMount() {
    await this.setState({loading: true});
    const data = await getDataVirusCorona();
    await this.setState({
      loading: false,
      virus: data
    })
  }

  render() {
    return(
      <>
        <CoronaContext.Provider value={this.state}>
          {this.props.children}
        </CoronaContext.Provider>
      </>
    )
  }
}
export default CoronaProvider;