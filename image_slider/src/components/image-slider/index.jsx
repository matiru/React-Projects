import React, { useState,useEffect } from "react";
import{BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs";
import "./styles.css";








function ImageSlider( {url,page =1 ,limit=5}) {


    const [images, setImages] = useState([]);
    const[currrentSlide,setCurrentSlide] = useState(0);
    const[errorMsg,setErrorMsg] = useState(null);
    const[loading,setLoading] = useState(false);


async function fetchImages(getUrl) {
    try{
        setLoading(true);
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const data = await response.json();
        if (data){
          setImages(data);
          setLoading(false);
        }

    }
    catch(e){
        setErrorMsg(e.message)
        setLoading(false);
    }}

useEffect(() => {
    if (url !== "" )fetchImages();
}, [url]);

console.log(images);

if (loading) {
    return <div>Loading data ! please wait ...</div>;
    }
if (errorMsg !== null) {
    return <div>Something went wrong: {errorMsg}</div>;
    }



function handlePrevious() {
    setCurrentSlide(currrentSlide === 0 ? images.length - 1 : currrentSlide - 1);
}
function handleNext() {
    setCurrentSlide(currrentSlide === images.length - 1 ? 0 : currrentSlide + 1);
}




    return (
      <div className="container">

      <BsArrowLeftCircleFill onClick = {handlePrevious}
       className="arrow arrow-left"/>
      {
        images && images.length ?
        images.map((imageItem,index) => (
            <img
            key={imageItem.id}
            alt = {imageItem.download_url}
            src = {imageItem.download_url}
            className={currrentSlide === index ? "current-image" : "current-image hide-current-image" }
            />
        )) : null}
        <BsArrowRightCircleFill onClick = {handleNext} 
         className="arrow arrow-right"/>
        <span className="circle-indicators">
            {
                images && images.length ?
                images.map((_,index) => (<button
                key = {index}
                className={currrentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
               
               onClick = {() => setCurrentSlide(index)}
               ></button>
            
              
                 ) ) : null
            }
        </span>
      </div>
    );
  }
  
  export default ImageSlider;
  