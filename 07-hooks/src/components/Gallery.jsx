import React, { useState, useEffect } from "react";
import API from '../shared/lorempicsum';
import GalleryButtons from "./GalleryButtons";
// import GalleryButtons from "./GalleryButtons";

const Gallery = () => {

    const [galleryState, setGalleryState] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
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

            <GalleryButtons
                handleSortAToZ={handleSortAToZ}
                handleRandomize={handleRandomize}
                handleSortZToA={handleSortZToA}
            />

            <div className="row hero-row">
                {galleryState.map(data =>
                        <div key={data.id} className="image">
                            {loaded ? null : (<h5>Image Loading...</h5>)}
                            <a href={data.download_url}>
                                <img
                                    onLoad={() => setLoaded(true)}
                                    style={loaded ? {} : { visibility: 'hidden' }}
                                    src={data.download_url} 
                                    alt={data.author}/>
                            </a>
                        </div>
                    )
                }
            </div>

      </div>
        )
}

export default Gallery;