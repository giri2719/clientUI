import React from 'react';
import Header from './Header';
import Footer from './Footer';

import { Grid } from '@mui/material';



const About = () => {
  return (
    <div>

        <Header/>

        <div>


            <div id='aboutfirstcard'>

                <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <span style={{"margin-left":"60px","padding-top":"60px"}}>

                    <img src="https://img.icons8.com/office/480/000000/groups.png" alt=''/>
                    </span>
                </Grid>
                <Grid item xs={8}>
                    <span style={{"padding-right":"60px","padding-top":"60px"}}>

                        <p style={{"padding-top":"80px"}}>WHO WE ARE</p>
                        <h1><b>Empowering the world to develop technology through collective knowledge</b></h1>
                        <p>Our public platform serves 100 million people every month, making it one of the most popular websites in the world.</p>
                        <p>Our asynchronous knowledge management and collaboration offering Stack Overflow for Teams, is transforming how people work.</p>
                    </span>
                </Grid>
                </Grid>


            </div>

            <div id="aboutsecondcard">

            <Grid container spacing={2} columns={16}>
            <Grid item xs={4}>
                <span>
                    <b style={{"padding-left":"20px","font-size":"20px"}}>100+ miilion</b>
                    <p>onthly visitors to our <br></br>network</p>
                </span>
            </Grid>
            <Grid item xs={4}>
                <span>
                    <b style={{"padding-left":"20px","font-size":"20px"}}>21+ million</b>
                    <p>Questions asked to-date</p>
                </span>
            </Grid>
            <Grid item xs={4}>
                <span>
                    <b style={{"padding-left":"20px","font-size":"20px"}}>13.2 seconds</b>
                    <p>Average time between<br></br> new questions</p>
                </span>
            </Grid>
            <Grid item xs={4}>
                <span style={{"padding-left":"20px","font-size":"20px"}}>
                    <b>15.6 Billion</b>
                    <p>Times a developer got <br></br>help</p>
                </span>
            </Grid>
            </Grid>

            </div>


            <div id='aboutthirdcard'>

            <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
                <span>
                    <h5 style={{"font-size":"20px"}}>Founded in 2008, Stack Overflow’s public platform is used by nearly everyone who codes to learn, share their knowledge, collaborate, and build their careers.</h5>
                    <h5 style={{"font-size":"20px"}}>Our products and tools help developers and technologists in life and at work. These products include Stack Overflow for Teams , Stack Overflow Advertising , and Stack Overflow for Talent and Jobs .</h5>
                </span>
            </Grid>
            <Grid item xs={8}>
                <span>
                    <h5 style={{"font-size":"20px"}}>Stack Overflow for Teams, our core SaaS collaboration product, is helping thousands of companies around the world make the transition to remote work, address business continuity challenges, and undergo digital transformation.</h5>
                    <h5 style={{"font-size":"20px"}}>Whether it’s on Stack Overflow or within Stack Overflow for Teams, community is at the center of all that we do.</h5>
                </span>
            </Grid>
            </Grid>

            </div>
        </div>


        <Footer/>

        
    </div>
  )
}

export default About;