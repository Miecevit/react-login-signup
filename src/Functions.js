import ReactDOM from 'react-dom/client';
import Sol from './Sol';
import Giris_form from './Giris_form';
import Kayit_form from './Kayit_form';
import Sss from './Sss';
import Basvur from './Basvur';
import Bilgi from './Bilgi';
import Info from './Info';

import {basliklar, icerikler, sorular, cevaplar, bilgi_baslik} from './Icerik';

 //GİRİŞ KONTROL
export const girisKontrol = () => {

    const sag = ReactDOM.createRoot(document.getElementById("sag"));

    var kullanici = sessionStorage.getItem("user");

    if(kullanici == null){
        sessionStorage.setItem("user","");
    }

    var isLogin = false;
        
    kullanici = sessionStorage.getItem("user");
    const kullanici_ayrik = kullanici.split(",");


    const mail = document.getElementById("email").value;
    const sifre = document.getElementById("sifre").value;

    const yazi = document.getElementById("sonuc");

    if (mail == kullanici_ayrik[0] && sifre == kullanici_ayrik[1]) {

        yazi.innerHTML = "Giriş bilgileri doğru! Yönlendiriliyorsunuz..."; 
        yazi.style.color = "green";

        document.getElementById("btn_div").style.display = "none";
        document.getElementById("header_sag").innerHTML = "Kullanıcı: " + kullanici_ayrik[0];

        isLogin = true;

        sessionStorage.setItem("isLogin", isLogin);

        document.getElementById("logout_Btn").style.display = "block";

        setTimeout(function() {
          sag.render(
            <Info />
          )
        },1500)
        

    }
    else {
        yazi.innerHTML = "Girilen bilgiler hatalı.";
        yazi.style.color = "red";
    }


}

//ÇIKIŞ KONTROL
export const logout = () => {

    var isLogin = sessionStorage.getItem("isLogin");
  
    isLogin = false;
  
    sessionStorage.setItem("isLogin", isLogin);
    document.getElementById("logout_Btn").style.display = "none";
    document.getElementById("btn_div").style.display = "block";
    document.getElementById("header_sag").innerHTML = "";
  
  }

  //GOSTER - RENDER
export const goster = (eleman, eleman_index) => {

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

      var isLogin = sessionStorage.getItem("isLogin");
      var user_info = sessionStorage.getItem("user_info");

      if(isLogin == "true"){
        if(user_info == null){
          sol.render(
            <Basvur btn_deger="Gönder" />
          )
        }else{
          sol.render(
            <Basvur btn_deger="Güncelle" />
          )
        }
        
      }
      else if(isLogin == "false"){
        alert("Başvuru formu görüntülenmeden önce giriş yapılmalıdır.");
        sag.render(
          <Giris_form />
        )
      }
      
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

  //FORM GÖNDER
  export const gonder = () => {

    var name = document.getElementById("inputName").value;
    var mail = document.getElementById("inputMail").value;
    var egitim = document.getElementById("egitim").value;
    var dogum = document.getElementById("dogum").value;

    var user_info = [name, mail, egitim, dogum];

    sessionStorage.setItem("user_info", user_info);

    alert("Bilgileriniz gönderilmiştir.");

  }
  //FORMA GÖNDERİLEN BİLGİLERİ GÖRÜNTÜLEME
  export const bilg_goruntule = () =>{

    const sol = ReactDOM.createRoot(document.getElementById("sol"));

    var user_info = sessionStorage.getItem("user_info");

    if(user_info == null){ 
      alert("Başvuru yapmadığınızdan dolayı başvuru bilgileri görüntülenemiyor. Başvuru formuna yönlendiriliyorsunuz.");
      setTimeout(function() {
        sol.render(
          <Basvur />
        )
      },1000)
    }
    else{

      var info_array = user_info.split(",");

      const sag = ReactDOM.createRoot(document.getElementById("sag"));
      sag.render(
        <>
       <div className="bg-light p-5 rounded">
        <h1>Başvuru Bilgileri</h1>
              {info_array.map((bilgi, bilgi_index) =>
                  (
                  <Bilgi
                    bilgi_ismi = {bilgi_baslik[bilgi_index]}
                    deger = {bilgi}
                  />
                  )
                  
                  )
                }
       </div>
        
        </>
      )
    }
   
    
  }