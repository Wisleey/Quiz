import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hora: '00:00:00'
        };
    }

    componentDidMount() { 
        setInterval(() => {
            this.setState({ hora: new Date().toLocaleTimeString() });
        }, 1000);
    }

    componenteDiUpdate(){
        
    }

    render() {
        return (
            <div>
                <h1>Meu Projeto 3 {this.state.hora}</h1>
            </div>
        );
    }
}

export default App;
