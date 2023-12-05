function AddButton(props:{val: number}) {
    return (<button className="add_button" value={props.val-1}>+</button>)
}

function StreamerImg(props:{ src:string }) {
    return (<img className="icon streamer_img" src={props.src} />)
}

function StreamerItem(props:{TeamName:string, position: number, img: string}) {
    return (
        <li>
            <span className="number">{props.position}</span>
            <p className="team_name">{props.TeamName}</p>
            <div className="button_image">
                <StreamerImg src={props.img}/>
                <AddButton val={props.position}/>
            </div>
        </li>
    )
}

function Streamers() {
    return (
        <ul>
            <StreamerItem TeamName="Dr Team" position={1} img="./src/assets/fortnite1.jpg"/>
            <StreamerItem TeamName="Mia Plays" position={2} img="./src/assets/fortnite2.jpg"/>
            <StreamerItem TeamName="Keoxer" position={3} img="./src/assets/fortnite3.jpg"/>
            <StreamerItem TeamName="Nickmerc" position={4} img="./src/assets/fortnite4.jpg"/>
        </ul>
    )
}

export default Streamers