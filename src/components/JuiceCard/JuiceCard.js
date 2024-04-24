import './JuiceCard.css';

const JuiceCard = (props) => {
    return (
        <div className='juice-card'>
            <div className="img-box">
                <img src={props.image} alt={props.name} />
            </div>

            <div className="desc">
                <div className="top">
                    <h2>{props.name}</h2>
                    <p>{props.price}</p>
                </div>

                <div className="bottom">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default JuiceCard;