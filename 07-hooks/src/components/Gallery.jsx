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

    function imageSort() {
        const imagesSorted = [...galleryState].sort(function(a, b) {
                if (a.author < b.author) {return -1}
                if (a.author > b.author) {return 1}
                return 0
            })
            return imagesSorted;
    }

    const handleSort = () => {
        const image = imageSort();
        setGalleryState(image);
        return image;
    }

    return (
        <div className="container hero">
            <div className="row buttons">
                <button className="my-button"
                        onClick={handleSort}>
                            Sort A to Z by Author
                </button>
            </div>
            <div className="row hero-row">
                {galleryState.map((data) =>
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