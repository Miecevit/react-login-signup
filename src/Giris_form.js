import {girisKontrol} from './Functions';

function Giris_form(){
    return(
        <>
        <div className="bg-light text-dark rounded border border-warning" style={{height:"30em"}}>
            <form>
            <i className="fa-solid fa-pen-nib fa-4x"></i>
            <h1 className="h1 mb-3 fw-normal">Giriş Yap</h1>
            <hr/>
            <div className="form-floating py-2">
                <label for="email">Email adresi</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                
            </div>
            <div className="form-floating py-2">
                <input type="password" className="form-control" id="sifre" placeholder="Şifrenizi Giriniz"/>
                <label for="floatingPassword">Şifrenizi Giriniz</label>
            </div>

            <p id="sonuc"></p>

            </form>
            <button className="w-100 btn btn-lg btn-primary" onClick={() => girisKontrol()} >Giriş</button>
        </div>
        </>
    );
}
export default Giris_form;

