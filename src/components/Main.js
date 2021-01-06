import { makeStyles, 
    Container, Grid, TextField, 
    Button, Card,  CardActions, 
    CardContent, Typography} from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab';
import { useState, useEffect } from "react";
import Header from "./Header";
import Icon from '@material-ui/core/Icon';
import RoomIcon from '@material-ui/icons/Room';
import GoogleMapReact from 'google-map-react';

const useStyles = makeStyles((theme) => ({
    containerMain: {
        marginTop: '20px'
    },
    mapCard: {
        marginTop: '20px',
        marginBottom: '20px',
        height: '500px'
    }
  }));

export default function Main() {

    const classes = useStyles();

    return (
        <main>
            <Header />
            <Container maxWidth="md" className={classes.containerMain}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            id="fullname"
                            label="Full Name"
                            style={{  }}
                            placeholder="Full Name"
                            helperText="Enter Your Full Name!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            type="text"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={top100Films}
                            getOptionLabel={(option) => option.title}
                            defaultValue={[top100Films[13]]}
                            filterSelectedOptions
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                label="Enter Your Hobbies"
                                placeholder="Your Hobboies"
                            />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth size="large" variant="outlined">Add Hobby</Button>
                    </Grid>
                    
                </Grid>
            </Container>

            <Container maxWidth="md" className={classes.mapCard}>
                {/* <Grid container spacing={3}>
                    
                </Grid> */}
                <Card style={{height: '100%'}}>
                    <CardContent>
                        <SimpleMap />
                    </CardContent>
                   
                </Card>

            </Container>
        </main>
    )
}




const AnyReactComponent = ({ text }) => <div style={{width: '20px', height: '20px', background: 'red', borderRadius:'20px'}}>{text}</div>;
 
function SimpleMap() {

  const [center, setCenter] = useState({
    lat: 59.95,
    lng: 30.33
  })

  const [zoom, setZoom] = useState(11)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setCenter({lat: position.coords.latitude, lng: position.coords.longitude})
      });
  });
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCSWegjPmUcm6v8ptoiERXXArLzq4qPdig' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={center.lat}
            lng={center.lng}
            text="Your Are Here"
          />
        </GoogleMapReact>
      </div>
    );
  }




const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 }

  ];