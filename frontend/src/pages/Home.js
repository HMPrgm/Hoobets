import React, {useState, useEffect} from "react";
import axios from 'axios'

const Home = () => {
    const [bets, setBets] = useState('');

    useEffect(()=>{
        axios.post('/bets', {}, {
            params: {
                amount:10
            }
        })
        .then(res => {
            setBets(res.data)
        })
        .catch(e=>{
            console.error(e)
        })
    },[]);
    try {
        return (
            bets.map((bet, i) => (
                <li key={i}>
                    <h2>{bet.name}</h2>
                    <p>{bet.description}</p>
                    <p>Likes: {bet.likes}</p>
                </li>
            ))
        )
    }
    catch (e) {
        return(
            <p>"Loading..."</p>
        )
        
    }
};

export default Home;