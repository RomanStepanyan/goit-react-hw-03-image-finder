import { Component } from 'react';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import GetImages from './Components/GetImages/GetImages';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';
import Spinner from './Components/Loader/Loader';
import './App.css';

export default class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    modalSrc: '',
    isloading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      const { page, searchQuery } = this.state;
      if (searchQuery !== prevState.searchQuery) {
        this.setState({ images: [], page: 1 });
        this.setState({ isloading: true });
        const newImages = await GetImages({ q: searchQuery, page });

        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
          page: prevState.page + 1,
        }));
        this.setState({ isloading: false });
      }
    } catch (error) {
      console.log('Error => ', error);
      return [];
    }
    // this.scrollPage();
  }

  onSubmitHandler = search => {
    this.setState({ searchQuery: search });
  };

  loadMore = async () => {
    try {
      this.setState({ isloading: true });
      const { searchQuery, page } = this.state;
      const getNextPageImages = await GetImages({ q: searchQuery, page });
      this.setState(prevState => ({
        images: [...prevState.images, ...getNextPageImages],
        page: prevState.page + 1,
      }));
    } catch (error) {
      console.log('Error => ', error);
      return [];
    } finally {
      this.setState({ isloading: false });
    }
    this.scrollPage();
  };

  scrollPage = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  onModalImage = modalSrc => {
    this.setState({ modalSrc });
  };

  onCloseModal = () => {
    this.setState({ modalSrc: '' });
  };

  render() {
    const { images, modalSrc, isloading } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmitHandler={this.onSubmitHandler} />

        {images && (
          <ImageGallery
            searchResult={this.state.images}
            onOpen={this.onModalImage}
          />
        )}
        {isloading && <Spinner />}
        {images.length > 0 && !isloading && <Button onClick={this.loadMore} />}
        {modalSrc && (
          <Modal
            largeImageURL={modalSrc}
            onCloseModal={this.onCloseModal}
            onClick={this.props.onOverlayClick}
          />
        )}
      </div>
    );
  }
}
