import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from  "axios";
import { Button, Card, CardContent, Divider, Grid, TextField, Typography } from "@material-ui/core";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Checkout = (Props) => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [address, setAddress] = useState(null);
    const [productData, setProductData] = useState([]);
    const [checkedOut, setCheckedOut] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const product = await axios.post(`${process.env.REACT_APP_API_URL}/product/order`, {
                id: order.id,
                amount: order.amount,
                name: name,
                email: email,
                address, address
            });
            setCheckedOut(true);
            Props.UpdatedCart(false);
            localStorage.clear();
          } catch (err) {
            console.log(err);
          }
    };
    
    const order = JSON.parse(localStorage.getItem("cart"));
    useEffect(() => {
        const getProduct = async () => {
            try {
              const product = await axios.get(`${process.env.REACT_APP_API_URL}/product/${order.id}`);
              setProductData(product.data);
            } catch (err) {
              console.log(err);
            }
          }
        getProduct();    
    }, [])
    
    return (
        <Container>
            {checkedOut === true ? (
                <Grid container spacing={2} style={{ justifyContent: 'center', paddingBottom: '20px' }}>
                    <Grid item xs={8} style={{ textAlign: 'center', color: 'grey' }}>
                        <Typography variant="h5">
                            Checked Out Successfully
                        </Typography>
                    </Grid>
                    <Grid item xs={8} style={{ textAlign: 'center', color: 'grey' }}>
                        <Typography variant="h6">
                            Please transfer you payment to account number : 123456789
                        </Typography>
                    </Grid>
                </Grid>
            ) : (
                <>
                    <Grid container spacing={2} style={{ justifyContent: 'center', paddingBottom: '20px' }}>
                        <Grid item xs={8} style={{ textAlign: 'center', color: 'grey' }}>
                            <Typography variant="h6">
                                Your order review
                            </Typography>
                        </Grid>
                        <Grid item xs={8} style={{ justifyContent: 'center', color: 'grey' }}>
                            <Grid container style={{ justifyContent: 'center' }}>
                                <Grid item xs={4} style={{ padding: '3px' }}>
                                    Product Name :
                                </Grid>
                                <Grid item xs={4} style={{ padding: '3px' }}>
                                    {productData?.title}
                                </Grid>
                            </Grid>
                            <Grid container style={{ justifyContent: 'center' }}>
                                <Grid item xs={4} style={{ padding: '3px' }}>
                                    Amount :
                                </Grid>
                                <Grid item xs={4} style={{ padding: '3px' }}>
                                    {order.amount}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} style={{ justifyContent: 'center', paddingTop: '20px' }}>
                            <Grid item xs={8} style={{ textAlign: 'center', color: 'grey' }}>
                                <Typography variant="h6">
                                    Please fill in the form to finish your order
                                </Typography>
                            </Grid>
                            <Grid item xs={8} style={{ justifyContent: 'center', color: 'grey' }}>
                                <Grid container style={{ justifyContent: 'center' }}>
                                    <Grid item xs={4} style={{ padding: '3px' }}>
                                        <TextField
                                            fullWidth
                                            label="Full Name"
                                            variant="outlined"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={4} style={{ padding: '3px' }}>
                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            variant="outlined"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={8} style={{ padding: '3px' }}>
                                        <TextField
                                            id="outlined-textarea"
                                            label="Address"
                                            placeholder="Address"
                                            rows={4}
                                            multiline
                                            fullWidth
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={8} style={{ textAlign: 'center', color: 'grey' }}>
                                <Button variant="contained" color="secondary" size="large" type="submit">Checkout</Button>
                            </Grid>
                        </Grid>
                    </form>
                </>
            )}
        </Container>
    )
}

export default Checkout
