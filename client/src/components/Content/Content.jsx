import "./Content.css"

function Content({content}) {

    const hasImage = Boolean(content.imgURL)

    const imageElement = hasImage ? 
            <div className="image-container">
                <img className="content-image" src={content.imgURL}/>
            </div>
            : null;

    return (
        <div className="content">
            <div className="text-container">
                <h2>{content.title}</h2>
                <p>{content.content}</p>
            </div>
            {imageElement}
        </div>
    )
}

export default Content;