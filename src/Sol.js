function Sol(props) {


    return (
        <>
        <div className="bg-light text-dark rounded mx-3 border border-warning" style={{height:"30em"}}>
            <div className="row p-3">
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