import Films from './Films';
import People from './People';
const { Component } = require("react");

class App extends Component {
    constructor() {
        super();
        this.state = {
            show: null
        }
    }

    changeShow(show) {
        this.setState({show});
    }

    render() {
        if(this.state.show === null) {
            return(
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">What would you like to view?</h5>
                        <button onClick={() => this.changeShow('films')} className="btn btn-primary m-2">List of Films</button>
                        <button onClick={() => this.changeShow('people')} className="btn btn-primary">List of People</button>
                    </div>
              </div>
            );
        } else if(this.state.show === 'films') {
            return <Films />;
        } else if(this.state.show === 'people') {
            return <People />;
        }
    }
}

export default App;