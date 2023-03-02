import React from 'react';
import NavList from './NavList';

import {logout} from './Functions';
import {goster} from './Functions';

import { menu_eleman } from './Icerik';

var isLogin = sessionStorage.getItem("isLogin");

if(isLogin == "true"){
  sessionStorage.setItem("isLogin","false");
}


const Header = () => {
  return (
    <>
    <div className="p-3 bg-dark text-white">
      <div className="container bg-dark text-white">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="#" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <i className="fa-solid fa-compass-drafting fa-2xl"></i>
          </a>


          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

          {menu_eleman.map((eleman, index) => 
                    (<NavList 
                        menuElemani={eleman} 
                        tiklandiginda={() => goster(eleman, index)} 
                    />)
                    )}

          </ul>


          


          <div className="text-end" id="header_sag">
          </div>
            <div id="btn_div">
              <a href="#"><button 
                              type="button" 
                              className="btn btn-outline-light me-2" 
                              onClick={() => goster("giris")}
                              >
                                Giriş
                              </button>
                              </a>
              <a href="#"><button 
                              type="button" 
                              className="btn btn-warning" 
                              onClick={() => goster("kayit")}
                              >
                                Kayıt Ol
                              </button>
                              </a>
            </div>
          


          <div className="text-end">
            <button 
                    id="logout_Btn" 
                    type="button" 
                    className="btn btn-danger" 
                    style={{ display: 'none' }} 
                    onClick={() => logout()} 
                    >
                      Çıkış
                      </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


export default Header;