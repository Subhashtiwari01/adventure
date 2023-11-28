import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const productData = [
  {
    img: 1,
    name: 'Kiama Classic Surfboard',
    price: '$19.99',
    stars: 3,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72100-Calm-7%276%5E_000_001.png&fallback=/Products/72100_000_001.png&w=288&h=308&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 2,
    name: 'Mindy Print Swimsuit',
    price: '$29.99',
    stars: 2,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73513_000_001.png&fallback=/Products/73513_000_001.png&w=288&h=308&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 3,
    name: 'Tomeq Snorkel Package',
    price: '$39.99',
    stars: 4,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73307-Denim-M_000_001.png&fallback=/Products/73307_000_001.png&w=288&h=308&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 4,
    name: 'Paltoni Sandals',
    price: '$49.99',
    stars: 5,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73202_000_001.png&fallback=/Products/73202_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true',
  },
];

export default function Product() {
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
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72100-Calm-7%276%5E_000_001.png&fallback=/Products/72100_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick2 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72100-Mantis-7%276%5E_000_001.png&fallback=/Products/72100_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick3 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72100-Picton%20Blu-7%276%5E_000_001.png&fallback=/Products/72100_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };

  // image3
  const handleButtonClick3_1 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73307_000_001.png&fallback=/Products/73307_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick3_2 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73307-Screamin%20G-M_000_001.png&fallback=/Products/73307_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick3_3 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73307-Red-M_000_001.png&fallback=/Products/73307_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); 
  };
  const handleButtonClick4_1 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73202-Anakiwa-Pr-10_000_001.png&fallback=/Products/73202_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); 
  };
  const handleButtonClick4_2 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73202-LavenderRo-10_000_001.png&fallback=/Products/73202_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick2_1 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73513_000_001.png&fallback=/Products/73513_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true';
    setProductDataState(updatedProductData); // Update state with the modified product data
  };



  const canShowNext = currentIndex < productDataState.length - 3;
  const canShowPrev = currentIndex > 0;

  return (
    <div className='Main'>
      <div className='productmain'>
        <h1 className='productgear'>Get the gear</h1>
      </div>
      <div className="card-container">
        <div className="card-strip">
          {productDataState.slice(currentIndex, currentIndex + 3).map((product, index) => (
            <div
              key={index}
              className={`product-card ${currentIndex === index ? 'active' : ''} ${currentIndex + 1 === index ? 'next' : ''}`}
            >
              <div className="image-container">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-image"
                />
                {product.img === 1 && (
                  <div className='custom-button-mindy'>
                    <button className="custom-button-mindy1" onClick={() => handleButtonClick1(index)}>
                    </button>
                    <button className="custom-button-mindy2 " onClick={() => handleButtonClick2(index)}>
                    </button>
                    <button className="custom-button-mindy3" onClick={() =>handleButtonClick3(index)}>
                    </button>
                  </div>
                )}
                {product.img === 2 && (
                  <>
                    <button className="custom-button-mindy2_1" onClick={() => handleButtonClick2_1(index)}>
                    </button>
                   
                  </>
                )}
                {product.img === 3 && (
                  <>
                    <button className="custom-button-mindy3_1" onClick={() => handleButtonClick3_1(index)}>
                    </button>
                    <button className="custom-button-mindy3_2" onClick={() => handleButtonClick3_2(index)}>
                    </button>
                    <button className="custom-button-mindy3_3" onClick={() => handleButtonClick3_3(index)}>
                    </button>
                  </>
                )}
                {product.img === 4 && (
                  <>
                    <button className="custom-button-mindy4_1" onClick={() => handleButtonClick4_1(index)}>
                    </button>
                    <button className="custom-button-mindy4_2" onClick={() => handleButtonClick4_2(index)}>
                    </button>
                  </>
                )}
              </div>
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="product-price">{product.price}</div>
                <span className="stars">
                  {[...Array(product.stars)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </span>
                (<span className="value">{product.stars}</span>)
              </div>
            </div>
          ))}
        </div>
        <div className='arrowposition'>
          <div className={`arrow-button ${canShowPrev ? '' : 'disabled'}`} onClick={canShowPrev ? handlePrevClick : null}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className={`arrow-button ${canShowNext ? '' : 'disabled'}`} onClick={canShowNext ? handleNextClick : null}>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
