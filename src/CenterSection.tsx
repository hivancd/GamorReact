function Center() {
    return (
        <div id="center">
            <h2>Fortnite New Season</h2>
            <p>Join live stream</p>
            <button>+</button>
            <div id="time">
                <span style={{paddingRight: "10px"}}>11</span>
                :
                <span style={{ paddingLeft: "10px" }}>45</span>
            </div>
            <div className="displayed_streamer" id="displayed_streamer1"></div>
            <div className="displayed_streamer" id="displayed_streamer2"></div>
            <div className="displayed_streamer" id="displayed_streamer3"></div>
        </div>
    )
}

export default Center