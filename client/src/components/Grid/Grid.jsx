import Block from "../Block"

import "./Grid.css"

function Grid({ content }) {
    return (
        <section className="grid">
            <div className="grid-main" style={{
                    gridTemplateColumns: `repeat(${content.columns}, 1fr)`,
                    gridTemplateRows: `repeat(${content.rows}, 1fr)`,
                }}>

                {content.blocks.map((block) =>{
                    return <Block type={block.type} content={block.content}/>
                })}
            </div>
        </section>
    )
};

export default Grid;