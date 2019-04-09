import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';



class App extends React.Component {

    state = {lat: null, errorMessage:''};


    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // WE MUST CALL setState whenever we want to change state
                this.setState({lat: position.coords.latitude});
                
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );

    }

    // We must define the render method!
    render() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }

        if (!this.state.errorMessage && !this.state.lat){
            return <div>Loading!</div>
        }

    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);



