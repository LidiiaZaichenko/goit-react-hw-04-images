import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { fetchImages } from 'api';
import { useEffect, useState } from 'react';

export const App = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;
      async function addImages() {
        try {
          setLoading(true);
          const gallery = await fetchImages(page, query);
          setGalleryItems(prevState => [
            ...prevState.galleryItems,
            ...gallery.hits,
          ]);
          setTotalPages(Math.ceil(gallery.totalHits / 12));
          setError(false);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
  
      addImages();
  },[query,page]);

  const handleSearchSubmit = query => {
    setQuery(query);
    setGalleryItems([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState.page + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      {loading && <Loader />}
      {error && <div>Whoops! Error! Please reload this page!</div>}
      {galleryItems.length > 0 && <ImageGallery listImages={galleryItems} />}
      {galleryItems.length > 0 && totalPages !== page && !loading && (
        <Button onClick={handleLoadMore} />
      )}
    </div>
  );
};
