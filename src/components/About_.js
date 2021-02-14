import React from "react";
import {Grid,Box ,Typography} from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import josh from '../assets/josh.jpg';
import ben from '../assets/ben.jpg';
import Jamie from '../assets/jamie.jpg';
import Francis from '../assets/francis.JPG';
import Enock from '../assets/enock.JPG';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function  Resume() {
    const classes = useStyles();

    function FormRow() {
        return (
          <React.Fragment>

            <Grid item xs={12}  >

        <Box fontWeight="fontWeightLight" m={2} >
                <Typography variant="h5" color="primary" component="p" >
                  The Dev Team
                </Typography>
            </Box>

    < Fade left>
    <Box   fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>

        <Typography variant="h5" component="h2">
      Josh Lead Developer(Architect)
        </Typography>
        <Typography className={classes.pos}
         color="primary"
         style={{
          backgroundImage: `url(${josh})`,
          backgroundRepeat: 'no-repeat',
          width:'auto'  ,
          height:' 70vh' ,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>

        </Typography>
        <Typography variant="body2" component="p">
{'The idea sprung up as he strolled the streets of Masaka town in his Volkwagen and got a flat tire.'}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
            </Box>
    </Fade>
      <Fade left>
        <Box  fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>

        <Typography variant="h5" component="h2">
        Jamie Designer / Developer
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          style={{
           backgroundImage: `url(${Jamie})`,
           backgroundRepeat: 'no-repeat',
           width:'auto'  ,
           height:' 60vh' ,
           backgroundPosition: 'center',
           backgroundSize: 'cover'
         }}>

        </Typography>
        <Typography variant="body2" component="p">
      {'The idea sprung up as he strolled the streets of Masaka town in his Volkwagen and got a flat tire.'}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
            </Box>
    </Fade>
    <Fade left>
            <Box  fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>

        <Typography variant="h5" component="h2">
       Ben Developer
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          style={{
           backgroundImage: `url(${ben})`,
           backgroundRepeat: 'no-repeat',
           width:'auto'  ,
           height:' 60vh' ,
           backgroundPosition: 'center',
           backgroundSize: 'cover'
         }}>

        </Typography>
        <Typography variant="body2" component="p">
        {'The idea sprung up as he strolled the streets of Masaka town in his Volkwagen and got a flat tire.'}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
     </Box>
    </Fade>

    <Fade left>
            <Box  fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>

        <Typography variant="h5" component="h2">
       Enoch Developer
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          style={{
           backgroundImage: `url(${Enock})`,
           backgroundRepeat: 'no-repeat',
           width:'auto'  ,
           height:' 60vh' ,
           backgroundPosition: 'center',
           backgroundSize: 'cover'
         }}>

        </Typography>
        <Typography variant="body2" component="p">
        {'The idea sprung up as he strolled the streets of Masaka town in his Volkwagen and got a flat tire.'}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
     </Box>
    </Fade>

    <Fade left>
            <Box  fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>

        <Typography variant="h5" component="h2">
       Francis Developer
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          style={{
           backgroundImage: `url(${Francis})`,
           backgroundRepeat: 'no-repeat',
           width:'auto'  ,
           height:' 60vh' ,
           backgroundPosition: 'center',
           backgroundSize: 'cover'
         }}>

        </Typography>
        <Typography variant="body2" component="p">
        {'The idea sprung up as he strolled the streets of Masaka town in his Volkwagen and got a flat tire.'}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
     </Box>
    </Fade>
        </Grid>
          </React.Fragment>
        );
      }

      function FormRowTwo() {
        return (
          <React.Fragment>
            <Grid item xs={12}  >

        <Box fontWeight="fontWeightLight" m={2} >
                <Typography variant="h5" color="primary" component="p" >
                Experience
                </Typography>
            </Box>

            < Fade right>
    <Box   fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>

        <Typography variant="h5" component="h2">
        Lead Architect
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Mwesigwa Joshua - BSCs Makerere University

        </Typography>
        <Typography variant="body2" component="p">
        Enjoys making things work.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
            </Box>

            </Fade>
            < Fade right>
        <Box  fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>

        <Typography variant="h5" component="h2">
        Co-UI Designer
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Enoch Hall Asanda - BSCs Makerere University
        </Typography>
        <Typography variant="body2" component="p">
      In the grand scheme of things, the success of the AI community is in maintaining the perceived intelligence
      of those tasked with giving it the ability to do things humans take for granted, like eat their food, recognize their faces, and think.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
            </Box>
           </Fade>
           < Fade right>
            <Box  fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>

        <Typography variant="h5" component="h2">
        Senior UX Designer
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
       Francis Ocwer - BSCs Makerere University
        </Typography>
        <Typography variant="body2" component="p">
        Our study presents a surprising result: the best way to detect neural fake news is to use a model that is also a generator.
        The generator is most familiar with its own habits, quirks, and traits, as well as those from similar AI models,
        especially those trained on similar data, i.e. publicly available news.
        Our model, Grover, is a generator that can easily spot its own generated fake news articles, as well as those generated by other AIs.

          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
            </Box>
            </Fade>
            < Fade right>
            <Box  fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>

        <Typography variant="h5" component="h2">
        Graphic Designer

        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Muluuta Edwin Benedict - BSCs Makerere University

        </Typography>
        <Typography variant="body2" component="p">
      The Insane Clown Posse revealed a lot on Friday afternoon. First, they revealed that none of them is really “crazy.”
      When I first met Psychopathic Records CEO Shaggy 2 Dope, his snarling primal scream character was plenty violent.
      In real life, he’s the picture of calm and consistency.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
            </Box>
           </Fade>

        </Grid>
          </React.Fragment>
        );
      }


 return (<div  >
    <Grid container spacing={6}>

        <Grid container item xs={6}  spacing={2}>

          <FormRow></FormRow>
        </Grid>

        <Grid  container item  xs={6} spacing={2}  >

         <FormRowTwo> </FormRowTwo>

        </Grid>

      </Grid>
  </div>
     )
};
