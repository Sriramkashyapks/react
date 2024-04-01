import profilePic from "./assets/profile.jpg";

function Card () {
    return(
        <div className="divCard">
            <img src={profilePic} alt="Profile Picture" className="cardPicture"/>
            <h2 className="cardName">Thatcher</h2>
            <p className="cardDescription">Love gaming and travelling with buddies 💕</p>
        </div>
    );
}

export default Card;