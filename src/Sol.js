function Sol(props) {


    return (
        <>
            <div className="row">
                <div className="col-4">
                    <h1>{props.baslik}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p>{props.icerik}</p>
                </div>
            </div>
        </>
        );
}
export default Sol;