import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {

    constructor(props){
        super(props);

        this.state = { lat: null, errorMessage: '' };
        // Placing geolocation call here so that we don't keep calling it in render method
        
    }


    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {this.setState({lat: position.coords.latitude, long: position.coords.longitude})},
            err => this.setState({errorMessage: err.message})
        )
    }

    // We must define the render method!
    render() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
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

