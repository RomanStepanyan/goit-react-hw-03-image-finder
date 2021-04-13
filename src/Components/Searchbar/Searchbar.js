import { Component } from 'react';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    search: '',
  };

  onChange = ({ target }) => {
    this.setState({ search: target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmitHandler(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            onChange={this.onChange}
            className={s.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.search}
          />
        </form>
      </header>
    );
  }
}
