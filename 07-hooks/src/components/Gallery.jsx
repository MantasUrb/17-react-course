import React, { useState, useEffect } from "react";
import API from '../shared/lorempicsum';

const Gallery = () => {

    const [galleryState, setGalleryState] = useState([]);

    useEffect(() => {
        console.log("request to server");
        API.get(``)
            .then(response => {
                setGalleryState(response.data);
            })
    }, []);

    function imageSortAToZ () {
        const imagesSortAToZ = [...galleryState].sort(function(a, b) {
                if (a.author < b.author) {return -1}
                if (a.author > b.author) {return 1}
                return 0
            })
            return imagesSortAToZ;
    }

    function imageSortZToA () {
        const imageSortZToA = [...galleryState].sort(function(a, b) {
                if (a.author > b.author) {return -1}
                if (a.author < b.author) {return 1}
                return 0
            })
            return imageSortZToA;
    }

    function imageRandom () {
        const imageRandom = [...galleryState].sort(function(a) {
                return (Math.random(a.id) > .5) ? 1 : -1
            })
            return imageRandom;
    }

    const handleSortAToZ = () => {
        setGalleryState(imageSortAToZ);
    }
    const handleSortZToA = () => {
        setGalleryState(imageSortZToA);
    }
    const handleRandomize = () => {
        setGalleryState(imageRandom);
    }

    return (
        <div className="container hero">
            <div className="row buttons">
                <button className="my-button"
                        onClick={handleSortAToZ}>
                            Sort A to Z by Author
                </button>
                <button className="my-button"
                        onClick={handleRandomize}>
                            Randomize
                </button>
                <button className="my-button"
                        onClick={handleSortZToA}>
                            Sort Z to A by Author
                </button>

            </div>
            <div className="row hero-row">
                {galleryState.map(data =>
                        <div key={data.id} className="image">
                            <a href={data.download_url}>
                                <img src={data.download_url} alt={data.author}/>
                            </a>
                        </div>
                    )
                }
            </div>
      </div>
    )
}

export default Gallery;