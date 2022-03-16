const GalleryButtons = (props) => {
    return (
        <div className="row buttons">
        <button className="my-button"
                onClick={props.handleSortAToZ}>
                    Sort A to Z by Author
        </button>
        <button className="my-button"
                onClick={props.handleRandomize}>
                    Randomize
        </button>
        <button className="my-button"
                onClick={props.handleSortZToA}>
                    Sort Z to A by Author
        </button>
    </div>
    )
}

export default GalleryButtons;