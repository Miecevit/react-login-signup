import React from 'react';
import ReactDOM from 'react-dom/client';

import NavList from './NavList';
import Sol from './Sol';
import Sss from './Sss';
import Giris_form from './Giris_form';
import Kayit_form from './Kayit_form';

var isLogin = sessionStorage.getItem("isLogin");

if(isLogin == "true"){
  sessionStorage.setItem("isLogin","false");
}

function logout() {

  var isLogin = sessionStorage.getItem("isLogin");

  isLogin = false;

  sessionStorage.setItem("isLogin", isLogin);
  document.getElementById("logout_Btn").style.display = "none";
  document.getElementById("btn_div").style.display = "block";
  document.getElementById("header_sag").innerHTML = "";

}




const menu_eleman = ["Eğitimler", "Hemen Başvur", "S.S.S.", "Hakkımızda"];

const basliklar = ["Yüzyüze Verilecek Olan Eğitimler", "Başvur", "Sıkça Sorulan Sorular"];

const icerikler = ["450 saat akademik eğitim 50 saat kariyer eğitimi olmak üzere toplam 500 saat eğitim verilmektedir. Eğitimler 20 kişilik sınıflarda sabah ve akşam grubu şeklinde günde 7 saat toplamda 72 gün sürmektedir. Eğitimler Fenerbahçe Üniversitesi Ataşehir yerleşkesi ve Kadir Has Üniversitesi’nde verilmektedir."];

const sorular = ["Başvuru süreci nasıl işliyor?", "Başruvu tarihini kaçırmam durumunda ne yapmalıyım?", "Başvurabileceğim not ortalamam kaç olmalıdır?"];

const cevaplar = ["Gayet iyi işliyor", "Hiçbir şey yapamazsın", "En az 3"];

const goster = (eleman, eleman_index) => {

  const sol = ReactDOM.createRoot(document.getElementById("sol"));
  const sag = ReactDOM.createRoot(document.getElementById("sag"));

  if(eleman == "Eğitimler"){
    sol.render(
      <Sol 
        baslik = {basliklar[eleman_index]} 
        icerik = {icerikler[eleman_index]} 
      /> 
    )

  }
  else if(eleman == "Hemen Başvur"){
    sag.render(

    )
  }
  else if(eleman == "S.S.S."){
    sol.render(
      <>
      <h1>{basliklar[eleman_index]}</h1>

      {sorular.map((Q, soru_index) =>   
        (<Sss
            soru={Q} 
            cevap={cevaplar[soru_index]}
        />)
        )}
      </>
    )
  }
  else if(eleman == "giris"){
    sag.render(
      <Giris_form />
    )
  }
  else if(eleman == "kayit"){
    sag.render(
      <Kayit_form />
    )
  }
      
  
}




const Header = () => {
  return (
    <>
    <header className="p-3 bg-dark text-white">
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
    </header>
    </>
  );
};


export default Header;