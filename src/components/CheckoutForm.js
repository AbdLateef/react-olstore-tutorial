import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from  "axios";
import { Button, Card, CardContent, Grid, TextField, Typography } from "@material-ui/core";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Checkout = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [address, setAddress] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };
    
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} style={{ justifyContent: 'center' }}>
                    <Grid item xs={8} style={{ textAlign: 'center', color: 'grey' }}>
                        <Typography variant="h6">
                            Please fill in the form to finish your order
                        </Typography>
                    </Grid>
                    <Grid item xs={8} style={{ justifyContent: 'center', color: 'grey' }}>
                        <Grid container style={{ justifyContent: 'center' }}>
                            <Grid item xs={4} style={{ padding: '3px' }}>
                                <TextField fullWidth label="Full Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={4} style={{ padding: '3px' }}>
                                <TextField fullWidth label="Email Address" variant="outlined" />
                            </Grid>
                            <Grid item xs={8} style={{ padding: '3px' }}>
                                <TextField
                                    id="outlined-textarea"
                                    label="Address"
                                    placeholder="Address"
                                    rows={4}
                                    multiline
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={8} style={{ textAlign: 'center', color: 'grey' }}>
                        <Button variant="contained" color="secondary" size="large" type="submit">Checkout</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Checkout
