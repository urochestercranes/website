import "./Image.css"

function Image ({content}) {
    return (
        <div className="photo-container">
            <img src={content.img}></img>
        </div>
    )
}

export default Image;