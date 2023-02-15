function Cards(props){
    return(
        <div className="cards">
            <img src={props.image} alt="{props.name}"></img>
            <h3>{props.name}</h3>
            <div className="info">
                <p>Age: {props.age}</p>
                <p>Pos: {props.position}</p>
                <p>Team: {props.team}</p>
            </div>
        </div>
    )
}

export default Cards