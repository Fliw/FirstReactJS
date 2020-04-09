import React from 'react';
import game from './images/game.png';
import coding from './images/coding.png';
import tidur from './images/tidur.png';
function Card(props) {
    const Lists = [
        {
            Name: 'Gaming',
            Image: game
        },
        {
            Name: 'Coding',
            Image: coding
        },
        {
            Name: 'Sleeping',
            Image: tidur
        }
    ];
    return (
        <div className="row">
            {Lists.map(Item => {
                return (
                    <div className="col-md-4 text-center">
                        <img src={Item.Image}></img>
                        <h3>{Item.Name}</h3>
                    </div>
                )
            }
            )
            }
        </div>
    );
}
function skill() {
    return (
        <div>
            <h2 className="skill text-center text-dark">
                Hobbies
        </h2>
            <Card></Card>
        </div>
    );
}
export default skill;