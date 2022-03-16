import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import './App.css';

export default function Home() {
  return (

    <div>


      <Header/>




<div>
 <Grid container spacing={70} columns={20} style={{"padding-left":"220px"}} id = 'firstcard'>
  <Grid item xs={4}>
    <div>

    <Card id = 'firstcardHome1' sx={{ minWidth: 375 }}>
      <CardContent>

        <Typography style={{"padding-left":"140px"}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <img src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png" alt=''/>
        </Typography>

        <Typography variant="h5" component="div">
        Find the best answer to your technical <br></br>question, help others answer theirs
        </Typography>

      </CardContent>
      <CardActions>
      <Button variant="contained" style={{"background-color":"#DA670B", "margin-left":"80px"}}>join the community</Button>
      </CardActions>
    </Card>

    </div>
  </Grid>
  <Grid item xs={7}>
    <div>

    <Card id='firstcardHome2' sx={{ minWidth: 375 }}>
      <CardContent>

        <Typography style={{"padding-left":"140px"}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <img src="https://img.icons8.com/ios/50/000000/lock.png" alt=''/>
        </Typography>

        <Typography variant="h5" component="div">
        Want a secure, private space for your <br></br>technical knowledge? <br></br> &nbsp;
        </Typography>

      </CardContent>
      <CardActions id='cardbutton'>
      <a href="https://stackoverflow.co/explore-teams" style={{"text-decoration":"none"}}><Button variant="contained">For Organization</Button> &nbsp;&nbsp;</a>
      <a href="https://stackoverflow.co/teams" style={{"text-decoration":"none"}}><Button variant="contained">For Teams</Button></a>
      
      
      </CardActions>
    </Card>

    </div>
  </Grid>
</Grid>
</div>

<div id='secondHome'>


        <h1 style={{"font-size":"60px", "padding-top":"80px", "color":"white"}} id='developer'>Every <span style={{"color":"#ED7211"}}>Developer</span> has a</h1>
        <h1 style={{"font-size":"60px", "color":"white"}}>tab open to Stack Overflow</h1><br></br>&nbsp;


</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<div id='thirdHome'>

<Grid style={{"padding-top":"50px","padding-bottom":"50px"}} container spacing={2} columns={16}>
  <Grid item xs={4}>
    <span>
        <b style={{"padding-left":"40px"}}>100+ Million</b><br></br>
        monthly visitors to Stack <br></br> Overflow & Stack Exchange
    </span>
  </Grid>
  <Grid item xs={4}>
    <span>
    <span>
        <b style={{"padding-left":"40px"}}>45+ Million</b><br></br>
        Times a developer got help <br></br> since 2008
    </span>
    </span>
  </Grid>
  <Grid item xs={4}>
    <span><span>
        <b style={{"padding-left":"40px"}}>179% ROI</b><br></br>
        from companies using Stack <br></br> Overflow for Teams
    </span></span>
  </Grid>
  <Grid item xs={4}>
    <span><span>
        <b style={{"padding-left":"40px"}}>5,000+</b><br></br>
        Stack Overflow for Teams <br></br> instances active every day
    </span></span>
  </Grid>
</Grid> <br></br>&nbsp;&nbsp;&nbsp;


</div>&nbsp;&nbsp;&nbsp;

<div>

<Grid id = 'secondCard' container spacing={70} columns={20}>
  <Grid item xs={4}>
    <span>
    <Card style = {{"background-color":"#FCE1CB"}} sx={{ minWidth: 375 }}>
      <CardContent>
        
        <Typography style = {{"padding-left":"40px"}} variant="h5" component="div">
        <span><img src="https://img.icons8.com/color/48/000000/stackoverflow.png" alt=''/>For stack<b>overflow</b></span>
        </Typography> <br></br> &nbsp;

        <Typography variant="h5" component="div" style={{"padding-left":"100px"}}>
        <img src="https://img.icons8.com/ios/100/000000/network-drive.png" alt=''/>
        </Typography> <br></br> &nbsp;

        <Typography variant="h5" component="div">
        <b>A public platform building the definitive collection of coding questions & answers</b>
        </Typography>

        <Typography variant="h5" component="div">
        <p>A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world.</p>
        </Typography>

      </CardContent>
      <CardActions>
      <Button style={{"background-color":"#DA670B","margin-left":"80px"}} variant="contained">Join the community</Button>
      </CardActions>
    </Card>
    </span>
  </Grid>

  <Grid item xs={4}>
    <span>

    <Card style = {{"background-color":"#CCE9FD"}} sx={{ minWidth: 375 }}>
      <CardContent>
        
        <Typography style = {{"padding-left":"60px"}} variant="h5" component="div">
        <img src="https://img.icons8.com/color/48/000000/stackoverflow.png" alt=''/>  <b>For Teams</b>
        </Typography> <br></br> &nbsp;

        <Typography variant="h5" component="div" style={{"padding-left":"100px"}}>
        <img src="https://img.icons8.com/ios/100/000000/network--v1.png" alt=''/>
        </Typography> <br></br> &nbsp;

        <Typography variant="h5" component="div">
        <b>A private collaboration & knowledge sharing SaaS platform for companies</b>
        </Typography>

        <Typography variant="h5" component="div">
        <p>A web-based platform to increase productivity, decrease cycle times, accelerate time to market, and protect institutional knowledge.</p>
        </Typography>

      </CardContent>
      <CardActions>
      <a href="https://stackoverflow.co/explore-teams" style={{"text-decoration":"none","margin-left":"25px"}}><Button variant="contained">For Organization</Button> &nbsp;&nbsp;</a>
      <a href="https://stackoverflow.co/teams" style={{"text-decoration":"none"}}><Button variant="contained">For Teams</Button></a>
      </CardActions>
    </Card>

    </span>
  </Grid>
</Grid><br></br>&nbsp;&nbsp;&nbsp;

</div>



<div id = "smallcut">

<h2 style={{"color":"white", "padding-left":"400px", "padding-top":"60px", "font-size":"40px"}}>Ensure your company stays on course</h2>
<h4 style={{"color":"white", "padding-left":"500px"}}>Here are just a few types of technologists that we help.</h4>

<Grid style={{"background-color":"#232629"}} container spacing={4} columns={16}>
  <Grid item xs={4}>
    <span>

    <Card style={{"background-color":"#232629","padding-left":"100px","border-left":"800px"}} sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
        <img src="https://img.icons8.com/emoji/96/000000/rocket-emji.png" alt=''/>
        </Typography>

        <Typography style={{"color":"white"}} variant="h5" component="div">
          <b>DevOps <br></br>Enginners</b>
        </Typography>

      </CardContent>  
    </Card>

    </span>
  </Grid>
  <Grid item xs={4}>
    <span>

    <Card style={{"background-color":"#232629","padding-left":"100px"}} sx={{ minWidth: 75 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
        <img src="https://img.icons8.com/fluency/96/000000/incoming-data.png" alt=''/>
        </Typography>

        <Typography style={{"color":"white"}} variant="h5" component="div">
          <b>Data <br></br>Sceintists</b>
        </Typography>

      </CardContent>  
    </Card>

    </span>
  </Grid>
  <Grid item xs={4}>
    <span>

    <Card style={{"background-color":"#232629","padding-left":"100px"}} sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
        <img src="https://img.icons8.com/office/80/000000/engineering.png" alt=''/>
        </Typography>

        <Typography style={{"color":"white"}} variant="h5" component="div">
          <b>Software<br></br>Enginners</b>
        </Typography>

      </CardContent>  
    </Card>

    </span>
  </Grid>
  <Grid item xs={4}>
    <span>

    <Card style={{"background-color":"#232629","padding-left":"100px"}} sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
        <img src="https://img.icons8.com/office/80/000000/technical-support--v2.png" alt=''/>
        </Typography>

        <Typography style={{"color":"white"}} variant="h5" component="div">
          <b>Support <br></br>Teams</b>
        </Typography>

      </CardContent>  
    </Card>

    </span>
  </Grid>
</Grid>


</div><br></br>&nbsp;&nbsp;&nbsp;


<div id="cardfour">

    <h1 style={{"padding-left":"600px","padding-bottom":"70px","padding-top":"60px", "font-size":"50px","color":"red"}}>PRICES</h1> 

<Grid container spacing={2} columns={16}>
  <Grid item xs={4}>
    <span>

    <Card style={{"background-color":"#C8CCD0", "border-radius":"25px"}} sx={{ minWidth: 275 }}>
      <CardContent>
      <Button style={{"background-color":"#DA670B"}} variant="contained">Free</Button> <br></br> &nbsp;
        <Typography variant="h5" component="div">
        <b style={{"padding-left":"110px"}}>Free</b>
        </Typography>

        <Typography variant="h6" component="div">
          <p>*ChatOps integrations - Slack & Microsoft Teams </p>
          <p>*Your own private space stackoverflow.com </p>
          <p>*Structured and searchable knowledge base </p><br></br>
        </Typography>

        
      </CardContent>
      <CardActions>
      <a href="https://stackoverflow.com/teams/create/basic"><Button style={{"background-color":"#DA670B","margin-left":"60px","text-decoration":"none"}} variant="contained">Create a free team</Button></a>
      </CardActions>
    </Card>

    </span>
  </Grid>
  <Grid item xs={4}>
    <span>

    <Card style={{"background-color":"#C8CCD0", "border-radius":"25px"}} sx={{ minWidth: 275 }}>
      <CardContent>
      <Button style={{"background-color":"#C8CCD0","color":"black"}} variant="contained">Basic</Button><br></br> &nbsp;
        <Typography variant="h5" component="div">
        <b style={{"padding-left":"110px"}}>$6 USD</b>
        </Typography>

        <Typography variant="h6" component="div">
          <p>*Single sign-on (SSO) with SAML + Okta integration</p>
          <p>*ChatOps integrations - Slack & Microsoft Teams </p>
          <p>*Your own private space hosted on stackoverflow.com</p>
        </Typography>

        
      </CardContent>
      <CardActions>
      <a href="https://stackoverflow.com/teams/create/basic"><Button style={{"background-color":"#C8CCD0","margin-left":"60px","text-decoration":"none"}} variant="contained">Get Started</Button></a>
      </CardActions>
    </Card>

    </span>
  </Grid>
  <Grid item xs={4}>
    <span>

    <Card style={{"background-color":"#C8CCD0", "border-radius":"25px"}} sx={{ minWidth: 275 }}>
      <CardContent>
      <Button style={{"background-color":"#51595F"}} variant="contained">Business</Button><br></br> &nbsp;
        <Typography variant="h5" component="div">
        <b style={{"padding-left":"110px"}}>$12 USD</b>
        </Typography>

        <Typography variant="h6" component="div">
          <p>*Additional integrations — ChatOps, Jira, GitHub & Okta </p>
          <p>*Group content together into Collections </p>
          <p>*Structured and searchable knowledge base </p>
        </Typography>

        
      </CardContent>
      <CardActions>
      <a href="https://stackoverflow.com/teams/create/basic"><Button style={{"background-color":"#51595F","margin-left":"60px","text-decoration":"none"}} variant="contained">Get Started</Button></a>
      
      </CardActions>
    </Card>

    </span>
  </Grid>
  <Grid item xs={4}>
    <span>

    <Card style={{"background-color":"#C8CCD0", "border-radius":"25px"}} sx={{ minWidth: 275 }}>
      <CardContent>
      <Button style={{"background-color":"#181A47"}} variant="contained">Enterprise</Button><br></br> &nbsp;
        <Typography variant="h5" component="div">
        <b style={{"padding-left":"110px"}}>Free</b>
        </Typography>

        <Typography variant="h6" component="div">
          <p>*Flexible hosting options — cloud or on-premises</p>
          <p>*Your own customer success and community building representative </p>
          <p>*99.5% uptime SLA and priority support </p>
        </Typography>

        
      </CardContent>
      <CardActions>
      <a href="https://stackoverflow.com/teams/create/basic"><Button style={{"background-color":"#181A47","margin-left":"60px","text-decoration":"none"}} variant="contained">Request a demo</Button></a>
      
      </CardActions>
    </Card>
    </span>
  </Grid>
  
</Grid>


</div> <br></br> &nbsp;&nbsp;&nbsp;

<div id='cardfour' style={{"margin-top":"80px","margin-bottom":"80px"}}>

<Grid container spacing={2} columns={16}>
  <Grid item xs={4}>
    <span>
    <img src="https://img.icons8.com/cute-clipart/64/000000/quote-left.png" alt=''/>
    <p>Stack Overflow for Teams has been a resource for our entire company. Not only for developers to solve problems, it’s also enabled our sales field to answer technical questions that help them close deals.</p>
    </span>
  </Grid>
  <Grid item xs={4}>
    <span>
    <img src="https://img.icons8.com/cute-clipart/64/000000/quote-left.png" alt=''/>
    <p>Engineers should help solve the hardest questions, the unknowns, where being familiar with how the product was built is essential. But we don’t want to keep answering solved problems over and over again. That’s where Stack Overflow for Teams really helps.</p>
    </span>
  </Grid>
  <Grid item xs={4}>
    <span><img src="https://img.icons8.com/cute-clipart/64/000000/quote-left.png" alt=''/></span>
    <p>As we started to use [Stack Overflow for Teams] and saw how nice it was to have a repository of information, we started to see it spread to other teams. Our customer support team started using it, our people success team started using it, next thing we knew, we had [Slack] integrations all over the place.</p>
  </Grid>
  <Grid item xs={4}>
    <span><img src="https://img.icons8.com/cute-clipart/64/000000/quote-left.png" alt=''/></span>
    <p>What we love about Stack Overflow for Teams is that it’s a very dynamic tool…there’s just so many ways to use this as a liaison between different teams and different knowledge bases.</p>
  </Grid>
</Grid>

</div>


<Footer/>

</div>



  );
}