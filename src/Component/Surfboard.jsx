import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import './Surfboard.css';

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
    name: 'Kalbar Surfboard',
    price: '$29.99',
    stars: 2,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72101_000_001.png&fallback=/Products/72101_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 3,
    name: 'Sunnox Surfboard',
    price: '$39.99',
    stars: 4,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72103_000_001.png&fallback=/Products/72103_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 4,
    name: 'Yamba Surfboard',
    price: '$49.99',
    stars: 5,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72104-Lochmara-6%272%5E_000_001.png&fallback=/Products/72104_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 5,
    name: 'Noosa Surfboard',
    price: '$49.99',
    stars: 5,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72105_000_001.png&fallback=/Products/72105_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 6,
    name: 'Montau Turtle Surfboard',
    price: '$49.99',
    stars: 5,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72106-PictonBlue-5%2711%5E_000_001.png&fallback=/Products/72106_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true',
  },

  {
    img: 7,
    name: 'Bundor Surfboard',
    price: '$49.99',
    stars: 5,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72107-AbbeyAthGr-6%27_000_001.png&fallback=/Products/72107_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  {
    img: 8,
    name: 'Bondi Twin Surfboard',
    price: '$49.99',
    stars: 5,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72108-Cararra-5%2711%5E_000_001.png&fallback=/Products/72108_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true',
  },  {
    img: 9,
    name: 'Teapo Rainbow Surfboard',
    price: '$49.99',
    stars: 5,
    imageUrl: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72109-Picton%20Blu-6%274%5E_000_001.png&fallback=/Products/72109_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true',
  },
  
 
];


export default function Product() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productDataState, setProductDataState] = useState(productData);
  const [sethandleclick] = useState('');

  const handleclickshop = () => {
    sethandleclick(console.log('button clicked'));
  };

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
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72103_000_001.png&fallback=/Products/72103_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };

  const handleButtonClick4_1 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72104-Lochmara-6%272%5E_000_001.png&fallback=/Products/72104_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); 
  };
  const handleButtonClick4_2 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72104-Cornflower-6%272%5E_000_001.png&fallback=/Products/72104_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick4_3 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72104-Grape-6%272%5E_000_001.png&fallback=/Products/72104_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick2_1 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72101-Canary-7%276%5E_000_001.png&fallback=/Products/72101_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true';
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick2_2 = (productIndex) => {
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72101-Lima-7%276%5E_000_001.png&fallback=/Products/72101_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data
  };
  const handleButtonClick5_1=(productIndex)=>{
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72105_000_001.png&fallback=/Products/72105_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data

  };
  const handleButtonClick5_2=(productIndex)=>{
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72105-BlossomPri-8%27_000_001.png&fallback=/Products/72105_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data

  };
  const handleButtonClick6_1=(productIndex)=>{
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72106-DenimSungl-5%2711%5E_000_001.png&fallback=/Products/72106_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data

  };
  const handleButtonClick6_2=(productIndex)=>{
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72106-PictonBlue-5%2711%5E_000_001.png&fallback=/Products/72106_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data

  };
  const handleButtonClick7_1=(productIndex)=>{
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72107-AbbeyAthGr-6%27_000_001.png&fallback=/Products/72107_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data

  };
  const handleButtonClick8_1=(productIndex)=>{
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72108_000_001.png&fallback=/Products/72108_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data

  };
  const handleButtonClick9_1=(productIndex)=>{
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72109-Cruise-6%274%5E_000_001.png&fallback=/Products/72109_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data

  };
  const handleButtonClick9_2=(productIndex)=>{
    const updatedProductData = [...productDataState];
    updatedProductData[currentIndex + productIndex].imageUrl = 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/search?fileName=/Products%2F72109_000_001.png&fallback=/Products/72109_000_001.png&w=275&h=275&q=80&m=6&f=jpg&cropfocalregion=true'; // Replace with your new image URL
    setProductDataState(updatedProductData); // Update state with the modified product data

  };
  




  const canShowNext = currentIndex < productDataState.length - 2;
  const canShowPrev = currentIndex > 0;

  return (
    <div className='surf-Main'>


  
      <div className="Surf-card-container">
        <div className="surf-card-strip">
          {productDataState.slice(currentIndex, currentIndex + 2).map((product, index) => (
            <div
              key={index}
              className={`surf-product-card ${currentIndex === index ? 'active' : ''} ${currentIndex + 1 === index ? 'next' : ''}`}
            >
              <div className="image-container">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="surf-product-image"
                />
                {product.img === 1 && (
                  <div className='surf-custom-button-mindy'>
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
                    <button className="custom-button-mindy2_2" onClick={() => handleButtonClick2_2(index)}>
                    </button>
                   
                  </>
                )}
                {product.img === 3 && (
                  <>
                    <button className="custom-button-mindy3_1" onClick={() => handleButtonClick3_1(index)}>
                    </button>
                  </>
                )}
                {product.img === 4 && (
                  <>
                    <button className="custom-button-mindy4_1" onClick={() => handleButtonClick4_1(index)}>
                    </button>
                    <button className="custom-button-mindy4_2" onClick={() => handleButtonClick4_2(index)}>
                    </button>
                    <button className="custom-button-mindy4_3" onClick={() => handleButtonClick4_3(index)}>
                    </button>
                  </>
                )}
                {
                    product.img===5 &&(
                        <>
                        <button className='custom-button-mindy5_1' onClick={()=>handleButtonClick5_1(index)}></button>
                        <button className='custom-button-mindy5_2' onClick={()=>handleButtonClick5_2(index)}></button>
                        </>
                    )
                }
                                {
                    product.img===6 &&(
                        <>
                        <button className='custom-button-mindy6_1' onClick={()=>handleButtonClick6_1(index)}></button>
                        <button className='custom-button-mindy6_2' onClick={()=>handleButtonClick6_2(index)}></button>
                        </>
                    )
                }
                {product.img === 7 && (
                  <>
                    <button className="custom-button-mindy7_1" onClick={() => handleButtonClick7_1(index)}>
                    </button>
                  </>
                )}
                {product.img === 8 && (
                  <>
                    <button className="custom-button-mindy8_1" onClick={() => handleButtonClick8_1(index)}>
                    </button>
                  </>
                )}
                {product.img === 9 && (
                  <>
                    <button className="custom-button-mindy9_1" onClick={() => handleButtonClick9_1(index)}>
                    </button>
                    <button className="custom-button-mindy9_2" onClick={() => handleButtonClick9_2(index)}>
                    </button>
                    
                  </>
                )}
              </div>
              <div className="surf-product-info">
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
        <div className='surf-arrowposition'>
          <div className={`arrow-button ${canShowPrev ? '' : 'disabled'}`} onClick={canShowPrev ? handlePrevClick : null}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className={`surf-arrow-button ${canShowNext ? '' : 'disabled'}`} onClick={canShowNext ? handleNextClick : null}>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
      <div className='surf-Content-img '>
        <h2>EcoWorks Surf</h2>
        <p>Our EcoWorks line uses 100% renewable or recycled materials. We want you to feel adventure-ready and confident that your purchase will make a lasting impact.</p>
     <button className='shop-ecoworks' onClick={()=>handleclickshop} >SHOP ECOWORKS</button>
      </div>
    </div>
  );
}
