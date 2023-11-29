// imgs.js
import React, { useState } from 'react';
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const adventure = [
    {
      id: 21,
      image: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA139J?ver=e9e5&w=328&h=412&q=80&m=6&f=jpg',
      title: 'Camping',
      logo: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA137E?ver=44e9&m=6',
    },
    {
      id: 22,
      image: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA1393?ver=822a&w=328&h=412&q=99&m=6&f=jpg',
      title: 'Cycling',
      logo: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA1382?ver=b295&m=6',
    },
    {
      id: 23,
      image: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA139M?ver=215b&w=328&h=412&q=80&m=6&f=jpg',
      title: 'Swimming',
      logo: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA137K?ver=f891&m=6',
    },
    {
      id: 24,
      image: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA139o?ver=3df9&w=328&h=412&q=80&m=6&f=jpg',
      title: 'Climbing',
      logo: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA137H?ver=45c5&m=6',
    },
    {
      id: 25,
      image: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA1399?ver=865c&w=328&h=412&q=80&m=6&f=jpg',
      title: 'Yoga',
      logo: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA137N?ver=0586&m=6',
    },
    {
      id: 26,
      image: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA1396?ver=b5db&w=315&h=412&q=80&m=6&f=jpg',
      title: 'Snowboarding',
      logo: 'https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA1382?ver=b295&m=6',
    }

  ];

  const handleNext = () => {
    if (currentIndex < adventure.length - 4) {
        setCurrentIndex(currentIndex + 1);
    }
};


const handlePrev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
    }
};
return (
    <>
        <div className="work-container">
            <div disabled contentEditable="false" style={{position: 'relative', top: '50px' }}>
                <p style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '72px' }}>
                        <strong>what's your next</strong>
                    </span>
                </p>
                <p style={{ textAlign: 'center', position: 'relative', left: '65px', bottom: '75px' }}>
                    <em style={{ fontFamily: 'Comic Sans Ms, Cursive;', fontSize: '90px', fontWeight: '80rem', fontStyle: 'italic' }}>
                        <span style={{ color: '#0066ff' }}>&nbsp;adventure?</span>
                    </em>
                </p>
            </div>

            <div className="img-slider">
                <ul className="img-list" style={{ transform: `translateX(${-currentIndex * 25}%)` }}>
                    {adventure.slice(currentIndex, currentIndex + 4).map((activity) => (
                        <li key={activity.id} className='work-list-items'>
                            <a className='adventure-work-item' href="/">
                                <div className='img-container'>
                                    <div className='background-images' style={{ backgroundImage: `url(${activity.image})`}}></div>
                                    <div className='logo-container'>
                                        <h1>{activity.title}</h1>
                                        <picture className='bg-image'>
                                            <img src={activity.logo} alt={activity.logo} />
                                        </picture>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            <div className="navigation-buttons">
                <button className='prev-angle' onClick={handlePrev} disabled={currentIndex === 0}>
                <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button className='next-angle' onClick={handleNext} disabled={currentIndex >= adventure.length - 4}>
                <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
            </div>
        </div>
    </>
)
}


export default Cards;