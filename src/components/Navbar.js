import '../App.css';
export default function Navbar(){
    const contact = "Get in touch";
    return(
        <div>
            <div className="rectangle"></div>
            <header className="header">
                <nav className="flex headerNav">
                    <a href='#'><object className='headerSVG' data="./images/logo svg.svg" alt="logo"></object></a>
                    <ul className='flex headerList no-bullets'>
                        <li><a className='no-underline' href="#">Home</a></li>
                        <li><a className='no-underline' href="#">About us</a></li>
                        <li><a className='no-underline' href="#">Contact</a></li>
                        <li><a className='no-underline' href="#">Services</a></li>
                    </ul>
                </nav>
                <div className='get-in-touch relative'>{contact}</div>
            </header>
           

        </div>
    )
}