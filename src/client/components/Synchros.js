import React from 'react';
import Filters from './Filters';
import SynchroTable from './SynchroTable';
import SynchroForm from './SynchroForm';

var SYNCHROS = {
  '1': {id: 1, type: 'Smartfocus', frequency: '12', active: true, url_repo: 'Clarinet'},
  '2': {id: 2, type: 'Smartfocus', frequency: '24', active: true, url_repo: 'Cello'},
  '3': {id: 3, type: 'Smartfocus', frequency: '12', active: false, url_repo: 'Fortepiano'},
  '4': {id: 4, type: 'DI', frequency: '12', active: true, url_repo: 'Bean Bag'},
  '5': {id: 5, type: 'AC', frequency: '48', active: true, url_repo: 'Chaise Lounge'},
  '6': {id: 6, type: 'AC', frequency: '48', active: false, url_repo: 'Dining Table'},
  '7': {id: 7, type: 'AC', frequency: '12', active: true, url_repo: 'Bean Bag'},
  '8': {id: 8, type: 'DI', frequency: '24', active: false, url_repo: 'Bean Bag'}

};

class Synchros extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.saveSynchro = this.saveSynchro.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      filterText: '',
      activeOnly: false,
      synchros: SYNCHROS
    };
  }

  handleFilter(filterInput) {
    this.setState(filterInput);
  }

  saveSynchro(synchro) {
    if (!synchro.id) {
      synchro.id = new Date().getTime();
    }
    this.setState((prevState) => {
      let synchros = prevState.synchros;
      synchros[synchro.id] = synchro;
      return { synchros };
    });
  }

  handleDelete(id) {
    this.setState((prevState) => {
      let synchros = prevState.synchros;
      delete synchros[id];
      return { synchros };
    });
  }

  render() {
    return (
      <div>
        <Filters
          filterText={this.state.filterText}
          activeOnly={this.state.activeOnly}
          onFilter={this.handleFilter}
        />
        <SynchroTable
          synchros= {this.state.synchros}
          filterText={this.state.filterText}
          activeOnly={this.state.activeOnly}
          onDelete={this.handleDelete}
        />
        <SynchroForm
          onSave={this.saveSynchro}
        />
      </div>
    );
  }
}

export default Synchros;
