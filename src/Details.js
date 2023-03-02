function Details(props){
 

    return (
        <>
        <div className="">
        <img src={props.resim}
            style={{
                height: '50%', 
                width: '50%', 
                display: 'block', 
                margin: '0 auto'
            }} />
        <p>{props.aciklama}</p>
        </div>
        </>
    );
}
export default Details;