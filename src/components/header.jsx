import { useState } from 'react';
import imgLogo from './../assets/logos/ready_go-logo-rmbg-perso.png'


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuItems = [
        {
            link: "#servicios",
            title: "Servicios"
        },
        {
            link: "#proceso",
            title: "Proceso"
        },
        {
            link: "#porque-nosotros",
            title: "¿Por qué Nosotros?"
        },
        {
            link: "#proyectos",
            title: "Proyectos"
        },
        {
            link: "#contacto",
            title: "Contacto"
        }
    ];
    return (
        <header className="fixed w-full top-0 z-50 bg-primary/90 backdrop-blur-sm border-b border-gray-800">
            <nav className="max-w-6xl mx-auto px-4 py-4" >
                <div className="flex items-center justify-between pl-4 md:pl-1">
                    <a href="#hero"
                        className="flex gap-4 justify-center items-center text-[27px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-15% to-90% from-cyan-400/90 to-purple-400/75" onClick={() => setIsMenuOpen(false)}>
                        <img src={imgLogo} alt="ready go" className='max-h-10 w-auto' />
                        Ready Go
                    </a>

                    <ul className="hidden md:flex md:space-x-4 lg:space-x-8">
                        {
                            menuItems.map((item, i) => {
                                return (
                                    <li key={i}>
                                        <a href={item.link} className="font-semibold tracking-wide border-0 hover:text-accent hover:border-b-2 border-accent border- transition-all focus:text-accent">{item.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <button className="md:hidden text-sky-500 pr-4" onClick={toggleMenu} aria-label="Toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden ${isMenuOpen ? 'block opacity-100' : 'hidden opacity-0'} transition-all duration-200 ease-in-out`}>
                    <ul className="flex flex-col justify-center items-center pt-4 pb-3 space-y-3">
                        {menuItems.map((item) => (
                            <li key={item.link}>
                                <a
                                    href={item.link}
                                    className="block hover:text-accent transition duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;