import "./Block.css"

import Hero from "./Hero/Hero"

function Block({type, content}) {
    switch (type) {
        case "hero" :
            return(
                <>
                    <Hero content={content}/>
                </>
            );
        default :
            return null;
    }
}

export default Block;