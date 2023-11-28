import Streamers from "./Streamers"

function Options() {
    return (
        <div id="options">
            <button><img className="icon" src="./src/assets/confetti.svg" alt="" />Party</button>
            <button>Matchs</button>
            <button>Streams</button>
        </div>
    )
}

function GameAndStreamers() {
    return (
        <div id="game_streamers">
            <h5>COD Warzone</h5>
            <hr></hr>
            <Streamers/>
            <button>Search Now</button>
        </div>
    )
}

function Right() {
    return (
        <div id="right">
            <div className="span"><span className="marked_number">01.</span><span>Platform</span> </div>
            <Options />
            <div className="span"><span className="marked_number">02.</span><span>Searching Game</span> </div>
            <GameAndStreamers/>
        </div>
    )
}

export default Right