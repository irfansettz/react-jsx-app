// *assets
import logo from '../../assets/img/logo-ALTA@2x.png'

// *lib
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = [{
            id: 1,
            path: '/',
            text: 'Home',
        },
        {
            id: 2,
            path: '/about',
            text: 'About',
        },
        {
            id: 3,
            path: '/contact',
            text: 'Contact',
        },
    ];
    // *state
    const [navState, navStateSet] = useState([
        {
            id: 1,
            value: true
        },
        {
            id: 2,
            value: false
        },
        {
            id: 3,
            value: false
        }
    ]);

    // *handler
    const setNav = (int) => {
        console.log(int);
        let nav = [...navState];
        let newNav = nav.map((i,v) => {
            if (i.id === int) {
                return {id: i.id, value: true};
            } else {
                return {id: i.id, value: false};
            }
        })
        navStateSet(newNav);
    }
    return (
        <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="alterra">
              <a href="index.html"><img className="logo-atas" src={logo} alt="logo-altera"/></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="row align-items-center navig">
                {
                    links.map((link) => (
                        <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right" key={link.id}>
                            <NavLink to={link.path} className={navState.find((item) => item.id === link.id && item.value)? "aktif":"" } onClick={() => setNav(link.id)} > {link.text}</NavLink>
                        </div>
                    ))
                }
            </div>
          </div>    
        </div>
      </div> 
    );
}

export default Navbar;