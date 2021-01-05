import { Container, Grid, TextField, Button, Paper, makeStyles } from "@material-ui/core";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
    containerMain: {
        marginTop: '20px'
    },
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
                            style={{ margin: 8 }}
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
                        <TextField
                            id="intrest"
                            label="Hobbies"
                            style={{ margin: 8 }}
                            placeholder="What are your Hobbies"
                            helperText="We can help you to find any place near you!"
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
                        <Button fullWidth size="large" variant="outlined">Add Hobby</Button>
                    </Grid>
                    
                </Grid>
            </Container>
        </main>
    )
}