import "./List.css"

function List({ content, inverted = false }) {
    let linkClass = inverted ? "footer-link" : "";
    return (
        <>
            <div className="list">
                <h2>{content.title}</h2>
                <ul>
                    {content.items.map((item) => {
                        return(
                        <li>
                            {/* add item icon here */}
                            {item.link && (<a className={linkClass} href={item.link} target="_blank" rel="noreferrer">{item.text}</a>)}
                            {!item.link && <p className={linkClass}>{item.text}</p>}
                        </li>
                    );
                    })}
                </ul>
            </div>
        </>
    )
}

export default List;