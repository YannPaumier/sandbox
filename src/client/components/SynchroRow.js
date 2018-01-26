import React from 'react';
import './SynchroRow.css';

class SynchroRow extends React.Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    this.props.onDelete(this.props.synchro.id);
  }

  render(){
    return (
      <tr>
        <td>
          <span className={this.props.synchro.active ? '' : 'Synchro-inactive' }>
            {this.props.synchro.type}
          </span>
        </td>
        <td>
          {this.props.synchro.frequency}
        </td>
        <td>
          <button onClick={this.delete}>x</button>
        </td>
      </tr>
    );
  }
}

export default SynchroRow;
