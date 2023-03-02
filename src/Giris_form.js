const kullanici = sessionStorage.getItem("user");

const kullanici_ayrik = kullanici.split(",");

var isLogin = false;
        


function girisKontrol() {
 

            const mail = document.getElementById("email").value;
            const sifre = document.getElementById("sifre").value;

            const yazi = document.getElementById("sonuc");

            if (mail == kullanici_ayrik[0] && sifre == kullanici_ayrik[1]) {

                yazi.innerHTML = "Giriş bilgileri doğru!"; 
                yazi.style.color = "green";

                document.getElementById("btn_div").style.display = "none";
                document.getElementById("header_sag").innerHTML = "Kullanıcı: " + kullanici_ayrik[0];

                isLogin = true;

                sessionStorage.setItem("isLogin", isLogin);

                document.getElementById("logout_Btn").style.display = "block";
                

            }
            else {
                yazi.innerHTML = "Girilen bilgiler hatalı.";
                yazi.style.color = "red";
            }


        }



function Giris_form(){
    return(
        <>
        <form>
        <i className="fa-solid fa-pen-nib fa-4x"></i>
        <h1 className="h3 mb-3 fw-normal">Giriş Yap</h1>

        <div className="form-floating py-2">
            <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
            <label for="floatingInput">Email adresi</label>
        </div>
        <div className="form-floating py-2">
            <input type="password" className="form-control" id="sifre" placeholder="Şifrenizi Giriniz"/>
            <label for="floatingPassword">Şifrenizi Giriniz</label>
        </div>

        <p id="sonuc"></p>

    </form>
    <button className="w-100 btn btn-lg btn-primary" onClick={() => girisKontrol()} >Giriş</button>
    </>
    );
}
export default Giris_form;