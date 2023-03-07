import React from 'react';
import ReactDOM from 'react-dom/client';

import NavList from './NavList';
import Details from './Details';

import bengal from './img/bengal.jpg';
import mavirus from './img/mavirus.jpg';
import van from './img/van.jpg';
import kedi from './img/kedi.jpg';
import yenikedi from './img/mavirus.jpg';


function Menu(){

//TEKRAR KULLANILABİLİR DEĞERLER
    const baslik = ["Bengal", "Mavi Rus", "Van", "Tekir", "Yeni Kedi", "armut"];

    const aciklama = ["Bengal kedileri güzel, zeki ve vahşi görünümlü kedilerdir. Bu melez kedi cinsi, kalıpları "+
                "ve kişilikleri nedeniyle popülaritesini artırıyor ve büyük bir ev kedisi ile yaklaşık aynı boyutta kalıyor. "+
                "Bir Asya leopar kedisi Abyssinian, Mısır mau veya Amerikan shorthair gibi evcil bir ev kedisiyle üretilerek geliştirildi.",

                "Russian Blue bir diğer adıyla Rus Mavisi, güzelliği ve tüylerinin parlaklığı ile dikkat çeken kedi türlerinden biridir."+
                "Yemyeşil gözleri ile sizi etkisi altına alacak olan Russian Blue cinsi kediler, dışarıdan gelen seslere karşı fazlasıyla"+
                "duyarlı bir yapıya sahiptirler. Bu nedenle aşırı seslere karşı zaman zaman olumsuz tepkiler verebilen kedilerdir. "+
                "Çocuklar ile çok iyi anlaşırlar ve oldukça da iyi birer oyuncu kimliğine sahiptirler.",

                "Van kedisi, adını Van Gölü bölgesine dayanan köklerinden alan, iyi bir yüzücü olan, gözleri mavi veya yeşil rengi "+
                "ya da biri mavi diğeri yeşil olabilen bir kedi ırkı. Genelde Van kedisi yavrularının iki kulağı arasında bir veya iki adet siyah nokta bulunur.",

                "Tekir, postu siyah çizgilerle ve beneklerle süslü, kül renginde veya boz olan çoğunlukla kafasının ön tarafında M harfine benzer deseni olan melez"+
                " ırklı bir kedi türüdür. Afrika yaban kedisi ve Avrupa'nın Mahalli Vahşi Kedisi karışımıdır. Sokak kedilerinin çoğunluğu bu melez ırktandır. En güzellerinin isimleri"+
                " Mara ve Kültigin'dir.",

            ];

    const resim = [bengal,mavirus,van,kedi,yenikedi];

//RENDER FONKSİYONU
    const goster = (index) => {

        const detay = ReactDOM.createRoot(document.getElementById("detay"));

            detay.render(
                <div className="row my-5 justify-content-center">
                    <div className="col-4 py-2 border border-dark">
                        <Details 
                        aciklama={aciklama[index]} 
                        resim={resim[index]} 
                        />
                    </div>
                </div>
            )
        
    }

//EKRANA BASTIRDIĞIMIZ İÇERİK
    return (
        <>
        <div style={{border: "1px solid black"}}>
            <ul style={{listStyle: 'none', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItem: 'center'
                        }}
            >
                {baslik.map((eleman, index) => 
                    (<NavList 
                        menuElemani={eleman} 
                        tiklandiginda={() => goster(index)} 
                    />)
                    )}
            </ul>
        </div>
        <div id="detay">

        </div>
        </>

    );
}

export default Menu;