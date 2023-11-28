import React from 'react';
import './GrandCollection.css'; // Import your CSS file

export default function GrandCollection() {
    const handleInput=()=>{
        console.log();
    }
        
        

    return (
        <div className='main-img'>
            <div className='img-src'>
                <img
                    src='https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA3jvY?ver=a792&w=0&h=0&q=80&m=6&f=jpg'
                    alt='pic'
                    className='background-image'
                />
                <div className='text-container'>
                    <h1>Grand coast Collection</h1>
                    <p className="additional-text">Pro Surfer | Read Her Story</p>
                    <button onClick={()=>handleInput}>Click me</button>
                </div>
            </div>
        </div>  
    );
}
