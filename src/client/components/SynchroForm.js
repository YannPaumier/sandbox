import React from 'react';
//import './SynchroForm.css';

const RESET_VALUES = {id: '', type: '', frequency: '', active: false, url_repo: ''};

class SynchroForm extends React.Component {

  constructor(props){
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      synchro: Object.assign({}, RESET_VALUES),
      errors: {
        type: '',
      }
    };
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState((prevState) => {
      prevState.synchro[name] = value;
      prevState.errors['type'] = '';
      return {
        synchro: prevState.synchro,
        errors: prevState.errors
      };
    });
  }

  handleSave(e) {
    if(!this.validationForm()) {
      return;
    }else {
      this.props.onSave(this.state.synchro);

      // reset the form values to blank after submitting:
      this.setState({
        synchro: Object.assign({}, RESET_VALUES),
        errors:  Object.assign({},{
          type: '',
        })
      });
      // prevent the form submit event from triggering an HTTP Post:
      e.preventDefault();
    }

  }

  validationForm() {
    var validation = false;

    if (this.state.synchro.type !== 'Smartfocus') {
      this.setState({
        errors: {
          type : 'Veuillez renseigner un type valide'
        }
      });
      validation = false;
    }else{
      this.setState({
        errors: {
          type : ''
        }
      });
      validation = true;
    }

    return validation;
  }

  render(){
    return (
      <form>
        <h3>Create a new Synchro</h3> 

        <p>
          <label>
            type
            <br />
            <input type="text" name="type"  onChange={this.handleChange} value={this.state.synchro.type} />{this.state.errors.type}
          </label>
        </p>
        <p>
          <label>
            Frequency
            <br />
            <input type="number" name="frequency" onChange={this.handleChange} value={this.state.synchro.frequency} />
          </label>
        </p>
        <p>
          <label>
            URL repo
            <br />
            <input type="text" name="url_repo" onChange={this.handleChange} value={this.state.synchro.url_repo} />
          </label>
        </p>
        <p>
          <label>
            Active ?
            <br />
            <input type="checkbox" name="active" onChange={this.handleChange} checked={this.state.synchro.active} />
          </label>
        </p>
          <input type="button" value="Valider" onClick={this.handleSave}/>
      </form>
    );
  }
}

export default SynchroForm;
