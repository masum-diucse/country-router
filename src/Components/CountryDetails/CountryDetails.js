import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import './CountryDetails.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

  const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 400,
        marginTop: '30px',
    },
  }));

const CountryDetails = () => {
    const {alpha3Code}=useParams();
    const classes = useStyles();
    const [countryDetails,setCountryDetails]=useState({});
    useEffect(()=>{
        const url=`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`;
        axios(url)
        .then(data=>setCountryDetails(data.data));
    },[])
    const {flag,population,capital,area,name}=countryDetails;
    return (
       
       <Container>
                <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="250"
          image={flag}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Capital: {capital} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">           
          Population: {population} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">           
          Area: {area} km <sup>2</sup>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
       </Container>
       
    );
};

export default CountryDetails;