import React, { Component } from 'react';
import Header from './Header';


class Jokes extends Component {
    state = {
        joke: {},
        Jokes: []
    }

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({ joke: json }))

    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => this.setState({ Jokes: json }))
    }

    render() {

        const { setup, punchline } = this.state.joke //one joke

        console.log(this.state)
        return (
            <div>
                <Header/>

                <div style={{ textAlign: "center" }}>

                    <h2>Jokes :)</h2>
                    <p  >{setup} <em>{punchline}</em></p>
                    <h1>Treat of Jokes</h1>
                    <button style={{ marginBottom: 10 }} onClick={this.fetchJokes}>Click me</button>
                    {
                        this.state.Jokes.map(joke => {
                            const { id, setup, punchline } = joke //10 jokes
                            return <p key={id}>{setup} <em>{punchline}</em></p>
                        }
                        )
                    }


                </div>
            </div>
        )
    }

}

export default Jokes;