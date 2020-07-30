
 function App (props) {
    return (
    <div>
        <h1>Welcome from Sports Game starter!</h1>

    </div>
    )
    }
function App(props) {
    return (
        <div>
            <Team name="Cubs" logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/1920_cub_logo.svg/1200px-1920_cub_logo.svg.png" />
            <Team name="Pirates" logo="https://i.pinimg.com/originals/7f/ab/18/7fab183688a2ee869bad6aca0ae913af.png" />
        </div>
    )
}

class Team extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            numShots: 0,
            numGoals: 0,
            shotStats: 0,
        }
        this.shotSound = new Audio("./Ball+Hit+Cheer.mp3"),
            this.scoreSound = new Audio("./bball+crowd.mp3")

    }

    shoot = (event) => {

        this.setState(currentState => {
            setTimeout(() => {
                this.shotSound.play()
            }, 500)

            let Score = Math.round(Math.random())
            if (Score > 0) {
                setTimeout(() => {
                    this.scoreSound.play()
                }, 1000)

            }

            return {
                numShots: currentState.numShots + 1,
                numGoals: currentState.numGoals + Score,
            }
        })
    }
    render() {

        let shotStatsDiv
        if (this.state.numShots != 0) {
            let shotStats = (this.state.numGoals / this.state.numShots) * 100

            shotStatsDiv = (
                <div>
                    Shot Stats %: {shotStats}
                </div>
            )

        }
        return (
            <div>
                <h1>{this.state.name}</h1>
                <img src={this.props.logo} width={100} />
                <button onClick={this.shoot}><h2>Shoot</h2></button>
                <p>Number of Shots:{this.state.numShots}</p>
                <p>Score:{this.state.numGoals}</p>
                {shotStatsDiv}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)