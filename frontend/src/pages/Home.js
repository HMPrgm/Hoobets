import React, { useState, useEffect } from "react";
import axios from 'axios'
import BetPreview from "../features/BetPreview";

const Home = ({ loggedIn }) => {
    const [bets, setBets] = useState('');

    useEffect(() => {
        axios.post('/bets', {
            amount: 10
        })
            .then(res => {
                setBets(res.data)
            })
            .catch(e => {
                setBets([{
                    "id": 1,
                    "active": 1,
                    "name": "Professor Orrico Stickers",
                    "description": "Professor Orrico Stickers, renowned in academia for his pioneering work in cognitive psychology and human behavior, has recently emerged as a leading figure in the field of educational innovation. His eponymous stickers, designed with meticulous attention to detail and backed by rigorous empirical research, have revolutionized the way educators approach motivation and learning reinforcement. Unlike conventional stickers, Professor Orrico's creations are infused with carefully crafted affirmations and motivational messages, strategically tailored to boost students' self-esteem and foster a positive attitude towards learning.",
                    "image": "https://m.media-amazon.com/images/I/71wIaj8jt2L._AC_UF894,1000_QL80_.jpg",
                    "data": {
                        "type": "overunder",
                        "max": 5.0,
                        "min": 0.0,
                        "num": 3.5
                    },
                    "likes": 120
                },
                {
                    "id": 2,
                    "active": 0,
                    "name": "Professor Morrison Gets Pissed off",
                    "description": "Lorem Ipsum",
                    "image": "https://m.media-amazon.com/images/I/71wIaj8jt2L._AC_UF894,1000_QL80_.jpg",
                    "data": {
                        "type": "happens",
                        "max": 10.0,
                        "min": 0.0,
                        "num": 5.5
                    },
                    "likes": 121
                },
                {
                    "id": 3,
                    "active": 1,
                    "name": "Professor Mahmood",
                    "description": "Things can become pretty much complicated",
                    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fasif-mahmood-5aa930a&psig=AOvVaw3Wf2mY7syoXZuoKuKZ74QV&ust=1711300728849000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiMhJLyioUDFQAAAAAdAAAAABAE",
                    "data": {
                        "type": "exist"
                    },
                    "likes": 32
                }]);
                console.error(e)

            })
    }, []);

    try {
        let newBets = [];
        let oldBets = [];
        for (let i = 0; i < bets.length - 1; i++) {
            if (bets[i].active) {
                newBets.push(bets[i])
            }
            else {
                oldBets.push(bets[i])
            }
        }
        console.log(bets)
        console.log(oldBets)

        return (


            <>
            {
                    oldBets.length ? <h1 className="m-5 p-2 text-center">Active Bets</h1> : ""
                }
                {newBets.map((bet, i) => (
                    <BetPreview bet={bet} loggedIn={loggedIn} />
                ))}
                {
                    oldBets.length ? <h2 className="p-2 text-center">Past Bets</h2> : ""
                }
                {oldBets.map((bet, i) => (
                    <BetPreview bet={bet} loggedIn={true} />
                ))}
            </>


        )
    }
    catch (e) {
        return (
            <p>"Loading..."</p>
        )


    }
};

export default Home;