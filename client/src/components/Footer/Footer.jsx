import "./Footer.css"
import List from "../List/List"

function Footer({content}) {
    console.log(content);
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className= "main-text">
                    <p>Want to get involved?</p>
                    <p>Join our CCC List/Newsletter!</p>
                    <form className="subscribe-form">
                        <input
                            type="email"
                            placeholder="example@mail.com"
                            aria-label="Email address"
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                <div className="main-text">
                    <List content={content.contactItems}></List>
                </div>
            </div>
        </footer>
    )
}

export default Footer;