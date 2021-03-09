import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Country.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 270,
    },
    
  });

const Country = (props) => {
    const classes = useStyles();
    const {flag,name,alpha3Code}=props.country;
    return (
        <div className="country-container">
            <Card className={classes.root} style={{backgroundColor: "#f5f5f5"}} >
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={name}
                    height="200"
                    image={flag}
                    title={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{justifyContent: 'center'}}>
                    <Link to={`/countryDetails/${alpha3Code}`} style={{textDecoration: 'none'}}>
                        <Button  variant="outlined" color="secondary" >Learn More</Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default Country;