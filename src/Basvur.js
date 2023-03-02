import {gonder} from './Functions';

function Basvur() {

    return (
<>
        <form>
        <div class="row justify-content-center">
            <div class="col-6" style={{backgroundColor:"antiquewhite"}}>
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-center">100KY Başvuru Formu</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <label for="inputName" class="col-form-label">İsim/Soyisim:</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="inputName" class="form-control"/>
                            </div>
                            <div class="col-auto">
                                <span id="nameHelpInline" class="form-text">
                                    İletişim mail adresinizi giriniz.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <label for="inputMail" class="col-form-label">E-mail:</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="inputMail" class="form-control"/>
                            </div>
                            <div class="col-auto">
                                <span id="mailHelpInline" class="form-text">
                                    İletişim mail adresinizi giriniz.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <hr />
                        <span class="col-form-label">Eğitim Durumu:</span>
                        <select class="form-select form-select-m mb-3">
                            <option selected> </option>
                            <option value="1">Lise</option>
                            <option value="2">Lisans</option>
                            <option value="3">Lisansüstü</option>
                        </select>
                    </div>
                    <div class="col-6">
                        <hr />
                        <span class="col-form-label">Doğum Tarihi:</span>
                        <input type="date" class="form-control" />
                    </div>
                </div>
                
            </div>
        </div>
    </form>
    <div class="row justify-content-center ">
                    <div class="col-6 my-2 bg-light">
                        <div class="d-flex justify-content-center">

                            <input class="btn btn-primary mx-3" value="Send" onClick={()=> gonder()} />
                            <input type="reset" class="btn btn-outline-secondary mx-3" />
                        </div>
                    </div>
                </div>
    
    </>
    );
}
export default Basvur;