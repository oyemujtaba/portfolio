import React, { Component } from 'react';
import SOCIALS from './assets/data/social'

class Social extends Component {

    render() {
        const { link, image } = this.props.social;

        return (
            <span>
               <a target='_blank' href={link}>
                <img style={{ width: 35,margin: 35 }} src={image} />
               </a>
            </span>
        )
    }
}

class Socials extends Component {

    render() {

        return (

            <div style={{textAlign:"center"}}>
                <h1>Contact us!</h1>
                <div>
                    {
                        SOCIALS.map(SOCIAL => {
                            return (
                                <Social key={SOCIAL.id} social={SOCIAL} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}

export default Socials;