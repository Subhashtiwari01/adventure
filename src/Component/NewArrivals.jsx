import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import './NewArrivals.css';

const productData = [
  {
    img: 1,
    name: 'Yamba Surfboard',
    price: '$850.00',
    stars: 3,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72104-Lochmara-6%272%5E_000_001.png&fallback=/Products/72104_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 2,
    name: 'Lentu Snadals',
    price: '$55.0',
    stars: 2,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73201-Deep%20Blush-10_000_001.png&fallback=/Products/73201_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 3,
    name: 'Tropez Print Swimsuit',
    price: '$60.0',
    stars: 4,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73512_000_001.png&fallback=/Products/73512_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 4,
    name: 'Ignis Cooking System',
    price: '$49.99',
    stars: 5,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F65100_000_001.png&fallback=/Products/65100_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 5,
    name: 'Paltoni Sandals',
    price: '$49.99',
    stars: 5,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F69103_000_001.png&fallback=/Products/69103_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 6,
    name: 'Paltoni Sandals',
    price: '$49.99',
    stars: 5,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F65502_000_001.png&fallback=/Products/65502_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 7,
    name: 'Paltoni Sandals',
    price: '$49.99',
    stars: 5,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F65607_000_001.png&fallback=/Products/65607_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true',
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
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72104-Lochmara-6%272%5E_000_001.png&fallback=/Products/72104_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick2 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72104-Cornflower-6%272%5E_000_001.png&fallback=/Products/72104_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick2_1 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73201-Deep%20Blush-10_000_001.png&fallback=/Products/73201_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true';
    setProductDataState(updatedProductData); // Update state with the modified product data
  };

  const handleButtonClick2_2 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73201-Mantis-10_000_001.png&fallback=/Products/73201_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick2_3 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73201-Viking-10_000_001.png&fallback=/Products/73201_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };


  const handleButtonClick3 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72104-Grape-6%272%5E_000_001.png&fallback=/Products/72104_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };

  // image3
  const handleButtonClick3_1 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F73512_000_001.png&fallback=/Products/73512_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };

  const handleButtonClick4_1 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F65100_000_001.png&fallback=/Products/65100_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); 
  };
  const handleButtonClick4_2 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F65100%20%5E%20%20%5E%20%20%5E%20Merlin%20%5E_000_001.png&fallback=/Products/65100_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick5_1 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F69103_000_001.png&fallback=/Products/69103_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick6_1 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F65502_000_001.png&fallback=/Products/65502_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick6_2 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F65502-Kenyan%20Cop-Short_000_001.png&fallback=/Products/65502_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick7_1 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F65607%20%5E%20%20%5E%20%20%5E%20Cerulean%20%5E_000_001.png&fallback=/Products/65607_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick7_2 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F65607%20%5E%20%20%5E%20%20%5E%20Cinnabar%20%5E_000_001.png&fallback=/Products/65607_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick7_3 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F65607%20%5E%20%20%5E%20%20%5E%20Radical%20Re%20%5E_000_001.png&fallback=/Products/65607_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick7_4 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F65607%20%5E%20%20%5E%20%20%5E%20Shamrock%20%5E_000_001.png&fallback=/Products/65607_000_001.png&w=315&h=315&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };




  const canShowNext = currentIndex < productDataState.length - 4;
  const canShowPrev = currentIndex > 0;

  return (
    <div className='new-mainMain'>
      <div className='new-productmain'>
        <h1 className='new-productgear'>New Arrivals</h1>
      </div>
      <div className="new-card-container">
        <div className="new-card-strip">
          {productDataState.slice(currentIndex, currentIndex + 4).map((product, index) => (
            <div
              key={index}
              className={`new-product-card ${currentIndex === index ? 'active' : ''} ${currentIndex + 1 === index ? 'next' : ''}`}
            >
              <div className="new-image-container">
                <img style={{width:"250px"}}
                  src={product.imageUrl}
                  alt={product.name}
                  className="new-product-image"
                />
                {product.img === 1 && (

                  <div className='btn1-handle'>
                    <button className="new-custom-button1" onClick={() => handleButtonClick1(index)}>
                    </button>
                    <button className="new-custom-button2 " onClick={() => handleButtonClick2(index)}>
                    </button>
                    <button className="new-custom-button3" onClick={() =>handleButtonClick3(index)}>
                    </button>
                  </div>
                )}
              
                

                {product.img === 2 && (
                  <>
                  <div className='btn2-handle'>
                    <button className="new-custom-button2_1" onClick={() => handleButtonClick2_1(index)}>
                    </button>
                    <button className="new-custom-button2_2" onClick={() => handleButtonClick2_2(index)}>
                    </button>
                    <button className="new-custom-button2_3" onClick={() => handleButtonClick2_3(index)}>
                    </button>
                    </div>
                   
                  </>
                )}
              
                {product.img === 3 && (
                  <>
                  <div className='btn3-handle'>
                    <button className="new-custom-button3_1" onClick={() => handleButtonClick3_1(index)}>
                    </button>
                    </div>
  
                  </>
                )}
                {product.img === 4 && (
                  <>
                  <div className='btn4-handle'>
                    <button className="new-custom-button4_1" onClick={() => handleButtonClick4_1(index)}>
                    </button>
                    <button className="new-custom-button4_2" onClick={() => handleButtonClick4_2(index)}>
                    </button>
                    </div>
                  </>
                )}
                {product.img === 5 && (
                  <>
                  <div className='btn5-handle'>
                    <button className="new-custom-button5_1" onClick={() => handleButtonClick5_1(index)}>
                    </button>
                    </div>
  
                  </>
                )}
                {product.img === 6 && (
                  <>
                  <div className='btn6-handle'>
                    <button className="new-custom-button6_1" onClick={() => handleButtonClick6_1(index)}>
                    </button>
                    <button className="new-custom-button6_2" onClick={() => handleButtonClick6_2(index)}>
                    </button>
                    </div>
                  </>
                )}
                {product.img === 7 && (
                  <>
                  <div className='btn7-handle'>
                    <button className="new-custom-button7_1" onClick={() => handleButtonClick7_1(index)}>
                    </button>
                    <button className="new-custom-button7_2" onClick={() => handleButtonClick7_2(index)}>
                    </button>
                    <button className="new-custom-button7_3" onClick={() => handleButtonClick7_3(index)}>
                    </button>
                    <button className="new-custom-button7_4" onClick={() => handleButtonClick7_4(index)}>
                    </button>
                    </div>
                  </>
                )}
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
