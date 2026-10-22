import "./Block.css"

import Hero from "./Hero/Hero"
import Grid from "./Grid/Grid"
import List from "./List/List"
import Image from "./Image/Image"
import Content from "./Content/Content"

function Block({type, content}) {
    let element = <></>;
    switch (type) {
        case "hero" :
            element = <Hero content={content}/>;
            break;
        case "grid" :
            element = <Grid content={content}/>;
            break;
        case "list" :
            element = <List content={content}/>;
            break;
        case "image" :
            element = <Image content={content}/>;
            break;
        case "content" :
            element = <Content content={content}/>;
            break;
        default :
            element = null;
    }

    return (
        <div className="block">
            {element}
        </div>
    );
}

export default Block;