import React, { useState, useEffect } from "react";
import API from '../shared/lorempicsum';

const Gallery = () => {

    const [galleryState, setGalleryState] = useState([]);

    useEffect(() => {
        console.log("request to server");
        API.get(``)
            .then(response => {
                console.log(response.data)
                setGalleryState(response.data);
            })
    }, []);

    return (
        <div className="container hero">
            <div className="row buttons">
                <button className="my-button">Sort A to Z by Author</button>
                <button className="my-button">Randomize</button>
                <button className="my-button">Sort Z to A by Author</button>
            </div>
            <div className="row hero-row">
                {galleryState
                    .map(picture =>
                        <div key={picture.id} className="image">
                            <a href={picture.download_url}>
                                <img src={picture.download_url} alt={picture.author}/>
                            </a>
                        </div>
                    )
                }
            </div>
      </div>
    )

}

export default Gallery;