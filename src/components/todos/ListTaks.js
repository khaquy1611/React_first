import React from 'react';
import PropTypes from 'prop-types';
import './todo.css';

class ListTask extends React.Component {
  render() {
    return(
      <>
        <ul>
          {this.props.listWorks.map((item, index) => (
            <li key={index} style={{ marginTop: '5px' }}>
              <input
                type="checkbox"
                onClick={() => this.props.finish(item.id_work)}
              />
              <span className={`nameWork ${item.done ? 'del' : ''}`}> {item.name_work} </span>
              <button
                style={{ marginLeft: '5px' }}
                onClick={()=>this.props.del(item.id_work)}
              > Xoa </button>
            </li>
          ))}
        </ul>
      </>
    )
  }
}
ListTask.propTypes = {
  listWorks: PropTypes.array.isRequired,
  finish: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired
}
export default ListTask;