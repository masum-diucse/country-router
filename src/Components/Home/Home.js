import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from '../Country/Country';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(2),
    },
  }));
const Home = () => {
    const [countries,setcountries]=useState([]);
    useEffect(()=>{
        const url='https://restcountries.eu/rest/v2/all';
        axios(url)
        .then(data=>setcountries(data.data));
    },[])

    const [spacing, setSpacing] = React.useState(5);
    const classes = useStyles();
    
    return (
        <Grid container className={classes.root} spacing={spacing}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {
                        countries.map((country)=><Country key={country.alpha3Code} country={country}></Country>)
                    }
                </Grid>
            </Grid>
        </Grid>
          
          
        
    );
};

export default Home;