import "./Block.css"

import Hero from "./Hero/Hero"
import Grid from "./Grid/Grid"

function Block({type, content}) {
    switch (type) {
        case "hero" :
            return(
                <>
                    <Hero content={content}/>
                </>
            );
        case "grid" :
            return (
                <>
                    <Grid content={content}/>
                </>
            )
        default :
            return null;
    }
}

export default Block;