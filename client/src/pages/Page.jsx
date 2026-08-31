import Block from "../components/Block"

function Page({page}) {
    console.log(page);
    return (
        <>
            {page.blocks.map((block) => {
                    return <Block type={block.type} content={block.content}/>
                })
            }
        </>
    )
}

export default Page;

