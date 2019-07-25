import React, { Component } from 'react';

const TITLES = [
    'I am a software engineer',
    'footballer',
    'love to travel'
]

class Title extends Component {
    
    state = { titleIndex: 0 };

    animateTitle = () =>{
        setInterval(() => {
            
            const titleIndex=(this.state.titleIndex + 1) % TITLES.length;
            this.setState({titleIndex});
        }, 2000);

    }
    componentDidMount(){
        // console.log("MOUNted");
        this.animateTitle()
    }

    render(){
        
        const title=TITLES[this.state.titleIndex]

        return(
                <p>{title}</p>
        )
    }

}
export default Title;