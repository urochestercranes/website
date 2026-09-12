import Block from "../components/Block"

import "./Page.css"


function Page({page}) {
    return (
        <div className="page">
            {page.blocks.map((block) => {
                    return <Block type={block.type} content={block.content}/>
                })
            }
        </div>
    )
}

export default Page;

