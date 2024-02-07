import '../App.css';
export default function Navbar(){
    const contact = "Get in touch";
    return(
        <section className='display-animate'>
            <div className="rectangle"></div>
            <header className="header">
                <nav className="flex headerNav">
                    <div className='width-60'>
                    <a id="header-nav-a-svg" href='#'><object className='headerSVG' data="./images/logo svg.svg" alt="logo"></object></a>
                    </div>
                    <div className='width-40'>
                    <ul className='flex headerList no-bullets'>
                        <li><a className='no-underline bold' href="#">Home</a></li>
                        <li><a className='no-underline bold' href="#">About us</a></li>
                        <li><a className='no-underline bold' href="#">Contact</a></li>
                        <li><a className='no-underline bold' href="#">Services</a></li>
                    </ul>

                    </div>
                </nav>
                <div className='get-in-touch relative white-text'>{contact}</div>
            </header>
           

        </section>
    )
}