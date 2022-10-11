import "./Cards.css"

const Cards = (props) => {
    return (
        <>
            <div className="card-section">
            {/* The header part of the card section */}
                <div className="card-header">
                    <h2>{props.name}</h2>
                    <a href="#">Explore more</a>
                </div>
                {/* The container were the whole cards of same catagory shows */}
                <div className="card-container">
                {/* Single Card Body */}
                    <div className="card-body">
                        <img className="card-image" alt="card" src={props.image} />
                        <div className="title">
                            <h2>{props.title}</h2>
                            <h4>heart</h4>
                        </div>
                        <h3 className="location">{props.location}</h3>
                        <h3 price>{props.price}</h3>
                    </div>
                    
                </div>
            </div>

        </>
    );
}

export default Cards;