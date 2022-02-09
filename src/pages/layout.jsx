import { Outlet, Link } from "react-router-dom";
import Logo from '../Files/Images/logo.png'

const Layout = () => {
    return (
        <>
            <header className='sticky-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col col-sm-2'>
                            <a href='/' title='logo'>
                                <img src={Logo} alt="Logo" />
                            </a>
                        </div>
                        <div className='col col-sm-7'>
                            <nav className='h-100 d-flex justify-content-center'>
                                <ul className='align-items-center'>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/albums">Albums</Link>
                                    </li>
                                    <li>
                                        <Link to="/favourites">Favourites</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='col col-sm-3 d-flex align-items-center justify-content-end'>
                            <a href='tel:+359883378679' className='hd-phone'><i className="bi bi-telephone"></i> +359 883378679</a>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </>
    )
};

export default Layout;