import "./List.css"

function List({ content }) {
    return (
        <>
            <div className="list">
                <h2>{content.title}</h2>
                <ul>
                    {content.items.map((item) => {
                        return(
                        <li>
                            {/* add item icon here */}
                            {item.text} 
                            {item.link && (<a href={item.link} target="_blank" rel="noreferrer">{item.linkText}</a>)}
                        </li>
                    );
                    })}
                </ul>
            </div>
        </>
    )
}

export default List;