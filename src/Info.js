import { bilg_goruntule } from "./Functions";
import {goster} from './Functions';

function Info(){

    return (
        <>
        <div className="bg-light rounded">
            <div className="row">
                <h2>Başvuru Süreci</h2>
                <hr/>
                <span className="m-2">Programımıza başvurular <b>07.03.2023</b> tarihinde başlamıştır.</span>
                
                <span className="m-2">Başvuru yapmak için hesap oluşturabilir ve oluşturduğunuz hesap ile başvuru formunu kullanarak başvuru bilgilerinizi iletebilirsiniz.</span>
                
                <span  className="m-2">Aynı zamanda başvurunu gerçekleştirdiyseniz görüntülemek aşağıdaki butonu kullanbilirsiniz.</span>
                <hr/>
            </div>
            <div className="row text-center p-2">
                <div className="col-6">
                    <button className="btn btn-primary p-2" onClick={() => goster("Hemen Başvur")}>Başvuru Yap</button>
                </div>
                <div className="col-6">
                    <button className="btn btn-warning p-2" onClick={() => bilg_goruntule()}>Başvuru Görüntüle</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default Info;