import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ({ code }) => {
    if (code === 'Escape') this.props.onCloseModal();
  };
  onOverlayClick = event => {
    if (event.currentTarget === event.target) this.props.onCloseModal();
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.onOverlayClick}>
        <div className={s.Modal}>
          <img
            src={this.props.largeImageURL}
            onClick={this.props.onModalImage}
            alt=""
          />
        </div>
      </div>,
      modalRoot,
    );
  }
}
