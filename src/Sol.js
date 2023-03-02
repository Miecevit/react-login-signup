function Sol(props) {


    return (
        <>
        <div className="bg-light text-dark rounded mx-5 border border-warning" style={{height:"30em"}}>
            <div className="row px-3 py-2">
                <div className="col-12">
                    <h1>{props.baslik}</h1>
                </div>
            </div>
            <hr/>
            <div className="row px-5">
                <div className="col-12">
                    <p className="fs-5">{props.icerik}</p>
                </div>
            </div>
        </div>
        </>
        );
}
export default Sol;