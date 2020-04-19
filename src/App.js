import React, {useEffect, useState} from 'react';
import ImageCard from './components/ImageCard';
import SearchForm from './components/SearchForm';

const App = () => {
  const [images, setImages ] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');


  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
      })
    .catch(err => console.log(err));
  }, [term])

  return (
    <div className="bg-gray-200"> 
        <div className="container mx-auto"> 
        <SearchForm searchText={(text) => setTerm(text)} />
         {!isLoading && images.length === 0 && <h1 className="text-3xl text-teal-500 text-center mx-auto mt-32">No Images Found</h1> }
        <div className="grid grid-cols-3 gap-4 py-4">
          {images.map(image => (
             <ImageCard key={image.id} image={image}/>
          ))}
        </div>
    </div>
    </div>
  );
}

export default App;
