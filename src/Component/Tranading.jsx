import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import './Tranding.css';

const productData = [
  {
    img: 1,
    name: 'Iropa Mountain Bike',
    price: '$899.0',
    stars: 3,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F67403_000_001.png&fallback=/Products/67403_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 2,
    name: 'Kiama Classic Surfboard',
    price: '$19.99',
    stars: 3,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72100-Calm-7%276%5E_000_001.png&fallback=/Products/72100_000_001.png&w=288&h=308&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 3,
    name: 'Tomeq Snorkel Package',
    price: '$39.99',
    stars: 4,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73400_000_001.png&fallback=/Products/73400_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 4,
    name: 'Paltoni Sandals',
    price: '$49.99',
    stars: 5,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F69210_000_001.png&fallback=/Products/69210_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 5,
    name: 'Paltoni Sandals',
    price: '$49.99',
    stars: 5,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F64702_000_001.png&fallback=/Products/64702_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 6,
    name: 'Paltoni Sandals',
    price: '$49.99',
    stars: 5,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72300_000_001.png&fallback=/Products/72300_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true',
  },

];

export default function NewArrivals() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productDataState, setProductDataState] = useState(productData);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productDataState.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + productDataState.length) % productDataState.length);
  };

  const handleButtonClick1 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F67403_000_001.png&fallback=/Products/67403_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };



  const handleButtonClick2_1 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72100-Calm-7%276%5E_000_001.png&fallback=/Products/72100_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick2_2 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72100-Mantis-7%276%5E_000_001.png&fallback=/Products/72100_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick2_3 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72100-Picton%20Blu-7%276%5E_000_001.png&fallback=/Products/72100_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  // image3
  const handleButtonClick3_1 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73400_000_001.png&fallback=/Products/73400_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick3_2 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73400_000_001.png&fallback=/Products/73400_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick3_3 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73400_000_001.png&fallback=/Products/73400_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick3_4 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73400_000_001.png&fallback=/Products/73400_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };

  const handleButtonClick4_1 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F69210_000_001.png&fallback=/Products/69210_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); 
  };

  const handleButtonClick5_1 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F64702_000_001.png&fallback=/Products/64702_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick6_1 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72300_000_001.png&fallback=/Products/72300_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };






  const canShowNext = currentIndex < productDataState.length - 4;
  const canShowPrev = currentIndex > 0;

  return (
    <div className='trend-mainMain'>
      <div className='trend-productmain'>
        <h1 className='trend-productgear'>Trending</h1>
      </div>
      <div className="trend-card-container">
        <div className="trend-card-strip">
          {productDataState.slice(currentIndex, currentIndex + 4).map((product, index) => (
            <div
              key={index}
              className={`trend-product-card ${currentIndex === index ? 'active' : ''} ${currentIndex + 1 === index ? 'next' : ''}`}
            >
              <div className="trend-image-container">
                <img style={{width:"250px"}}
                  src={product.imageUrl}
                  alt={product.name}
                  className="trend-product-image"
                />
                <div className='allbtn' >
                {product.img === 1 && (
                  <div className='trend-custom-button-mindy'>
                    <button className="trend-custom-button-mindy1" onClick={() => handleButtonClick1(index)}>
                    </button>

                  </div>
                )}
                {product.img === 2 && (
                  <>
                    <button className="trend-custom-button-mindy2_1" onClick={() => handleButtonClick2_1(index)}>
                    </button>
                    <button className="trend-custom-button-mindy2_2" onClick={() => handleButtonClick2_2(index)}>
                    </button>
                    <button className="trend-custom-button-mindy2_3" onClick={() => handleButtonClick2_3(index)}>
                    </button>
                   
                  </>
                )}
                {product.img === 3 && (
                  <>
                    <button className="trend-custom-button-mindy3_1" onClick={() => handleButtonClick3_1(index)}>
                    </button>
                    <button className="trend-custom-button-mindy3_2" onClick={() => handleButtonClick3_2(index)}>
                    </button>
                    <button className="trend-custom-button-mindy3_3" onClick={() => handleButtonClick3_3(index)}>
                    </button>
                    <button className="trend-custom-button-mindy3_4" onClick={() => handleButtonClick3_4(index)}>
                    </button>
  
                  </>
                )}
                {product.img === 4 && (
                  <>
                    <button className="trend-custom-button-mindy4_1" onClick={() => handleButtonClick4_1(index)}>
                    </button>
                  </>
                )}
                {product.img === 5 && (
                  <>
                    <button className="trend-custom-button-mindy5_1" onClick={() => handleButtonClick5_1(index)}>
                    </button>
  
                  </>
                )}
                {product.img === 6 && (
                  <>
                    <button className="trend-custom-button-mindy6_1" onClick={() => handleButtonClick6_1(index)}>
                    </button>

                  </>
                )}
                </div>

              </div>
              <div className="trend-product-info">
                <div className="trend-product-name">{product.name}</div>
                <div className="trend-product-price">{product.price}</div>
                <span className="trend-stars">
                  {[...Array(product.stars)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </span>
                (<span className="trend-value">{product.stars}</span>)
              </div>
            </div>
          ))}
        </div>
        <div className='trend-arrowposition'>
          <div className={`trend-arrow-button ${canShowPrev ? '' : 'disabled'}`} onClick={canShowPrev ? handlePrevClick : null}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className={`trend-arrow-button ${canShowNext ? '' : 'disabled'}`} onClick={canShowNext ? handleNextClick : null}>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
