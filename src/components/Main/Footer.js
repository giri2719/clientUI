import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function Footer() {

  return (
    <Grid container id='foot'>

      <Grid item xs>
        <h3><b>STACK OVERFLOW</b></h3><br></br>
        <h5>Questions</h5>
        <h5>Jobs</h5>
        <h5>Developer Jobs Directory</h5>
        <h5>Help</h5>
        <h5>Mobile</h5>
      </Grid>
      
      <Grid item xs>
      <h3><b>PRODUCTS</b></h3><br></br>
        <h5>Teams</h5>
        <h5>Talent</h5>
        <h5>Advertising</h5>
        <h5>Enterprise</h5>
      </Grid>

      <Grid item xs>
      <h3><b>COMPANY</b></h3><br></br>
        <h5>About</h5>
        <h5>Press</h5>
        <h5>Work Here</h5>
        <h5>Legal</h5>
        <h5>Privacy Policy</h5>
        <h5>Contact Us</h5>
      </Grid>

      <Grid item xs>
      <h3><b>STACK EXCHANGE NETWORK</b></h3><br></br>
        <h5>Technology</h5>
        <h5>Culture & recreation</h5>
        <h5>Life & arts</h5>
        <h5>Science</h5>
        <h5>Business</h5>
        <h5>API</h5>
      </Grid> 

      <Grid item xs>
      <a href="https://www.facebook.com"><h5><img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt=''/></h5></a>
      <a href="https://www.twitter.com"><h5><img src="https://img.icons8.com/fluency/48/000000/twitter.png" alt=''/></h5></a>
      <a href="https://www.blog.com"><h5><img src="https://img.icons8.com/fluency/48/000000/blog.png" alt=''/></h5></a>
      <a href="https://www.linkedin.com"><h5><img src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt=''/></h5></a>
      <a href="https://www.instagram.com"><h5><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt=''/></h5></a>

      </Grid>
    </Grid>
  );
}