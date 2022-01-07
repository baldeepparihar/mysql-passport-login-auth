import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <div className="home">
            {/* <h1>Welcome to the MongoDb and Jason Web Token signup and signin app!</h1> */}
            <div className="home__header">
                <span className="L1">W</span> 
                <span className="L2">e</span> 
                <span className="L3">l</span> 
                <span className="L4">c</span> 
                <span className="L5">o</span> 
                <span className="L6">m</span> 
                <span className="L7">e </span>

                <span className="L8">t</span> 
                <span className="L9">o </span>

                <span className="L10">t</span> 
                <span className="L11">h</span> 
                <span className="L12">e </span>

                <span className="L13">M</span> 
                <span className="L14">o</span> 
                <span className="L15">n</span> 
                <span className="L16">g</span> 
                <span className="L17">o</span> 
                <span className="L18">D</span> 
                <span className="L19">b </span> 

                <span className="L20">a</span>
                <span className="L21">n</span>
                <span className="L22">d </span>

                <span className="L23">J</span>
                <span className="L24">a</span>
                <span className="L25">s</span>
                <span className="L26">o</span>
                <span className="L27">n </span>

                <span className="L28">W</span>
                <span className="L29">e</span>
                <span className="L30">b </span>

                <span className="L31">T</span>
                <span className="L32">o</span>
                <span className="L33">k</span>
                <span className="L34">e</span>
                <span className="L35">n </span>

                <span className="L36">s</span>
                <span className="L37">i</span>
                <span className="L38">g</span>
                <span className="L39">n</span>
                <span className="L40">u</span>
                <span className="L41">p </span>

                <span className="L42">a</span>
                <span className="L43">n</span>
                <span className="L44">d </span>

                <span className="L45">s</span>
                <span className="L46">i</span>
                <span className="L47">g</span>
                <span className="L48">n</span>
                <span className="L49">i</span>
                <span className="L50">n </span>

                <span className="L51">a</span>
                <span className="L52">p</span>
                <span className="L53">p</span>
                <span className="L54">!</span>
            </div>


            <h3>Click below to begin the registration process</h3>
            <Link to="/signup"><button className="buttonFill">Register</button></Link>
        </div>
    )
}

export default Home;
