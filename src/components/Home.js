import React from "react";
import { useHistory } from 'react-router-dom';

const Home = () => {

    const { push } = useHistory();
    const handleClick = () => {
        push('/login');
    }

    return (
    <div className="home-div">
        <div className="home-text">
            <h1>Home</h1>
        </div>
    </div> 
    )
}
export default Home;