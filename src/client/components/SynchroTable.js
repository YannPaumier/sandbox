import React from 'react';
import SynchroRow from './SynchroRow';
import SortableColumnHeader from './SortableColumnHeader';

class SynchroTable extends React.Component {
  constructor(props) {
    super(props);
    this.sortByColumnAndDirection = this.sortByColumnAndDirection.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      sort : {
        column: 'type',
        direction: 'asc'
      }
    };
  }
  handleDelete(id){
      this.props.onDelete(id)
  }

  sortByColumnAndDirection(objectA, objectB){
    let isDesc = this.state.sort.direction === 'desc' ? -1 : 1;
    let [a, b] = [objectA[this.state.sort.column], objectB[this.state.sort.column]];
    if (this.state.sort.column === 'frequency') {
      [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d]/g, ''), 10));
    }
    if (a > b) {
      return 1 * isDesc;
    }
    if (a < b) {
      return -1 * isDesc;
    }
    return 0;
  }

  sortSynchros(){
    let synchrosAsArray = Object.keys(this.props.synchros).map((pid) => this.props.synchros[pid]);
    return synchrosAsArray.sort(this.sortByColumnAndDirection);
  }

  handleSort(column, direction) {
    this.setState({
      sort: {
        column: column,
        direction: direction
      }
    });
  }

  render() {

    let rows = [];
     this.sortSynchros().forEach((synchro) => {
       if (synchro.type.indexOf(this.props.filterText) === -1 || (!synchro.active && this.props.activeOnly) ){
         return;
       }
      rows.push(
        <SynchroRow synchro={synchro} key={synchro.id} onDelete={this.handleDelete}/>
      );
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <SortableColumnHeader
                onSort = {this.handleSort}
                currentSort = {this.state.sort}
                column = "type"
              />
              <SortableColumnHeader
                onSort = {this.handleSort}
                currentSort = {this.state.sort}
                column = "frequency"
              />
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SynchroTable;
