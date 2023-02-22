function Cards(props){
    return(
        
            <div className="card">
                <img src={props.logo} alt={props.name} />
                <h2 className="card-title">{props.name}</h2>
                <p><span>Stadium:</span> {props.stadium}</p>
            </div>
        
    )
}

export default Cards